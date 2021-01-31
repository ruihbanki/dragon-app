import React from "react";
import PropTypes from "prop-types";

function DragonList(props) {
  const { children } = props;
  return <div>{children}</div>;
}

DragonList.propTypes = {};

DragonList.defaultProps = {};

export default React.memo(DragonList);
