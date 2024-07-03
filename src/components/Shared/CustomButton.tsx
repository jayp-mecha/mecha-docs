import React from "react";

interface CustomButtonProps {
  onClick: () => void;
  backgroundColor?: string;
  fontColor?: string;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  backgroundColor = "transparent",
  fontColor = "white",
  children,
}) => {
  const buttonStyle: React.CSSProperties = {
    fontFamily: '"Space Grotesk", sans-serif',
    padding: "8px 11px",
    borderRadius: "0.375rem",
    color: fontColor,
    fontWeight: 500,
    backgroundColor: backgroundColor,
    cursor: "pointer",
    display: "block",
    textAlign: "center",
    height: "40px",
    lineHeight: "24px",
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
    border: "none",
    letterSpacing: "1px",
    fontSize: "16px",
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
};

export default CustomButton;
