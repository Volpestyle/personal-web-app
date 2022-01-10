import { animated, config, useSpring } from "@react-spring/web";
import { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

type ChangingWordsProps = {
  wordGroups: string[][];
};

const ChangingWords = ({ wordGroups }: ChangingWordsProps) => {
  const [groupIndex, setGroupIndex] = useState(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [viewCount, setViewCount] = useState<number>(0);

  const { ref, inView } = useInView();

  const increment = () => {
    if (groupIndex < wordGroups.length - 1) setGroupIndex(groupIndex + 1);
    else setGroupIndex(0);
  };

  const onRest = async () => {
    if (isVisible) {
      await new Promise<void>((res) => {
        setTimeout(() => {
          setIsVisible(false);
          res();
        }, 1500);
      });
    } else {
      increment();
      setIsVisible(true);
    }
  };

  const [slideInStyles, springApi] = useSpring(() => ({
    opacity: 1,
    x: 0,
    config: config.gentle,
  }));

  useEffect(() => {
    if (!inView) return;
    if (isVisible)
      springApi.start({
        from: {
          opacity: 0,
          x: -100,
        },
        to: {
          opacity: 1,
          x: 0,
        },
        onRest: onRest,
      });
    else
      springApi.start({
        opacity: 0,
        x: 100,
        delay: viewCount === 1 && groupIndex === 0 ? 2000 : 0,
        onRest: onRest,
      });
  }, [isVisible, viewCount]);

  useEffect(() => {
    if (inView) setViewCount(viewCount + 1);
  }, [inView]);

  return (
    <animated.div ref={ref} style={slideInStyles}>
      {wordGroups[groupIndex]}
    </animated.div>
  );
};

export default ChangingWords;
