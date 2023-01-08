import React from "react";
import { useState, useEffect, useRef } from "react";
const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
const Name = (props) => {
  const arrayOfName = ["Open-Source", "Innovate", "Learn", "Build", "Hack"];
  const [names, setNames] = useState(arrayOfName[0]);
  useInterval(() => {
    var index = Math.floor(Math.random() * 5);
    setNames(arrayOfName[index]);
  }, 1000);
  return (
    <p data-aos="fade-down" data-aos-once="true">
      <a href="#">{names}</a>
    </p>
  );
};

export default Name;
