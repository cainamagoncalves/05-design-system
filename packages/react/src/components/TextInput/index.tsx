import { VariantProps } from '@stitches/react'
import { Input, Prefix, TextInputContainer } from './styles'

export type TextInputProps = VariantProps<typeof Input> & {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
