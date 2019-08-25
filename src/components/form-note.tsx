import React from "react";
import ITriangleResult from "../triangle";

export const FormNote = ({ isSuccess, message }: ITriangleResult) => (
  <fieldset>
    <dl className={isSuccess ? "ts-info" : "ts-errors"}>
      <dt>{isSuccess ? "Success" : "Error"}</dt>
      <dd>{message}</dd>
    </dl>
  </fieldset>
);
