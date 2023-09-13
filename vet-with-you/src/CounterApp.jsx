import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
    //setCounter((c)=> c + 1 )
  };

  return (
    <>
      <h1>Valor:</h1>
      <h1>{counter}</h1>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
