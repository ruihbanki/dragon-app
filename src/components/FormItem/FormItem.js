import React from "react";
import PropTypes from "prop-types";
import { useController, useFormContext } from "react-hook-form";

import Styled from "./FormItem.styled";

function FormItem(props) {
  const { name, rules, label, children } = props;

  const { errors } = useFormContext();
  const error = errors?.[name]?.message || null;

  const {
    field: { onChange, onBlur, value },
    meta: { invalid },
  } = useController({
    name,
    rules,
  });

  const handleChange = React.useCallback((event) => {
    onChange(event.target.value);
  }, []);

  const handleBlur = React.useCallback(
    (event) => {
      onBlur(event.target.value);
    },
    [onBlur]
  );

  const renderChildren = () => {
    if (typeof children === "object") {
      const child = React.Children.only(children);
      return React.cloneElement(child, {
        value,
        invalid,
        onChange: handleChange,
        onBlur: handleBlur,
        error,
      });
    }
    return null;
  };

  return (
    <Styled.Root>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Content>{renderChildren()}</Styled.Content>
      <Styled.Error>{error}</Styled.Error>
    </Styled.Root>
  );
}

FormItem.propTypes = {
  children: PropTypes.node,
};

FormItem.defaultProps = {
  rules: {},
};

export default React.memo(FormItem);
