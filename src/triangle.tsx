import { isValidNumber } from "./lib";

export default interface ITriangleResult {
  isSuccess: boolean;
  message: string;
}

export const getTriangleType = (
  ...sides: Array<number>
): ITriangleResult => {

  const has3Sides = sides.filter(side => side !== 0).length === 3;
  if(!has3Sides) {
    return result(false, ERROR_MESSAGES.MISSING_SIDES);
  }
 
  if(!sides.every(isValidNumber)) {
    return result(false, ERROR_MESSAGES.ONLY_NUMBERS);
  }
  
  const [side1, side2, side3] = sides;

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
