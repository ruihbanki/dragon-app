import React from "react";
import PropTypes from "prop-types";
import Styled from "./Grid.styled";

function Button(props) {
  const { children, container, item, span, columnGap, rowGap } = props;
  return (
    <Styled.Root
      container={container}
      item={item}
      span={span}
      columnGap={columnGap}
      rowGap={rowGap}
    >
      {children}
    </Styled.Root>
  );
}

Button.propTypes = {
  children: PropTypes.node,
};

export default React.memo(Button);
