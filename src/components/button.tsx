import React from "react";

export default interface IButton {
  label: string;
  submitAction: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Button = ({ label, submitAction }: IButton) => (
  <button data-ts="Button" onClick={submitAction} className="ts-primary">
    <span>{label}</span>
  </button>
);
