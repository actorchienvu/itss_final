import { useState} from "react";
const useStorage = () => {
  const [listStudent, setListStudent] = useState([
    "Huyen",
    "Hoa",
    "Hung",
    "Long",
  ]);
  const [inputName, setInputName] = useState("");
  const [studentIndex, setStudentIndex] = useState("");
  const handleChange = (e) => {
    setInputName(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    for (let index = 0; index < listStudent.length; index++) {
      if(inputName.toUpperCase() === listStudent[index].toUpperCase())
        setStudentIndex(index+1);
    }
    if(studentIndex === ""){
      setStudentIndex("NaN");
    }
  };
  return [inputName, studentIndex, handleChange, onClick];
};

export default useStorage;