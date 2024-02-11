import { PropsWithChildren, FormEvent, useEffect } from 'react'

type ButtonProps = {
  color?: string
  variant?: 'main' | 'secondary'
}
export const Button = ({
  children,
}: PropsWithChildren<ButtonProps>): JSX.Element => {
  return <button>{children}</button>
}
