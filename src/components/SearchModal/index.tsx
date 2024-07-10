import { ChangeEventHandler, MouseEventHandler, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { updateSearchModal } from "../../redux/modalSlice";
import { updateCurrentLocation } from "../../redux/locationSlice";
import getLocationData from "../../helper/getGeocodingApi";
import SearchBar from "./SearchBar";
import Results from "./Results";
import Loading from "../Loading";
import { LocationDataItem } from "../../constants/types/GeocodingData";
import { Modal, ResultList, Wrapper } from "./styled";

export default function SearchModal() {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.searchMode);
  // const isLoading = useAppSelector((state) => state.loading.search);

  const inputRef = useRef<HTMLInputElement>(null);
  const [isResultListOpen, setIsResultListOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [resultDataset, setResultDataset] = useState<LocationDataItem[] | null>(
    null
  );

  // search and get Geocoding Api response
  const fetchData = async (value: string) => {
    if (!value) return;

    try {
      const geocodingRes = await getLocationData(value);

      if (!geocodingRes) return;
      setResultDataset(geocodingRes.results);
    } catch (error) {
      console.error("Error in useGetWeather:", error);
      return;
    }
  };

  // onChange function of search input
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
    fetchData(e.target.value);
    setIsResultListOpen(true);
  };

  // 點擊搜尋結果可更新畫面資料
  const handleChangeWeather: MouseEventHandler<HTMLInputElement> = (e) => {
    const locationData = e.currentTarget.dataset["location"];

    if (locationData) {
      const parsedData = JSON.parse(locationData);
      dispatch(updateCurrentLocation(parsedData));
      localStorage.setItem("currentLocation", locationData);
    }

    setIsResultListOpen(false);
    dispatch(updateSearchModal(false));
  };

  const handleCloseModal = () => {
    dispatch(updateSearchModal(false));
  };

  return (
    <Wrapper $isModalOpen={isModalOpen} onClick={handleCloseModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <SearchBar
          inputRef={inputRef}
          searchValue={searchValue}
          handleInputChange={handleInputChange}
        ></SearchBar>
        <ResultList $isResultListOpen={isResultListOpen}>
          {resultDataset ? (
            <Results
              resultDataset={resultDataset}
              handleChangeWeather={handleChangeWeather}
            />
          ) : (
            <Loading />
          )}
        </ResultList>
      </Modal>
    </Wrapper>
  );
}
