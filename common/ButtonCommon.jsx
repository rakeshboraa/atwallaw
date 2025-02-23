import React from "react";

const GlowingButton = ({ text, variant = "outline", onClick }) => {
  const baseStyles =
    "p-4 w-[50%] rounded-md transition-all duration-300 shadow-[0_0_15px_#0F4C85] hover:shadow-[0_0_25px_#0F4C85]";
  const styles =
    variant === "outline"
      ? "border-[#0F4C85] text-[#0F4C85]  border-solid border-2 "
      : "bg-[#0F4C85] text-white ";

  return (
    <button className={`${baseStyles} ${styles}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default GlowingButton;
