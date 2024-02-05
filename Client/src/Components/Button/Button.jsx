import React from "react";

export default function Button({
  text,
  Size,
  backgroundColor,
  color,
  onClick,
  padding,
  boderR,
}) {
  return (
    <div>
      <div
        style={{
          backgroundColor: backgroundColor,
          fontSize: Size,
          color: color,
          padding: padding,
          borderRadius: boderR,
          cursor:"pointer"
        }}
        className="text-center"
        onClick={()=>onClick(1)}
      >
        {text}
      </div>
    </div>
  );
}

export function IconButton({
  text,
  Size,
  backgroundColor,
  color,
  padding,
  boderR,
  gap,
  icon,
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems:"center",
          backgroundColor: backgroundColor,
          fontSize: Size,
          color: color,
          padding: padding,
          borderRadius: boderR,
          gap: gap,
          cursor:"pointer"

        }}
      >
        {icon}
        {text}
      </div>
    </div>
  );
}
