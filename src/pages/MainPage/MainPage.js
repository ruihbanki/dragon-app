import React from "react";
import { Route, Switch, useLocation, useRouteMatch } from "react-router";
import DragonList from "../DragonList/DragonList";
import Styled from "./MainPage.styled";

function MainPage() {
  const { path } = useRouteMatch();

  return (
    <Styled.Root>
      <Styled.Header>header</Styled.Header>
      <Styled.Content>
        <Styled.Container>
          <Switch>
            <Route path={`${path}/dragon-list`}>
              <DragonList />
            </Route>
          </Switch>
        </Styled.Container>
      </Styled.Content>
    </Styled.Root>
  );
}

export default React.memo(MainPage);
