import React from "react";
import PropTypes from "prop-types";
import { FormProvider, useForm } from "react-hook-form";

import Styled from "./Form.styled";

function Form(props) {
  const { children, form: formProps, onSubmit } = props;

  const internalForm = useForm();

  const handleSubmit = React.useCallback(() => {}, []);

  const form = formProps || internalForm;

  return (
    <FormProvider {...form}>
      <Styled.Root
        noValidate
        onSubmit={form.handleSubmit(onSubmit || handleSubmit)}
      >
        {children}
      </Styled.Root>
    </FormProvider>
  );
}

Form.propTypes = {
  children: PropTypes.node,
};

export default React.memo(Form);
