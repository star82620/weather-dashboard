import { ReactNode } from "react";
import { Wrapper } from "./styled";

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
