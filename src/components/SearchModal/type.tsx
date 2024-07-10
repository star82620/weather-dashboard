import { ChangeEventHandler, MouseEventHandler, RefObject } from "react";
import { LocationDataItem } from "../../constants/types/GeocodingData";

export type SearchBarProps = {
  searchValue: string;
  inputRef: RefObject<HTMLInputElement>;
  handleInputChange: ChangeEventHandler;
};

export type ResultsProps = {
  resultDataset: LocationDataItem[] | null;
  handleChangeWeather: MouseEventHandler<HTMLInputElement>;
};

export type IsResultListOpen = {
  $isResultListOpen: boolean;
};

export type IsModalOpen = {
  $isModalOpen: boolean;
};
