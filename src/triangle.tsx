import { isValidNumber } from "./lib";

export default interface ITriangleResult {
  isSuccess: boolean;
  message: string;
}

export const getTriangleType = (
  side1: number = 0,
  side2: number = 0,
  side3: number = 0
): ITriangleResult => {
  if (!isValidNumber(side1) || !isValidNumber(side2) || !isValidNumber(side3)) {
    return result(false, ERROR_MESSAGES.ONLY_NUMBERS);
  }

  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    return result(false, ERROR_MESSAGES.MISSING_SIDES);
  }

  if (
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1
  ) {
    return result(false, ERROR_MESSAGES.ILLEGAL);
  }

  if (side1 === side2 && side2 === side3) {
    return result(true, TRIANGLE_TYPES.EQUAL);
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return result(true, TRIANGLE_TYPES.ISOSCELES);
  } else {
    return result(true, TRIANGLE_TYPES.SCALENEA);
  }
};

export const TRIANGLE_TYPES = {
  EQUAL: "Equilateral",
  ISOSCELES: "Isosceles",
  SCALENEA: "Scalene"
};

export const ERROR_MESSAGES = {
  MISSING_SIDES: "The triangle should contain 3 sides with positive values",
  ILLEGAL: "The provided values cannot form a triangle",
  ONLY_NUMBERS: "Only numbers are allowed"
};

export const result = (isSuccess: boolean, msg: string) => ({
  isSuccess: isSuccess,
  message: msg
});
