import React from "react";
import { createContext } from "react";
export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [balls, setBalls] = React.useState([]);
  const [data, setData] = React.useState([
    { color: "red", id: "0" },
    { color: "blue", id: "1" },
    { color: "green", id: "2" },
    { color: "cyan", id: "3" },
    { color: "black", id: "4" },
  ]);
  const handleBalls = index => {
    let array = [];
    let ind = -1;
    let rem;
    for (let i = 0; i < balls.length; i++) {
      array.push(balls[i]);
      if (balls[i].id == index) {
        ind = i;
        rem = balls[i];
      }
    }

    console.log(rem, array);
    array.splice(ind, 1);
    setBalls(array);
    let list = [];
    for (let i = 0; i < data.length; i++) {
      list.push(data[i]);
    }
    for (let i = 0; i <= list.length + 1; i++) {
      if (i == list.length || list[i].id > index) {
        list.splice(i, 0, rem);
        break;
      }
    }
    console.log(list);
    setData(list);
  };
  const handleData = val => {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(data[i]);
    }
    let remove = arr[val];
    arr.splice(val, 1);

    setData(arr);
    setBalls([...balls, remove]);
    // console.log(remove, balls);
  };
  return (
    <AuthContext.Provider value={{ balls, handleBalls, data, handleData }}>
      {children}
    </AuthContext.Provider>
  );
}
