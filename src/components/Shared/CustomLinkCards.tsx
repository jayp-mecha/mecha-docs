import React from "react";
import Icon from "../Icons/Icons";

interface ICustomLinkCard {
  url: string;
  icon?: string;
  title: string;
  description?: string;
}

const CustomLinkCard = (props: ICustomLinkCard) => {
  const { icon, title, description, url } = props;
  return (
    <a href={url} target="_blank" className="custom-card">
      {icon && (
        <Icon
          className="custom-card-icon"
          name={icon}
          height="32px"
          width="32px"
        />
      )}
      <p className="custom-card-title">{title}</p>
      {description && <p className="custom-card-description">{description}</p>}
    </a>
  );
};

export default CustomLinkCard;
