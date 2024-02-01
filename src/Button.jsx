import React, { useState } from "react";
import Button from "./Button"; // Assuming the Button component is in a separate file

const Calculator = () => {
  const [currentExpression, setCurrentExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setCurrentExpression((prevExp) => prevExp + value);
  };

  return (
    <div>
      <div>
        <input type="text" value={currentExpression} readOnly />
      </div>
      <div>
        <Button handleClickFun={handleClick} curExp={currentExpression} setRes={setResult}>1</Button>
        <Button handleClickFun={handleClick} curExp={currentExpression} setRes={setResult}>2</Button>
        <Button handleClickFun={handleClick} curExp={currentExpression} setRes={setResult}>3</Button>
        <Button handleClickFun={handleClick} curExp={currentExpression} setRes={setResult}>+</Button>
      </div>
      <div>
        <Button handleClickFun={handleClick} curExp={currentExpression} setRes={setResult}>4</Button>
        <Button handleClickFun={handleClick} curExp={currentExpression} setRes={setResult}>5</Button>
        <Button handleClickFun={handleClick} curExp={currentExpression} setRes={setResult}>6</Button>
        <Button handleClickFun={handleClick} curExp={currentExpression} setRes={setResult}>-</Button>
      </div>
      <div>
        <Button handleClickFun={handleClick} curExp={currentExpression} setRes={setResult}>7</Button>
        <Button handleClickFun={handleClick} curExp={currentExpression} setRes={setResult}>8</Button>
        <Button handleClickFun={handleClick} curExp={currentExpression} setRes={setResult}>9</Button>
        <Button handleClickFun={handleClick} curExp={currentExpression} setRes={setResult}>*</Button>
      </div>
      <div>
        <Button handleClickFun={handleClick} curExp={currentExpression} setRes={setResult}>0</Button>
        <Button handleClickFun={handleClick} curExp={currentExpression} setRes={setResult}>.</Button>
        <Button handleClickFun={handleClick} curExp={currentExpression} setRes={setResult}>=</Button>
        <Button handleClickFun={handleClick} curExp={currentExpression} setRes={setResult}>/</Button>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default Calculator;
