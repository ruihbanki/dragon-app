import React from "react";
import PropTypes from "prop-types";
import Styled from "./TextInput.styled";

function TextInput(props) {
  return <Styled.Root {...props} />;
}

TextInput.propTypes = {
  children: PropTypes.node,
};

export default React.memo(TextInput);
