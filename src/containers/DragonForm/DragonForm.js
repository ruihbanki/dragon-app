import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import Form from "../../components/Form";
import FormItem from "../../components/FormItem";
import TextInput from "../../components/TextInput";
import Grid from "../../components/Grid/Grid";
import Button from "../../components/Button";
import ButtonGroup from "../../components/ButtonGroup";
import { insertDragon, updateDragon } from "../../services/dragonServices";
import useMatchMedia from "../../components/MatchMedia/useMatchMedia";

function DragonForm(props) {
  const { dragon, onCancel, onSave } = props;

  const { match } = useMatchMedia();

  const update = useMutation(updateDragon);

  const insert = useMutation(insertDragon);

  const form = useForm({
    defaultValues: dragon,
  });

  const handleSave = React.useCallback(async () => {
    const valid = await form.trigger();
    if (valid) {
      const values = form.getValues();
      if (dragon.id) {
        update.mutate({ id: dragon.id, ...values });
      } else {
        insert.mutate(values);
      }
    }
  }, [form, update, insert, dragon]);

  React.useEffect(() => {
    if (update.isSuccess || insert.isSuccess) {
      onSave();
    }
  }, [update, insert, onSave]);

  return (
    <Form form={form}>
      <Grid container columnGap="20px" rowGap="4px">
        <Grid item span={match({ sm: 12, md: 6, lg: 4 })}>
          <FormItem
            name="name"
            label="Name"
            rules={{ required: { value: true, message: "Field required" } }}
          >
            <TextInput />
          </FormItem>
        </Grid>
        <Grid item span={match({ sm: 12, md: 6, lg: 2 })}>
          <FormItem name="createdAt" label="Data criação">
            <TextInput disabled />
          </FormItem>
        </Grid>
        <Grid item span={match({ sm: 12, md: 6, lg: 2 })}>
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
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSave}
            >
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
