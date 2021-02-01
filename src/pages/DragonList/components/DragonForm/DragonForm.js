import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import Form from "../../../../components/Form";
import FormItem from "../../../../components/FormItem";
import TextInput from "../../../../components/TextInput";
import Grid from "../../../../components/Grid/Grid";
import Button from "../../../../components/Button";

function DragonForm(props) {
  const { dragon } = props;

  const form = useForm({
    defaultValues: dragon,
  });

  const handleSave = React.useCallback(() => {
    const values = form.getValues();
    console.log(values);
  }, []);

  return (
    <Form form={form}>
      <Grid container columnGap="20px" rowGap="4px">
        <Grid item span={4}>
          <FormItem
            name="name"
            label="Name"
            rules={{ required: { value: true, message: "Field required" } }}
          >
            <TextInput />
          </FormItem>
        </Grid>
        <Grid item span={2}>
          <FormItem
            name="createdAt"
            label="Data criação"
            rules={{ required: { value: true, message: "Field required" } }}
          >
            <TextInput />
          </FormItem>
        </Grid>
        <Grid item span={2}>
          <FormItem
            name="type"
            label="Tipo"
            rules={{ required: { value: true, message: "Field required" } }}
          >
            <TextInput />
          </FormItem>
        </Grid>
        <Grid item span={12}>
          <Button variant="contained">Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
}

DragonForm.propTypes = {
  dragon: PropTypes.object,
};

export default React.memo(DragonForm);
