import styles from "styles/components/repoItem.module.scss";
import { animated, useSpring } from "@react-spring/web";
import { useState, MouseEvent } from "react";
import { Modal } from "./modal";
import Image from "next/image";

interface IRepoItem {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  language: string;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  description: string;
  default_branch: string;
  isFavorited: boolean;
}

export const RepoItem = ({
  id,
  name,
  full_name,
  html_url,
  language,
  created_at,
  updated_at,
  stargazers_count,
  description,
  default_branch,
  isFavorited,
}: IRepoItem) => {
  // raw.githubusercontent.com/{owner}/{repo}/{branch}/README.md
  const rootPath = `https://raw.githubusercontent.com/${full_name}/${default_branch}`;

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleDismiss = () => {
    setIsModalVisible(false);
    setToggle(false);
  };
  const openModal = (e: MouseEvent) => {
    setIsModalVisible(true);
  };

  const [toggle, setToggle] = useState<boolean>(false);
  const animatedStyles = useSpring({
    from: {
      transform: "scale(1.0)",
      backgroundColor: isModalVisible ? "white" : "black",
      color: isModalVisible ? "black" : "white",
    },
    to: {
      transform: toggle ? "scale(1.2)" : "scale(1)",
      backgroundColor: isModalVisible ? "white" : "black",
      color: isModalVisible ? "black" : "white",
    },
    config: { mass: 1, tension: 180, friction: 12 },
  });

  const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    setToggle(true);
  };

  const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    if (!isModalVisible) setToggle(false);
  };

  return (
    <>
      <Modal
        headerTxt={name}
        description={description}
        language={language}
        isVisible={isModalVisible}
        rootPath={rootPath}
        onDismiss={handleDismiss}
        link={
          <div
            className={styles.checkItOutLink}
            onClick={() => {
              window.open(html_url, "_blank");
            }}
          >
            <a>Check it out</a>
            <Image
              src="/svgs/external-link-alt-white.svg"
              width={20}
              height={20}
              alt={""}
            />
          </div>
        }
      />
      <animated.div
        className={styles.container}
        style={{ cursor: "pointer", ...animatedStyles }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={openModal}
      >
        <div style={{ display: "flex", gap: ".5rem" }}>
          <h2>{name}</h2>
          {isFavorited && (
            <Image
              src={"/svgs/star-solid-yellow.svg"}
              width={20}
              height={20}
              alt={""}
            />
          )}
        </div>
        {language && <h4>{language}</h4>}
      </animated.div>
    </>
  );
};
