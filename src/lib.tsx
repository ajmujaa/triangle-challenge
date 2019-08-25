export const isValidNumber = (inputValue: string | number) => {
  const regex = new RegExp(/^[0-9\b]+$/);
  return regex.test(inputValue.toString());
};
