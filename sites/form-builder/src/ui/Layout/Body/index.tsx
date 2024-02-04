import type { PropsWithChildren } from "react";
import { Wrapper } from "./Body.styles";

export const Body = ({ children }: PropsWithChildren) => (
  <Wrapper>{children}</Wrapper>
);
