export default interface ITriangleResult {
  success: boolean;
  type: string;
  message: string;
}

export const getTriangle = (
  side1: number = 0,
  side2: number = 0,
  side3: number = 0
): ITriangleResult => {
  if (!isValidNumber(side1) || !isValidNumber(side2) || !isValidNumber(side3)) {
    return result(false, RESULT_TYPES.ERROR, ERROR_MESSAGES.ONLY_NUMBERS);
  }

  if (
    (isValidNumber(side1) && typeof side1 === "string") ||
    (isValidNumber(side2) && typeof side2 === "string") ||
    (isValidNumber(side3) && typeof side3 === "string")
  ) {
    side1 = +side1;
    side2 = +side2;
    side3 = +side3;
  }

  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    return result(false, RESULT_TYPES.ERROR, ERROR_MESSAGES.MISSING_SIDES);
  }

  if (
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1
  ) {
    return result(false, RESULT_TYPES.WARN, ERROR_MESSAGES.ILLEGAL);
  }

  if (side1 === side2 && side2 === side3) {
    return result(true, RESULT_TYPES.SUCCESS, TRIANGLE_TYPES.EQUAL);
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return result(true, RESULT_TYPES.SUCCESS, TRIANGLE_TYPES.ISOSCELES);
  } else {
    return result(true, RESULT_TYPES.SUCCESS, TRIANGLE_TYPES.SCALENEA);
  }
};

const isValidNumber = (side: string | number) => {
  const regex = new RegExp(/^\d+$/);
  return regex.test(side.toString());
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

export const RESULT_TYPES = {
  ERROR: "error",
  WARN: "warn",
  SUCCESS: "success"
};

export const result = (isSuccess: boolean, type: string, msg: string) => ({
  success: isSuccess,
  type: type,
  message: msg
});
