import React, { useRef } from "react";

import assignForwardedRefs from "utils/assignForwardedRefs";

import css from "./Input.module.scss";
import { InputProps } from "./Input.type";

const Input = ({
  forwardRef,
  label,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  value,
  type = "text"
}: InputProps) => {
  const innerRef = useRef<HTMLInputElement | null>(null);

  const setRefs = (ref: HTMLInputElement | null) => {
    if (forwardRef) {
      assignForwardedRefs(forwardRef, ref);
    }

    innerRef.current = ref;
  };

  const handleLabelClick = (event: React.SyntheticEvent<HTMLLabelElement>) => {
    event.preventDefault();

    innerRef.current?.focus();
  };

  return (
    <div className={css.Input}>
      {label && <label onClick={handleLabelClick}>{label}</label>}
      <input
        onChange={onChange}
        ref={setRefs}
        placeholder={placeholder}
        type={type}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  );
};

export { Input };

export default React.memo(Input);
