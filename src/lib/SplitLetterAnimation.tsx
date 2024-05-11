"use-client"

import { useRef, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
// import "../index.css";

const SplitLetterAnimation = ({
  word,
  duration = 2000,
  style,
  wordStyle,
}: {
  word: string;
  duration?: number;
  style?: string;
  wordStyle?: string;
}) => {
  const textWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textWrapper = textWrapperRef.current;

    const handleAnimation = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && textWrapper) {
          const originalText = textWrapper.textContent;
          if (originalText) {
            textWrapper.innerHTML = originalText.replace(
              /\S/g,
              `<span id=${wordStyle} class=${`letter`}>$&</span>`
            );

            anime.timeline().add({
              targets: `.full-text .letter ${wordStyle}`,
              opacity: [0, 1],
              easing: "easeInOutQuad",
              duration: duration,
              delay: (_el: any, i: number) => 10 * (i + 1),
            });

            observer.unobserve(entry.target); // Stop observing after animation
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleAnimation, {
      threshold: 0.5, // Adjust as needed
    });

    if (textWrapper) {
      observer.observe(textWrapper);
    }

    return () => {
      if (textWrapper) {
        observer.unobserve(textWrapper);
      }
    };
  }, [duration, word, wordStyle]);

  return (
    <span className={`full-text ${style}`} ref={textWrapperRef}>
      <span style={{ visibility: "hidden" }}>{word}</span>
    </span>
  );
};

export default SplitLetterAnimation;
