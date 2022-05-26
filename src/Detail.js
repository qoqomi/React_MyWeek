// 리액트 패키지를 불러옵니다.
import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./App.css";

const Detail = (props) => {
  const { id } = useParams();
  let history = useHistory();
  const [circle, circle_change] = React.useState([0, 1, 2, 3, 4]);
  const [index, index_change] = React.useState();

  return (
    <div className="detail">
      <h3>
        <span className="days">{props.list[id] + "요일"}</span> 평점 남기기
      </h3>
      <div className="d_circles">
        {circle.map((e, i) => {
          return (
            <div
              className="d_circle"
              onClick={() => {
                index_change(i);
              }}
              style={{ backgroundColor: i <= index ? "yellow" : "#e0e0e0" }}
            ></div>
          );
        })}
      </div>
      <button
        className="button"
        onClick={() => {
          history.push("/");
        }}
      >
        평점 남기기
      </button>
    </div>
  );
};

export default Detail;
