import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { useState, useRef, useEffect } from 'react';
interface IPropsLegendPosition {
  onChange: (value: any) => void;
  options: {
    id: number;
    bgColor?: string;
    hex?: string;
    title: string;
  }[];
  label: string;
  labelContentPosition: string;
  name: string;
  valueTest: {
    title: string;
    bgColor?: string;
    value: any;
    colorLegend?: any;
  };
  disabled?: boolean;
  boardColorOut?: string | null;
  boardColorInner?: string | null;
  excludeBothColors?: boolean;
}
const Select = ({
  onChange,
  options,
  label,
  labelContentPosition,
  name,
  valueTest,
  disabled = false,
  boardColorOut = null,
  boardColorInner = null,
  excludeBothColors = false,
}: IPropsLegendPosition) => {
  const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number; width: number | string }>({
    top: 0,
    left: 0,
    width: 0,
  });
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const optionsHeightCount = () => {
    let result = 40;
    const height = 40;
    for (let i = 1; options.length + 1 > i; i++) {
      if (Math.floor(result) === 200) break;
      result = height * i;
    }

    return Math.floor(result);
  };
  const optionsHeight = optionsHeightCount();
  const positionDropdown = () => {
    const button = buttonRef.current;
    if (!button) return { top: 0, left: 0, width: '100%' };
    const rect = button.getBoundingClientRect();
    const dropdownHeight = 200; // Максимальная высота выпадающего списка
    const rectHeight = optionsHeight && optionsHeight < 200 ? rect.height + (190 - optionsHeight) : rect.height;
    const spaceBelow = window.innerHeight - rect.bottom;
    // const top = spaceBelow < dropdownHeight ? rect.top - dropdownHeight + rectHeight : rect.bottom - 30;
    const top = spaceBelow < dropdownHeight && window.innerHeight >= 600 ? -190 + rectHeight - 5 : 5;
    const left = rect.left;
    const width = Math.floor(rect.width);

    return { top, left, width: width };
  };

  useEffect(() => {
    if (isOpen) {
      setDropdownPosition(positionDropdown());
    }
  }, [isOpen]);
  return (
    <Listbox disabled={disabled} name={name} value={valueTest.value} onChange={onChange}>
      {({ open }) => {
        useEffect(() => {
          setIsOpen(open);
        }, [open]);

        return (
          <>
            <label
              className={`flex justify-center md:${labelContentPosition ? labelContentPosition : 'justify-start'} ${disabled ? 'opacity-30' : ''}   items-center md:pl-4 text-base font-medium md:pr-3 leading-6 text-nowrap text-warm-gray`}
            >
              {label}
            </label>
            <div className="relative mt-2 mb-2 w-full">
              <ListboxButton
                ref={buttonRef}
                className={`relative ${disabled ? 'opacity-30' : ''} w-full cursor-pointer bg-eerie-black py-1.5 pl-3 pr-10 text-left text-#b3b2a0 shadow-sm ring-1 ring-inset ring-#b3b2a0 focus:outline-none focus:ring-2 focus:ring-#9c9b7c hover:ring-#9c9b7c sm:text-sm sm:leading-6`}
              >
                <span className="flex items-center">
                  {valueTest.bgColor && (
                    <div className={`h-5 w-5 flex-shrink-0 rounded-full ${valueTest.bgColor}`}></div>
                  )}
                  <span
                    className={`ml-3 block ${checkingForInnerColor(boardColorInner, boardColorOut, valueTest.bgColor, excludeBothColors) ? 'line-through' : ''} truncate`}
                  >
                    {valueTest.title}
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-#9c9b7c" aria-hidden="true" />
                </span>
              </ListboxButton>

              {open && (
                <div
                  className="absolute z-10 max-h-56  w-full overflow-y-auto rounded-md bg-eerie-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  style={{
                    top: `${dropdownPosition.top}px`,
                    height: `${optionsHeight}px`,
                  }}
                >
                  <ListboxOptions static className="w-full">
                    {options.map((item) => (
                      <ListboxOption
                        key={item.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-3 pr-9 ${
                            active ? 'bg-#b3b2a0 text-eerie-black' : 'text-#b3b2a0'
                          }`
                        }
                        value={item}
                      >
                        {({ selected }) => (
                          <>
                            <div className="flex items-center">
                              {item.bgColor && (
                                <div className={`h-5 w-5 flex-shrink-0 rounded-full ${item.bgColor}`}></div>
                              )}
                              <span
                                className={`ml-3 ${checkingForInnerColor(boardColorInner, boardColorOut, item.bgColor, excludeBothColors) ? 'line-through' : ''} truncate ${selected ? 'font-semibold' : 'font-normal'}`}
                              >
                                {item.title}
                              </span>
                            </div>

                            {selected && (
                              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-#9c9b7c">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            )}
                          </>
                        )}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              )}
            </div>
          </>
        );
      }}
    </Listbox>
  );
};
export default Select;
const checkingForInnerColor = (
  boardColorInner: string | null,
  boardColorOut: string | null,
  bgColor: string | undefined,
  excludeBothColors: boolean,
) => {
  if (excludeBothColors) {
    return boardColorOut === bgColor || boardColorInner === bgColor;
  }
  if (boardColorInner === null) {
    return boardColorOut === bgColor || boardColorInner === bgColor;
  }
  if (boardColorInner !== null) {
    return boardColorInner === bgColor;
  }
};
