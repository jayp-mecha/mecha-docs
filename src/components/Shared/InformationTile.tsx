import React from "react";

const InformationTile = ({ spec }) => {
  const { link, icon, title, description } = spec;
  return (
    <a
      href={link || "#"}
      className="py-10 px-5 rounded-md border-2 border-[#202431] bg-[#15171D] flex flex-col gap-2 no-underline"
      style={{ textDecoration: "none" }}
    >
      <img className="w-[60px] h-[60px]" src={icon} alt={title} />
      <h1 className="text-white font-medium text-2xl mt-3">{title}</h1>
      {description && <p className="text-[#B7BBC8]">{description}</p>}
    </a>
  );
};

export default InformationTile;
