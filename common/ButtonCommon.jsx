import React from "react";

const GlowingButton = ({ text, variant = "outline", onClick }) => {
  const baseStyles =
    "p-4 w-[50%] rounded-md text-white transition-all duration-300 shadow-[0_0_15px_#FF000066] hover:shadow-[0_0_25px_#FF0000]";
  const styles =
    variant === "outline"
      ? "border-[#FF000066] border-solid border-2 "
      : "bg-[#FF000066]";

  return (
    <button className={`${baseStyles} ${styles}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default GlowingButton;
