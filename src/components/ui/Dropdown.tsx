"use client";

import { ChevronDownIcon } from "lucide-react"; // or any icon lib
import { useState } from "react";

export type DropdownOption<T = string> = {
  label: string;
  value: T;
};

interface DropdownProps<T = string> {
  options: DropdownOption<T>[];
  selected?: T;
  onSelect: (value: T) => void;
  label?: string;
  className?: string;
}

export default function Dropdown<T = string>({
  options,
  selected,
  onSelect,
  label = "Select an option",
  className = "",
}: DropdownProps<T>) {
  const [open, setOpen] = useState(true);

  const selectedOption = options.find((o) => o.value === selected);

  return (
    <div className={`dropdown ${className}`}>
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 flex justify-between items-center gap-2"
        onClick={() => setOpen(true)}
      >
        {selectedOption?.label || label}
        <ChevronDownIcon size={16} />
      </div>
      {open && (
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full z-[999]"
        >
          {options.map((option) => (
            <li key={`${option.value}`}>
              <a
                onClick={() => {
                  onSelect(option.value);
                  setOpen(false);
                }}
              >
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
