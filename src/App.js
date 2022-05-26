import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Main from "./Main";
import Detail from "./Detail";

function App() {
  const [list] = React.useState(["월", "화", "수", "목", "금", "토", "일"]);

  return (
    <div className="App">
      <Container>
        <Route path="/" exact render={(props) => <Main list={list} />} />
        <Route
          path="/detail/:id"
          exact
          render={(props) => <Detail list={list} />}
        />
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 360px;
  min-height: 70vh;
  background-color: #fff;
  padding: 16px;
  margin: 40px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export default App;
