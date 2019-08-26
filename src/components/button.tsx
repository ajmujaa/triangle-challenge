import React from "react";

export default interface IButton {
  label: string;
  action: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Button = ({ label, action }: IButton) => (
  <button data-ts="Button" onClick={action} className="ts-primary">
    <span>{label}</span>
  </button>
);
