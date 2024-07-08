import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import getGeocodeingApi from "../../helper/getGeocodingApi";
import { Form, Input, Label, Wrapper } from "./styled";

export default function SearchBar() {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const geocodingRes = await getGeocodeingApi(value);
        console.log("geo", await geocodingRes);
      } catch (error) {
        console.error("Error in useGetWeather:", error);
        return;
      }
    };
    if (!value) return;
    fetchData();
  }, [value]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("search value:", value);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Input
            type="text"
            placeholder="Search city"
            value={value}
            onChange={handleInputChange}
          />
        </Label>
      </Form>
    </Wrapper>
  );
}
