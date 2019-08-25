import { getTriangleType, TRIANGLE_TYPES, ERROR_MESSAGES } from "./triangle";

describe("Triangle", () => {
  it("should return the Equilateral success object", () => {
    expect(getTriangleType(2, 2, 2)).toEqual(equalSuccess);
  });

  it("should return the Isosceles success object", () => {
    expect(getTriangleType(2, 2, 1)).toEqual(isoscelesSuccess);
    expect(getTriangleType(1, 3, 3)).toEqual(isoscelesSuccess);
    expect(getTriangleType(10, 10, 3)).toEqual(isoscelesSuccess);
    expect(getTriangleType(4, 3, 4)).toEqual(isoscelesSuccess);
  });

  it("should return the Scalene success object", () => {
    expect(getTriangleType(13, 14, 9)).toEqual(scaleneSuccess);
    expect(getTriangleType(6, 5, 4)).toEqual(scaleneSuccess);
    expect(getTriangleType(3, 4, 5)).toEqual(scaleneSuccess);
    expect(getTriangleType(10, 11, 12)).toEqual(scaleneSuccess);
    // The following is an unlikely scenario as the parameter will be passed as the number in the app
    expect(getTriangleType(10, 11, "12")).toEqual(scaleneSuccess);
  });

  it("should return the warn object", () => {
    expect(getTriangleType(2, 2, 8)).toEqual(warnResult);
    expect(getTriangleType(7, 3, 2)).toEqual(warnResult);
    expect(getTriangleType(1, 3, 10)).toEqual(warnResult);
  });

  it("should return the error object", () => {
    expect(getTriangleType(1, 4)).toEqual(errorResult);
    expect(getTriangleType(14)).toEqual(errorResult);
    //The following are unlikely scenarios as the input will be converted to numbers from the component
    expect(getTriangleType(13, 14, "a")).toEqual(numberErrorResult);
    expect(getTriangleType("13", "14", "a")).toEqual(numberErrorResult);
  });
});

const scaleneSuccess = {
  isSuccess: true,
  message: TRIANGLE_TYPES.SCALENEA
};

const isoscelesSuccess = {
  isSuccess: true,
  message: TRIANGLE_TYPES.ISOSCELES
};

const equalSuccess = {
  isSuccess: true,
  message: TRIANGLE_TYPES.EQUAL
};

const errorResult = {
  isSuccess: false,
  message: ERROR_MESSAGES.MISSING_SIDES
};

const warnResult = {
  isSuccess: false,
  message: ERROR_MESSAGES.ILLEGAL
};

const numberErrorResult = {
  isSuccess: false,
  message: ERROR_MESSAGES.ONLY_NUMBERS
};
