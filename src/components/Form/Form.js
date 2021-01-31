import React from "react";
import PropTypes from "prop-types";
import Styled from "./Form.styled";

function Form(props) {
  const { children } = props;
  return <Styled.Root>{children}</Styled.Root>;
}

Form.propTypes = {
  children: PropTypes.node,
};

export default React.memo(Form);
