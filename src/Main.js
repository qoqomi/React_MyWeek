import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import "./App.css";

const Main = (props) => {
  let history = useHistory();
  const my_lists = props.list;
  const [circle, circle_change] = React.useState([0, 1, 2, 3, 4]);
  const random_stars = [];

  for (let i = 0; i < 7; i++) {
    // 1-5사이 숫자 랜덤으로 7개 생성해서 배열에 담기
    random_stars.push(Math.floor(Math.random() * 5) + 1);
  }

  const random_x = random_stars.reduce((acc, cur) => acc + cur, 0);

  // const random_y = (random_x / random_stars.length).toFixed(2);
  // const [end, setend] = React.useState(0);

  const [random_y, setrandom_y] = React.useState(
    (random_x / random_stars.length).toFixed(2)
  );

  const getRandom = (min, max) =>
    //최대값 범위 내에서 정수 형태의 난수를 지정
    Math.floor(Math.random() * (max - min) + min);
  const num = getRandom(0, 5);
  console.log(num);

  return (
    <ListStyle>
      <Title>내 일주일은?</Title>
      {my_lists.map((list, index) => {
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
                    style={{
                      backgroundColor:
                        i + 1 <= random_stars[index] ? "yellow" : "#e0e0e0",
                    }}
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
      <div>
        <h1
          style={{
            fontSize: "25px",
            color: "blue",
          }}
        >
          {random_y}
        </h1>
        <h1
          style={{
            fontSize: "25px",
            color: "blue",
            marginTop: "-20px",
          }}
        >
          평점
        </h1>

        <button
          style={{
            backgroundColor: "#1E90FF",
            fontSize: "15px",
            color: "white",
            padding: "10px 40px",
            border: "1px solid",
            borderRadius: "10px",
          }}
          onChange={(e) => {
            console.log(e.target.value);
          }}
          onClick={() => {
            let input = 0;
            setrandom_y(input);
          }}
        >
          Reset
        </button>
      </div>
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
