import { VariantProps } from '@stitches/react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export type BoxProps = VariantProps<typeof Box>

Box.displayName = 'Box'
