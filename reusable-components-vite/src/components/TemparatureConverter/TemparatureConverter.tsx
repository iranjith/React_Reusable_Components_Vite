import React, { useState } from "react";

const TemparatureConverter = () => {
  const [celsius, setCelsius] = useState<number>(1);
  const [farenheit, setFarenheit] = useState<number>(1);

  const onCelsiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCelsius(Number(event.target.value));
    const celsiusVal = (Number(event.target.value) * 9) / 5 + 32;
    console.log(celsiusVal);
    setFarenheit(celsiusVal);
  };

  const onFHChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fhVal = ((Number(event.target.value) - 32) * 5) / 9;
    setFarenheit(Number(event.target.value));
    console.log(fhVal);
    setCelsius(((Number(event.target.value) - 32) * 5) / 9);
  };

  return (
    <>
      <div>
        <div>
          <label
            style={{
              marginRight: "1rem",
            }}
          >
            Celsius
          </label>
          <input
            style={{
              border: "1px solid black",
            }}
            id="celsius"
            name="celsius"
            type="number"
            value={celsius}
            onChange={onCelsiusChange}
          />
          <span
            style={{
              padding: "1rem",
            }}
          >
            =
          </span>
          <input
            style={{
              border: "1px solid black",
            }}
            type="number"
            id="farenheit"
            name="farenheit"
            value={farenheit}
            onChange={onFHChange}
          />
          <label
            style={{
              marginLeft: "1rem",
            }}
          >
            Farenheit
          </label>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default TemparatureConverter;
