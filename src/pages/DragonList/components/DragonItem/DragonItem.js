import React from "react";
import PropTypes from "prop-types";
import Styled from "./DragonItem.styled";

function DragonItem(props) {
  const { dragon } = props;
  console.log(dragon);
  return (
    <Styled.Root>
      <Styled.Name>{dragon.name}</Styled.Name>
    </Styled.Root>
  );
}

DragonItem.propTypes = {
  dragon: PropTypes.object,
};

export default React.memo(DragonItem);
