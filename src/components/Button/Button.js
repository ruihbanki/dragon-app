import React from "react";
import PropTypes from "prop-types";
import Styled from "./Button.styled";

function Button(props) {
  const { children } = props;
  return <Styled.Root>{children}</Styled.Root>;
}

Button.propTypes = {
  children: PropTypes.node,
};

export default React.memo(Button);
