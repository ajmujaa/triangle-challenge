import {
  getTriangle,
  TRIANGLE_TYPES,
  ERROR_MESSAGES,
  RESULT_TYPES
} from "./triangle";

describe("Triangle", () => {
  it("should return the Equilateral success object", () => {
    expect(getTriangle(2, 2, 2)).toEqual(equalSuccess);
  });

  it("should return the Isosceles success object", () => {
    expect(getTriangle(2, 2, 1)).toEqual(isoscelesSuccess);
    expect(getTriangle(1, 3, 3)).toEqual(isoscelesSuccess);
    expect(getTriangle(10, 10, 3)).toEqual(isoscelesSuccess);
    expect(getTriangle(4, 3, 4)).toEqual(isoscelesSuccess);
  });

  it("should return the Scalene success object", () => {
    expect(getTriangle(13, 14, 9)).toEqual(scaleneSuccess);
    expect(getTriangle(6, 5, 4)).toEqual(scaleneSuccess);
    expect(getTriangle(3, 4, 5)).toEqual(scaleneSuccess);
    expect(getTriangle(10, 11, 12)).toEqual(scaleneSuccess);
    // The following is an unlikely scenario as the parameter will be passed as the number in the app
    expect(getTriangle(10, 11, "12")).toEqual(scaleneSuccess);
  });

  it("should return the warn object", () => {
    expect(getTriangle(2, 2, 8)).toEqual(warnResult);
    expect(getTriangle(7, 3, 2)).toEqual(warnResult);
    expect(getTriangle(1, 3, 10)).toEqual(warnResult);
  });

  it("should return the error object", () => {
    expect(getTriangle(1, 4)).toEqual(errorResult);
    expect(getTriangle(14)).toEqual(errorResult);
    //The following are unlikely scenarios as the input will be converted to numbers from the component
    expect(getTriangle(13, 14, "a")).toEqual(numberErrorResult);
    expect(getTriangle("13", "14", "a")).toEqual(numberErrorResult);
  });
});

const scaleneSuccess = {
  success: true,
  type: RESULT_TYPES.SUCCESS,
  message: TRIANGLE_TYPES.SCALENEA
};

const isoscelesSuccess = {
  success: true,
  type: RESULT_TYPES.SUCCESS,
  message: TRIANGLE_TYPES.ISOSCELES
};

const equalSuccess = {
  success: true,
  type: RESULT_TYPES.SUCCESS,
  message: TRIANGLE_TYPES.EQUAL
};

const errorResult = {
  success: false,
  type: RESULT_TYPES.ERROR,
  message: ERROR_MESSAGES.MISSING_SIDES
};

const warnResult = {
  success: false,
  type: RESULT_TYPES.WARN,
  message: ERROR_MESSAGES.ILLEGAL
};

const numberErrorResult = {
  success: false,
  type: RESULT_TYPES.ERROR,
  message: ERROR_MESSAGES.ONLY_NUMBERS
};
