import SearchBar from "../SearchBar";
import {
  City,
  Country,
  Desc,
  GeoValue,
  Image,
  Location,
  Modal,
  ResultItem,
  ResultList,
  Save,
  Values,
  Wrapper,
} from "./styled";

const resultDataset = [
  {
    id: 1668355,
    name: "Tainan City",
    latitude: 22.99083,
    longitude: 120.21333,
    elevation: 26,
    feature_code: "PPLA2",
    country_code: "TW",
    admin1_id: 7280291,
    admin2_id: 1668352,
    timezone: "Asia/Taipei",
    population: 771235,
    country_id: 1668284,
    country: "Taiwan",
    admin1: "Taiwan",
    admin2: "Tainan",
  },
  {
    id: 1850147,
    name: "Tokyo",
    latitude: 35.6895,
    longitude: 139.69171,
    elevation: 44.0,
    feature_code: "PPLC",
    country_code: "JP",
    admin1_id: 1850144,
    timezone: "Asia/Tokyo",
    population: 8336599,
    country_id: 1861060,
    country: "Japan",
    admin1: "Tokyo",
  },
  {
    id: 1911027,
    name: "Tainan Suger Airport",
    latitude: 35.74667,
    longitude: 111.76361,
    elevation: 628,
    feature_code: "PPL",
    country_code: "TW",
    admin1_id: 1795912,
    admin2_id: 1803566,
    timezone: "Asia/Shanghai",
    country_id: 1814991,
    country: "Taiwan",
    admin1: "Shanxi",
    admin2: "Linfen Shi",
  },
];

export default function SearchModal() {
  // if (!resultDataset) return ;

  const results = resultDataset.map((data) => {
    const { id, name, latitude, longitude, country, country_code } = data;
    const imgUrl = `https://open-meteo.com/images/country-flags/${country_code}.svg`;
    const locationDate = {
      id,
      name,
      latitude,
      longitude,
      country_code,
      country,
    };
    const locationDataString = JSON.stringify(locationDate);

    return (
      <ResultItem key={id} data-location={locationDataString}>
        <Image src={imgUrl} alt={country}></Image>
        <Values>
          <City>{name}</City>
          <Country>{country}</Country>
          <GeoValue>
            ({latitude}, {longitude})
          </GeoValue>
        </Values>
        <Save>
          ⭐️<Desc>Save</Desc>
        </Save>
      </ResultItem>
    );
  });

  return (
    <Wrapper>
      <Modal>
        <SearchBar></SearchBar>
        <ResultList>{results}</ResultList>
      </Modal>
    </Wrapper>
  );
}
