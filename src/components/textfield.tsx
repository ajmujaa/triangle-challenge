import React from "react";

export default interface ITextField {
  label: string;
  value: string;
  changeValue: (e: string) => void;
}

export const TextField = ({ label, changeValue, value }: ITextField) => (
  <fieldset>
    <label>
      <span>{label}</span>
      <input
        type="text"
        onChange={e => changeValue(e.target.value)}
        value={value}
        required
      />
    </label>
  </fieldset>
);
