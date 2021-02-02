import React from "react";
import { Route, Switch, useLocation, useRouteMatch } from "react-router";
import DragonListPage from "../DragonListPage";
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
              <DragonListPage />
            </Route>
          </Switch>
        </Styled.Container>
      </Styled.Content>
    </Styled.Root>
  );
}

export default React.memo(MainPage);
