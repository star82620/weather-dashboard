import { SearchBarProps } from "../type";
import { Wrapper, Form, Input, Label } from "./styled";

export default function SearchBar({
  searchValue,
  inputRef,
  handleInputChange,
}: SearchBarProps) {
  return (
    <Wrapper>
      <Form>
        <Label>
          <Input
            type="text"
            placeholder="Search city"
            value={searchValue}
            onChange={handleInputChange}
            ref={inputRef}
          />
        </Label>
      </Form>
    </Wrapper>
  );
}
