import React from "react";
import "./App.css";
import useStorage from "./useStorage";

function App() {
  const [inputName, studentIndex, handleChange, onClick] = useStorage();

  return (
    <div>
      <div className="listName listStudent">
        <p>学生一覧: [Huyen, Hoa, Hung, Long]</p>
      </div>
      <div className="listStudent">
        <div >検索名前 :</div>
        <input onChange={handleChange} />
      </div>
      <button onClick={onClick} className="myButton">確定</button>
      <div className="listStudent">検索名前: {inputName}</div>

      <div className="listName listStudent">
        位置: {studentIndex}
      </div>
    </div>
  );
}

export default App;