import { renderHook, act } from "@testing-library/react-hooks";
import useCalculator from "../../hooks/useCalculator";

//Test use Calculator
test("show multiple examples", () => {
    const { result } = renderHook(() => useCalculator());
    const {
        addition,
        soustraction,
        sqrt,
        division,
        modulo,
    } = result.current;
    
    //Test addition
    expect(addition("1", "2")).toBe("3");
    expect(addition("1", "2")).not.toBe("77");
    
    //Test soustraction
    expect(soustraction("1", "2")).toBe("-1");
    expect(soustraction("1", "2")).not.toBe("0");
    
    //Test racine carré
    expect(sqrt("1")).toBe("1");
    expect(sqrt("1")).not.toBe("2");

    //Test division
    expect(division("1", "2")).toBe("0.5");
    expect(division("1", "2")).not.toBe("0");

    //Test modulo
    expect(modulo("1", "2")).toBe("1");
    expect(modulo("1", "2")).not.toBe("0");
});