import React, { FC, useState } from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
  options?: SelectOption[];
  label?: string;
}

const Select: FC<SelectProps> = ({
  options = [],
  label = "Please select an option",
  onOptionSelected: handler,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    if (handler) {
      handler(option, optionIndex);
    }
  };

  const onLabelClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={onLabelClick}>{label}</button>
      {isOpen ? (
        <ul>
          {options.map((option, index) => (
            <li
              key={option.value}
              onClick={() => onOptionSelected(option, index)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
