import React from "react";
import Typewriter from "typewriter-effect";

const TypeAnimation = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Serial Creator",
          "Software Enthusiast",
          "Data Enthusiast",
          "History Buff",
          "Cinephile",
          "News Buff",
          "(Geo)Political Buff",
          "Societal Geek",
          "Pop Culture Buff",
          "World Travler",
          "Photographer",
          "Balkan"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
        delay: 60, // Adds delay between each character
        pauseFor: 2000, // Pauses for 2 seconds after each string
        cursor: "|", // Custom cursor
        cursorStyle: "|", // Custom cursor style
        cursorSpeed: 100, // Speed of cursor blinking
        wrapperClassName: "type-animation-wrapper", // Custom wrapper class
        cursorClassName: "type-animation-cursor", // Custom cursor class
        onComplete: () => console.log("Animation completed"), // Callback function on animation completion
      }}
    />
  );
};

export default TypeAnimation;