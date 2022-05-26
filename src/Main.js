import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import "./App.css";

const Main = (props) => {
  let history = useHistory();
  const my_lists = props.list;
  const [circle, circle_change] = React.useState([0, 1, 2, 3, 4]);

  return (
    <ListStyle>
      <Title>내 일주일은?</Title>
      {my_lists.map((list, index) => {
        const getRandom = (min, max) =>
          Math.floor(Math.random() * (max - min) + min);
        const num = getRandom(0, 5);
        return (
          <div id="grid">
            <ItemStyle className="list_item" key={index}>
              {list}
            </ItemStyle>
            <div className="circles">
              {circle.map((e, i) => {
                return (
                  <div
                    className="circle"
                    style={{ backgroundColor: i <= num ? "yellow" : "#e0e0e0" }}
                  ></div>
                );
              })}
            </div>
            <div
              className="try"
              onClick={() => {
                history.push("/detail/" + index);
              }}
            ></div>
          </div>
        );
      })}
    </ListStyle>
  );
};

const Title = styled.h3`
  color: black;
  text-align: center;
  margin: 20px;
`;

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: #fff;
`;

export default Main;
