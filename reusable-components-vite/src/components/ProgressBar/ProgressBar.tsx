import React from "react";

interface Props {
  percent: number;
  width: number;
  height?: number;
}

const ProgressBar = ({ percent, width, height=5 }: Props) => {
  const getColor = (percent: number) => {
    if (percent === 100) return "green";
    return percent > 50 ? "lightgreen" : "red";
  };

  const getWidthAsPercentOfTotalWidth = () => {
    return width * (percent / 100);
  };

  return (
    <>
      <div style={{ border: "solid 1px lightgray", width: width }}>
        <div
          style={{
            width: getWidthAsPercentOfTotalWidth(),
            height,
            backgroundColor: getColor(percent),
          }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
