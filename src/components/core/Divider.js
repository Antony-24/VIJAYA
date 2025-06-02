import React from "react";

export const Divider = ({
  className = "",
  color = "#CBA135",
  thickness = "1px",
  width = "100%",
  margin = "0.5rem 0",
  ...props
}) => {
  return (
    <div
      className={`${className}`}
      style={{
        width,
        height: thickness,
        backgroundColor: color,
        margin,
      }}
      {...props}
    />
  );
};
