import React from "react";
import PropTypes from "prop-types";
import Styled from "./Button.styled";

function Button(props) {
  const { children, variant, color, type, ...other } = props;
  return (
    <Styled.Root {...other} variant={variant} color={color} type={type}>
      {children}
    </Styled.Root>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

Button.defaultProps = {
  variant: "default",
  type: "button",
};

export default React.memo(Button);
