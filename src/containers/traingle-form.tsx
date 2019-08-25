import React, { useState } from "react";
import { TextField } from "../components/textfield";
import { Button } from "../components/button";
import { getTriangleType } from "../triangle";
import { FormNote } from "../components/form-note";
import { isValidNumber } from "../lib";

export const TriangleForm = () => {
  const [side1, setSide1] = useState("0");
  const [side2, setSide2] = useState("0");
  const [side3, setSide3] = useState("0");
  const [note, setNote] = useState({ isSuccess: false, message: "" });

  const submit = () => {
    const result = getTriangleType(+side1, +side2, +side3);
    setNote(result);
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

  const resetNote = () => setNote({ isSuccess: false, message: "" });

  return (
    <form data-ts="Form">
      <TextField
        label="Side 1"
        changeValue={handleSide1}
        value={side1}
        resetNote={resetNote}
      ></TextField>
      <TextField
        label="Side 2"
        changeValue={handleSide2}
        value={side2}
        resetNote={resetNote}
      ></TextField>
      <TextField
        label="Side 3"
        changeValue={handleSide3}
        value={side3}
        resetNote={resetNote}
      ></TextField>
      {note.message ? (
        <FormNote isSuccess={note.isSuccess} message={note.message} />
      ) : null}
      <Button label="Submit" submitAction={submit}></Button>
    </form>
  );
};
