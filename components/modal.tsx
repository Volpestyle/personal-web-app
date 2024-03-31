import { animated, useSpring } from "@react-spring/web";
import { ReactNode, useEffect, useState } from "react";
import styles from "styles/components/ui/Modal.module.scss";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { getMeta } from "../utils/basic";

interface IModal {
  isVisible: boolean;
  headerTxt: string;
  description: string;
  language: string;
  onDismiss: () => void;
  link: ReactNode;
  rootPath: string;
}
enum visibilityEnum {
  visible = "visible",
  hidden = "hidden",
}
type VisibilityType = keyof typeof visibilityEnum;

export const Modal = ({
  isVisible,
  headerTxt,
  description,
  language,
  rootPath,
  link,
  onDismiss,
}: IModal) => {
  const [visibilityStyle, setVisibility] = useState<VisibilityType>(
    visibilityEnum.hidden
  );
  const [readMeTxt, setReadMeTxt] = useState<{
    data?: string;
    imgMetadata?: any;
  }>({});
  const [error, setError] = useState<Error>();
  const readMePath = `${rootPath}/README.md`;

  useEffect(() => {
    if (isVisible) {
      setVisibility(visibilityEnum.visible);
      fetch(readMePath, {
        headers: new Headers({ accept: "application/vnd.github.v3.raw" }),
      })
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.text();
        })
        .then(async (data) => {
          // get all images in md by regex
          const images = data.matchAll(/!\[.*\]\(.*\)/g);
          const names: string[] = [];
          const imgMetadata = [...images].map(async (img) => {
            const name = img[0].slice(
              img[0].indexOf("(") + 1,
              img[0].length - 1
            );
            names.push(name);
            const url = `${rootPath}/${name}`;
            return await getMeta(url);
          });
          // once we have metadata, set data
          Promise.all(imgMetadata).then((res) => {
            const mapping: any = {};
            names.forEach((name, i) => {
              mapping[name] = res[i];
            });
            setReadMeTxt({ data, imgMetadata: mapping });
          });
        })
        .catch((e: Error) => {
          setError(e);
        });
    } else
      setTimeout(() => {
        setVisibility(visibilityEnum.hidden);
      }, 500);
  }, [isVisible]);

  const animStyles = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: isVisible ? 1 : 0,
    },
  };
  const containerAnim = useSpring(animStyles);
  const contentAnim = useSpring({
    ...animStyles,
    delay: 100,
  });
  console.log(error);

  return (
    <animated.div
      className={styles.container}
      style={{ visibility: visibilityStyle, ...containerAnim }}
    >
      <animated.div
        className={styles.modalContainer}
        style={{ ...contentAnim }}
      >
        <div
          onClick={onDismiss}
          style={{ cursor: "pointer", padding: "1rem", width: "fit-content" }}
        >
          <Image
            src="/svgs/x-solid.svg"
            width={30}
            height={30}
            alt={""}
          ></Image>
        </div>
        {/*<h1>{headerTxt}</h1>*/}
        {/*<h3 className={styles.desc}>{description}</h3>*/}
        {language && (
          <h4 className={styles.lang}>
            Language: <span className={styles.whiteCircle}>{language}</span>
          </h4>
        )}
        {link}
        <div className={styles.contentContainer}>
          {!readMeTxt.data && !error ? (
            <div className={styles.imgWrapper}>
              <Image
                src={"/svgs/loading-ring-white.svg"}
                width={150}
                height={150}
                alt={""}
              />
            </div>
          ) : error ? (
            <p>Uh oh, no readme.md, Oh well!</p>
          ) : (
            <ReactMarkdown
              children={readMeTxt.data || ""}
              components={{
                img: ({ src }: { src?: string }) =>
                  !!src ? (
                    <img
                      src={`${rootPath}/${src}`}
                      style={{
                        width: `${readMeTxt.imgMetadata?.[src]?.width}px`,
                        maxWidth: "100%",
                        height: `${
                          (readMeTxt.imgMetadata[src].width /
                            readMeTxt.imgMetadata[src].height) *
                          100
                        }%`,
                      }}
                    />
                  ) : (
                    <></>
                  ),
              }}
            />
          )}
        </div>
      </animated.div>
    </animated.div>
  );
};
