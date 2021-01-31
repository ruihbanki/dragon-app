import React from "react";
import PropTypes from "prop-types";
import Form from "../../../../components/Form";
import FormItem from "../../../../components/FormItem";
import TextInput from "../../../../components/TextInput";
import Grid from "../../../../components/Grid/Grid";
import Button from "../../../../components/Button";

function DragonForm(props) {
  const { dragon } = props;

  return (
    <Form>
      <Grid container columnGap="20px" rowGap="20px">
        <Grid item span={4}>
          <FormItem name="name" label="Name">
            <TextInput />
          </FormItem>
        </Grid>
        <Grid item span={2}>
          <FormItem name="createdAt" label="Data criação">
            <TextInput />
          </FormItem>
        </Grid>
        <Grid item span={2}>
          <FormItem name="type" label="Tipo">
            <TextInput />
          </FormItem>
        </Grid>
        <Grid item span={12}>
          <Button variant="contained">Cancel</Button>
          <Button variant="contained">Save</Button>
        </Grid>
      </Grid>
    </Form>
  );
}

DragonForm.propTypes = {
  dragon: PropTypes.object,
};

export default React.memo(DragonForm);
