import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import PublicLayout from "components/layouts/public.layout";
import { RepoItem } from "components/repoItem";
import Decorations from "containers/projects/decorations";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Error from "components/ui/error";
// import LinkButton from "components/ui/linkButton";
import styles from "styles/containers/projects/Projects.module.scss";

const dontInclude = [
  "Volpestyle/Volpestyle",
  "Volpestyle/MLClass",
  "Volpestyle/Graphql-Spring-boot-Spring-Security",
  "Volpestyle/saml2-js",
  "Volpestyle/Code-Foo-2019",
  "Volpestyle/321PA2",
  "Volpestyle/COMS474-HW1",
];
const favorites = [201538982];
const Project = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [error, setError] = useState<any>([]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    fetch("https://api.github.com/users/volpestyle/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (item: any) => !dontInclude.includes(item.full_name)
        );
        const faves = filtered.filter((repo: any) => repo.stargazers_count > 0);
        const rest = filtered.filter(
          (repo: any) => repo.stargazers_count === 0
        );
        setRepos(faves.concat(rest));
      })
      .catch((e) => setError(e));

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  useEffect(() => {
    if (repos) {
    }
  }, [repos, error]);

  const hashToPage: { [key: string]: any } = {
    designs: 1,
  };
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  const handleScroll = (section: string) => {
    scroll(hashToPage[section]);
  };

  return (
    <PublicLayout showFooter={false}>
      <div>
        <Parallax pages={2} ref={parallax}>
          <Decorations />
          <ParallaxLayer
            offset={0.1}
            speed={2.5}
            className={styles.containerPage1}
          >
            <h1>My code</h1>
            <div style={{ marginTop: "-1.1rem", textAlign: "center" }}>
              <Image
                src="/svgs/h-zigzag-line-white.svg"
                width={1000}
                height={10}
              />
            </div>
            <div className={styles.reposContainer}>
              <Error error={error} />
              {!repos.length && !error ? (
                <div className={styles.imgWrapper}>
                  <Image
                    src={"/svgs/loading-ring-white.svg"}
                    width={150}
                    height={150}
                  />
                </div>
              ) : (
                repos.map((repo) => (
                  <RepoItem isFavorited={repo.stargazers_count > 0} {...repo} />
                ))
              )}
            </div>
            <div
              style={{
                display: "flex",
                color: "white",
                justifyContent: "center",
                gap: "2rem",
                marginTop: "5rem",
                marginLeft: "3rem",
              }}
            >
              {/* <LinkButton
                imgSrc={"/svgs/arrow-down-white.svg"}
                onClick={() => handleScroll("designs")}
                iconStyle={{
                  paddingRight: "1rem",
                }}
              >
                my designs
              </LinkButton> */}
              {/* <LinkButton imgSrc={"/svgs/arrow-down-white.svg"} href="/aboutme">
              courses
            </LinkButton> */}
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={2.5}
            className={styles.containerPage1}
          >
            <h1>(more coming soon)</h1>
          </ParallaxLayer>
        </Parallax>
      </div>
    </PublicLayout>
  );
};

export default Project;
