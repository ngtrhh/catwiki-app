import React from "react";

const LevelBar = (props) => {
  const max = new Array(5).fill(0);

  return (
    <div className="level-bar">
      {max.map((item, index) => (
        <div
          key={index}
          className={index < props.value ? "item level" : "item"}
        />
      ))}
    </div>
  );
};

export default LevelBar;
