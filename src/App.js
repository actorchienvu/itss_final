import React, { useState } from "react";
import "./App.css";

function App() {
  const listStudent = ["Huyen", "Hoa", "Hung", "Long"];
  const [selectNumber, setSelectNumber] = useState(1);
  const [selectName, setSelectName] = useState(listStudent[0]);

  const onClick1 = (event) => {
    event.preventDefault();
    if (selectNumber === 4) {
      setSelectNumber(1);
      setSelectName(listStudent[0]);
    } else {
      setSelectNumber(selectNumber + 1);
      setSelectName(listStudent[selectNumber]);
    }
  };
  const onClick2 = (event) => {
    event.preventDefault();
    if (selectNumber === 1) {
      setSelectNumber(4);
      setSelectName(listStudent[3]);
    } else {
      setSelectNumber(selectNumber - 1);
      setSelectName(listStudent[selectNumber - 2]);
    }
  };
  return (
    <div>
      <div className="listStudent">学生一覧：[Huyen, Hoa, Hung, Long]</div>
      <div className="listStudent">位置：{selectNumber}</div>
      <div className="listStudent">名前：{selectName}</div>
      <button onClick={onClick2} className="listStudent">
        prev
      </button>
      <button onClick={onClick1}>next</button>
    </div>
  );
}

export default App;
