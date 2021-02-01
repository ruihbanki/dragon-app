import React from "react";
import PropTypes from "prop-types";
import Styled from "./Button.styled";

function Button(props) {
  const { children, variant, color, ...other } = props;
  return (
    <Styled.Root {...other} variant={variant} color={color}>
      {children}
    </Styled.Root>
  );
}

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  variant: "default",
};

export default React.memo(Button);
