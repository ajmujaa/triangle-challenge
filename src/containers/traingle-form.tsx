import React, { useState } from "react";
import { TextField } from "../components/textfield";
import { Button } from "../components/button";
import { getTriangleType } from "../triangle";
import { isValidNumber } from "../lib";

export const TriangleForm = () => {
  const [side1, setSide1] = useState("0");
  const [side2, setSide2] = useState("0");
  const [side3, setSide3] = useState("0");

  const submit = () => {
    const result = getTriangleType(+side1, +side2, +side3);
    const { isSuccess, message } = result;
    if (isSuccess) {
      (window as any).ts &&
        (window as any).ts.ui.Notification.success(message);
    } else {
      (window as any).ts &&
        (window as any).ts.ui.Notification.error(message);
    }
  };

  const handleSide1 = (value: string) => {
    return isValidNumber(value) ? setSide1(value) : null;
  };

  const handleSide2 = (value: string) => {
    return isValidNumber(value) ? setSide2(value) : null;
  };

  const handleSide3 = (value: string) => {
    return isValidNumber(value) ? setSide3(value) : null;
  };

  const resetNote = () => {
    setSide1("0");
    setSide2("0");
    setSide3("0");
  };

  return (
    <form data-ts="Form">
      <TextField
        label="Side 1"
        changeValue={handleSide1}
        value={side1}
      ></TextField>
      <TextField
        label="Side 2"
        changeValue={handleSide2}
        value={side2}
      ></TextField>
      <TextField
        label="Side 3"
        changeValue={handleSide3}
        value={side3}
      ></TextField>
      <Button label="Submit" action={submit}></Button>
      <Button label="Reset" action={resetNote}></Button>
    </form>
  );
};
