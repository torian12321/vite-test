import type { PropsWithChildren } from "react";
import { Header } from "./Header";
import { FieldsListBoard } from "./FieldsListBoard";
import { FieldDetailsBoard } from "./FieldDetailsBoard";
import { Body } from "./Body";
import { Wrapper, Content } from "./Layout.styles";

export const ResponsiveDrawer = ({ children }: PropsWithChildren) => (
  <Wrapper>
    <FieldsListBoard />
    <Content>
      <Header />
      <Body>{children}</Body>
    </Content>
    <FieldDetailsBoard />
  </Wrapper>
);
