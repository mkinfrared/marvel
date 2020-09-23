import React, { useCallback, useMemo, useState } from "react";

import Dropdown from "ui/Dropdown";
import Input from "ui/Input";
import classes from "utils/classes";

import css from "./Search.module.scss";
import { SearchProps } from "./Search.type";

const Search = <T,>({
  className,
  getOptionLabel,
  onChange,
  onInputChange,
  value,
  options = [],
  loading = false
}: SearchProps<T>) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleFocus = useCallback(() => {
    setDropdownVisible(true);
  }, []);

  const handleBlur = useCallback(() => {
    setDropdownVisible(false);
  }, []);

  const showDropdown = dropdownVisible && (options.length > 0 || loading);

  const handleChange = useCallback(
    (option: T) => () => {
      const label = getOptionLabel(option);
      const event = { target: { value: label } };

      onChange && onChange(option);

      onInputChange(event as React.ChangeEvent<HTMLInputElement>);
    },
    []
  );

  // const getOptions = () => {
  //   return options.map((option, index) => {
  //     const { id } = option as Record<string, any>;
  //     const key = id ?? index;
  //
  //     if (renderOptions) {
  //       return (
  //         <React.Fragment key={key}>{renderOptions(option)}</React.Fragment>
  //       );
  //     }
  //
  //     return (
  //       <li key={key} onMouseDown={handleChange(option)}>
  //         {getOptionLabel(option)}
  //       </li>
  //     );
  //   });
  // };

  const optionsToRender = useMemo(() => {
    return options.map((option, index) => {
      const { id } = option as Record<string, any>;
      const key = id ?? index;

      return (
        <li key={key} onMouseDown={handleChange(option)}>
          <p>{getOptionLabel(option)}</p>
        </li>
      );
    });
  }, [getOptionLabel, handleChange, options]);

  return (
    <div className={classes(css.Search, className)}>
      <Input
        onChange={onInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
      />
      {showDropdown && (
        <Dropdown loading={loading} className={css.dropdown}>
          {optionsToRender}
        </Dropdown>
      )}
    </div>
  );
};

export { Search };

export default React.memo(Search) as typeof Search;
