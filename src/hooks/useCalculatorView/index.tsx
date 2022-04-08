import { useState } from "react";
import useCalculator from "../useCalculator";

const useCalculatorView = () => {
  const [result, setResult] = useState<string>("");
  // @ts-ignore
  const { addition, soustraction, division, modulo, sqrt } = useCalculator();

  const doAction = () => {
    if (result.includes("+")) {
      const values = result.split("+");
      const value1 = values[0];
      const value2 = values[1];
      setResult(addition(value1, value2));
    } else if (result.includes("-")) {
      const values = result.split("-");
      const value1 = values[0];
      const value2 = values[1];
      setResult(soustraction(value1, value2));
    } else if (result.includes("/")) {
      const values = result.split("/");
      const value1 = values[0];
      const value2 = values[1];
      setResult(division(value1, value2));
    } else if (result.includes("%")) {
      const values = result.split("%");
      const value1 = values[0];
      const value2 = values[1];
      setResult(modulo(value1, value2));
    } else if (result.includes("√x")) {
      const values = result.split("√x");
      const value1 = values[0];
      setResult(sqrt(value1));
    }
  };

  const addResult = (key: string) => {
    if (key === "C") {
      setResult("");
    } else if (key === "=") {
      doAction();
    } else if (
      (result.includes("+") ||
        result.includes("-") ||
        result.includes("/") ||
        result.includes("%") ||
        result.includes("√x")) &&
      Number.isNaN(Number(key))
    ) {
    } else {
      setResult(`${result}${key}`);
    }
  };

  return {
    result,
    addResult,

  };
};

export default useCalculatorView;
