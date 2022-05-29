import "./App.css";
import React from "react";
import Balls from "./Components/Balls";
import Form from "./Components/Form";
import { AuthContext } from "./Context/Context";
function App() {
  let { balls, handleBalls, data } = React.useContext(AuthContext);
  return (
    <div className="App">
      <div className="main-block">
        <div className="submain-block1">
          <h3>empty div</h3>
          <div className="submain-block1-sub">
            {balls.length > 0
              ? balls.map(elem => (
                  <Balls theme={elem.color} key={elem.id}>
                    <div
                      onClick={() => handleBalls(elem.id)}
                      style={{ width: "100%", height: "100%" }}
                    ></div>
                  </Balls>
                ))
              : null}
          </div>
        </div>
        <div className="submain-block2">
          <div>{data.length} balls</div>
          {data.length > 0
            ? data.map(item => <Balls theme={item.color} key={item.id}></Balls>)
            : null}
        </div>
        <div className="submain-block3">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
