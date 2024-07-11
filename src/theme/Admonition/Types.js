import React from "react";
import DefaultAdmonitionTypes from "@theme-original/Admonition/Types";
import Icon from "@site/src/components/Icons/Icons";
function CustomInfo(props) {
  return (
    <div className="mec-admonition mec-admonition-info">
      <div className="mec-admonition-head">
        <Icon name="info" height="20px" width="20px" />
        <p className="mec-admonition-title">{props.title}</p>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

function CustomWarn(props) {
  return (
    <div className="mec-admonition mec-admonition-warn">
      <div className="mec-admonition-head">
        <Icon name="warn" height="20px" width="20px" />
        <p className="mec-admonition-title">{props.title}</p>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

function CustomDanger(props) {
  return (
    <div className="mec-admonition mec-admonition-danger">
      <div className="mec-admonition-head">
        <Icon name="danger" height="20px" width="20px" />
        <p className="mec-admonition-title">{props.title}</p>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  "mec-info": CustomInfo,
  "mec-warn": CustomWarn,
  "mec-danger": CustomDanger,
};

export default AdmonitionTypes;
