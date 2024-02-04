import { SBCode } from "./CodeExample.styles";

interface CodeExampleProps {
  obj: { [fieldName: string]: unknown };
}

export const CodeExample = ({ obj }: CodeExampleProps) => (
  <SBCode>{JSON.stringify(obj, null, 2)}</SBCode>
);
