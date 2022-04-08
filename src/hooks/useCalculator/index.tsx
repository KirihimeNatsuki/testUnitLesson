const useCalculator = () => {
  const addition = (value1: string, value2: string) => {
    return Number(Number(value1) + Number(value2)).toString();
  };

  //Soustraction
  const soustraction = (value1: string, value2: string) => {
    return Number(Number(value1) - Number(value2)).toString();
  };

  //Racine carré
  const sqrt = (value1: string) => {
    return Math.sqrt(Number(value1)).toString();
  };

  //Division
  const division = (value1: string, value2: string) => {
    return Number(Number(value1) / Number(value2)).toString();
  };

  //Modulo
  const modulo = (value1: string, value2: string) => {
    return Number(Number(value1) % Number(value2)).toString();
  };

  return {
    addition,
    soustraction,
    sqrt,
    division,
    modulo,
  };
};


export default useCalculator;
