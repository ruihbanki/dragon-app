import React from "react";
import PropTypes from "prop-types";

function DragonItem(props) {
  const { dragon } = props;
  console.log(dragon);
  return (
    <div>
      <strong>{dragon.name}</strong>
    </div>
  );
}

DragonItem.propTypes = {};

DragonItem.defaultProps = {};

export default React.memo(DragonItem);
