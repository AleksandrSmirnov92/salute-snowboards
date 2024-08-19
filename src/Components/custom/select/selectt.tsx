import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { ISelectOptions } from '../../../store/contracts';
import { useAppDispatch } from '../../../store/hooks/hooks';
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
import {
  setColorValue,
  setLegendValue,
  // setStraightLineValue,
} from '../../../store/feautures/formValues/formValuesSlice';
export default function Select({ label, name, options, selected, actionCreator, setSelected, labelClass }: IProps) {
  const dispatch = useAppDispatch();
  return (
    <Listbox
      name={name}
      value={selected}
      onChange={(value) => {
        switch (actionCreator) {
          case 'model': {
            setSelected!(value);
            break;
          }
          case 'color': {
            dispatch(setColorValue(value));
            break;
          }
          case 'line': {
            // dispatch(setStraightLineValue(value));
            break;
          }
          case 'legend': {
            dispatch(setLegendValue(value));
            break;
          }
        }
      }}
    >
      {({ open }) => (
        <>
          <Label
            className={`flex ${labelClass} items-center pl-4 text-base font-medium pr-3  leading-6 text-nowrap text-warm-gray`}
          >
            {label}
          </Label>
          <div className="relative mt-2 mb-2 w-full">
            <ListboxButton className="relative w-full cursor-pointer  bg-eerie-black py-1.5 pl-3 pr-10 text-left text-#b3b2a0 shadow-sm ring-1 ring-inset ring-#b3b2a0 focus:outline-none focus:ring-2 focus:ring-#9c9b7c hover:ring-#9c9b7c sm:text-sm sm:leading-6">
              <span className="flex items-center">
                {selected!.colorBg && <div className={`h-5 w-5 flex-shrink-0 rounded-full ${selected!.colorBg}`}></div>}
                <span className="ml-3 block truncate">{selected!.title}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-#9c9b7c" aria-hidden="true" />
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute  z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-eerie-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {options.map((item) => (
                <ListboxOption
                  key={item.id}
                  className={({ focus }) =>
                    classNames(
                      focus ? 'bg-#b3b2a0 text-eerie-black' : '',
                      !focus ? 'text-#b3b2a0' : '',
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                    )
                  }
                  value={item}
                >
                  {({ selected, focus }) => (
                    <>
                      <div className="flex items-center">
                        {/* {item.iconDetails?.src && (
                          <img src={item.iconDetails.src} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                        )} */}
                        {item?.colorBg && <div className={`h-5 w-5 flex-shrink-0 rounded-full ${item.colorBg}`}></div>}
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
                          {item.title}
                        </span>
                      </div>

                      {selected ? (
                        <span
                          className={classNames(
                            focus ? 'text-white' : 'text-#9c9b7c',
                            'absolute inset-y-0 right-0 flex items-center pr-4',
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </>
      )}
    </Listbox>
  );
}
interface IProps {
  label?: string;
  labelClass?: string;
  name?: string;
  selected: ISelectOptions;
  setSelected?: React.Dispatch<React.SetStateAction<ISelectOptions>>;
  actionCreator: string;
  options: ISelectOptions[];
}
