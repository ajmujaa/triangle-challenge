import React from "react";

export default interface ITextField {
  label: string;
  value: string;
  changeValue: (e: string) => void;
  resetNote: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const TextField = ({
  label,
  changeValue,
  value,
  resetNote
}: ITextField) => (
  <fieldset>
    <label>
      <span>{label}</span>
      <input
        type="text"
        onChange={e => changeValue(e.target.value)}
        onFocus={resetNote}
        value={value}
        required
      />
    </label>
  </fieldset>
);
