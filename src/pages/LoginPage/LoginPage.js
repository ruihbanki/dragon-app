import React from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import ButtonGroup from "../../components/ButtonGroup";
import Form from "../../components/Form";
import FormItem from "../../components/FormItem";
import Grid from "../../components/Grid/Grid";
import TextInput from "../../components/TextInput";
import Styled from "./LoginPage.styled";

function LoginPage() {
  const history = useHistory();

  const handleSubmit = React.useCallback(() => {
    history.push("/main/dragon-list");
  }, [history]);

  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.Title>Login</Styled.Title>
        <Form onSubmit={handleSubmit}>
          <Grid container columnGap="20px" rowGap="4px">
            <Grid item span={12}>
              <FormItem
                name="username"
                label="Username"
                rules={{ required: { value: true, message: "Field required" } }}
              >
                <TextInput />
              </FormItem>
            </Grid>
            <Grid item span={12}>
              <FormItem name="password" label="Password">
                <TextInput type="password" />
              </FormItem>
            </Grid>
            <Grid item span={12}>
              <ButtonGroup>
                <Button variant="contained" color="primary" type="submit">
                  Enter
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Form>
      </Styled.Container>
    </Styled.Root>
  );
}

export default React.memo(LoginPage);
