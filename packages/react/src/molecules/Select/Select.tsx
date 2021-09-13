import React, { FC, useEffect, useRef, useState } from "react";
import "@ds.e/scss/lib/Select.css";
import Text from "../../atoms/Text";

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
  const [overlayTop, setOverlayTop] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const labelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
  }, [labelRef.current?.offsetHeight]);

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    if (handler) {
      handler(option, optionIndex);
    }
    setSelectedIndex(optionIndex);
    setIsOpen(false);
  };

  const onLabelClick = () => setIsOpen(!isOpen);

  let selectedOption = null;
  if (selectedIndex !== null) {
    selectedOption = options[selectedIndex];
  }

  return (
    <div className="dse-select">
      <button
        ref={labelRef}
        className="dse-select__label"
        onClick={onLabelClick}
      >
        <Text>{selectedOption === null ? label : selectedOption.label}</Text>
        <svg
          width="1rem"
          height="1rem"
          xmlns="http://www.w3.org/2000/svg"
          className={`dse-select__caret ${
            isOpen ? "dse-select__caret-open" : "dse-select__caret-open"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen ? (
        <ul style={{ top: overlayTop }} className="dse-select__overlay">
          {options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const className = `dse-select__option ${
              isSelected ? "dse-select__option-selected" : ""
            }`;
            return (
              <li
                className={className}
                key={option.value}
                onClick={() => onOptionSelected(option, index)}
              >
                <Text>{option.label}</Text>
                {isSelected ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
