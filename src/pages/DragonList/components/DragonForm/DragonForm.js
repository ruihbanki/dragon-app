import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import Form from "../../../../components/Form";
import FormItem from "../../../../components/FormItem";
import TextInput from "../../../../components/TextInput";
import Grid from "../../../../components/Grid/Grid";
import Button from "../../../../components/Button";
import ButtonGroup from "../../../../components/ButtonGroup";
import { updateDragon } from "../../../../services/dragonServices";

function DragonForm(props) {
  const { dragon, onCancel } = props;

  const update = useMutation(updateDragon);

  console.log(dragon);

  const form = useForm({
    defaultValues: dragon,
  });

  const handleSave = React.useCallback(() => {
    const values = form.getValues();
    update.mutate({ id: dragon.id, ...values });
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
          <ButtonGroup>
            <Button variant="contained" onClick={onCancel}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Form>
  );
}

DragonForm.propTypes = {
  dragon: PropTypes.object,
};

export default React.memo(DragonForm);
