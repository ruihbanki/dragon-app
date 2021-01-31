import React from "react";
import PropTypes from "prop-types";
import Styled from "./FormItem.styled";

function FormItem(props) {
  const { children, label } = props;
  return (
    <Styled.Root>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Root>
  );
}

FormItem.propTypes = {
  children: PropTypes.node,
};

export default React.memo(FormItem);
