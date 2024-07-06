import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Form, Input, Label, Wrapper } from "./styled";

export default function SearchBar() {
  const [value, setValue] = useState<string>("");

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
