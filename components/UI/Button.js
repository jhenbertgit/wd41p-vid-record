import React from "react";

const Button = (props) => {
  return <button className={classes.btn}>{props.children}</button>;
};

export default Button;
