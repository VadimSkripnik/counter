import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 1, value: 0, name: "Нужная вещь", price: 56 },
    { id: 2, value: 4, name: "Ложка" },
    { id: 3, value: 0, name: "Вилка" },
    { id: 4, value: 0, name: "Тарелка" },
    { id: 5, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounter = counters.filter((c) => c.id !== id);
    setCounters(newCounter);
  };

  let arr = JSON.parse(JSON.stringify(counters));

  const handleIncrement = (id) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr[i].value += 1;
      }
      setCounters(arr);
    }
  };

  const handleDecrement = (id) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr[i].value -= 1;
      }
      setCounters(arr);
    }
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          id={count.id}
          value={count.value}
          name={count.name}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-danger btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
