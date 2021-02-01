import React from "react";
import PropTypes from "prop-types";
import Styled from "./ButtonGroup.styled";

function ButtonGroup(props) {
  const { children, ...other } = props;
  return <Styled.Root {...other}>{children}</Styled.Root>;
}

ButtonGroup.propTypes = {
  children: PropTypes.node,
};

export default React.memo(ButtonGroup);
