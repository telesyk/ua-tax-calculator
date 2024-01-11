import { Radio, cn } from '@nextui-org/react'

export const CustomRadio = (props: any) => {
  const { children, ...otherProps } = props
  const { isRowReverse, maxWidth, color, size } = otherProps
  const rowClass = isRowReverse ? 'flex-row-reverse' : ''
  const maxWidthClass = !maxWidth ? 'max-w-auto' : `max-w-[${maxWidth}px]`
  const innerSpaceclass =
    size === 'sm' ? 'gap-2 p-2' : size === 'lg' ? 'gap-6 p-6' : 'gap-4 p-4'
  const activeBorderClass = !color ? 'border-default' : `border-${color}`

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          'inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between',
          `cursor-pointer rounded-lg border-2 border-transparent ${innerSpaceclass} ${rowClass} ${maxWidthClass}`,
          `data-[selected=true]:${activeBorderClass}`
        ),
      }}
    >
      {children}
    </Radio>
  )
}
