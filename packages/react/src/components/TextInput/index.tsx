import { VariantProps } from '@stitches/react'
import { Input, Prefix, TextInputContainer } from './styles'
import { ElementRef, forwardRef } from 'react'

export type TextInputProps = VariantProps<typeof Input> & {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input {...props} ref={ref} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
