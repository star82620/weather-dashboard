import { FormattedLocation } from "../constants/types/GeocodingData";
import { updateSavedLocation } from "../redux/locationSlice";
import { useAppDispatch, useAppSelector } from "./redux";

export default function useSaveLocation() {
  const dispatch = useAppDispatch();
  const saved = useAppSelector((state) => state.location.saved) || [];

  const saveLocation = (value: FormattedLocation) => {
    // 檢查 value 是否已存在列表中
    const checkList = saved.find((location) => {
      return location.id === value.id;
    });

    if (checkList) {
      return console.error("error: 已經有儲存了");
    }

    const newList = [...saved, value];
    const newListString = JSON.stringify(newList);

    dispatch(updateSavedLocation(newList));
    localStorage.setItem("savedLocations", newListString);
  };

  return saveLocation;
}
