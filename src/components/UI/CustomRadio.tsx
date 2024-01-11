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

// import { useRadio, VisuallyHidden, RadioProps, cn } from '@nextui-org/react'

// export const CustomRadio = (props: RadioProps) => {
//   const {
//     Component,
//     children,
//     isSelected,
//     description,
//     getBaseProps,
//     getWrapperProps,
//     getInputProps,
//     getLabelProps,
//     getLabelWrapperProps,
//     getControlProps,
//   } = useRadio(props)

//   // debug radio PROPS
//   // console.debug('props useRadio(props)', useRadio(props))
//   const { ...otherProps } = props
//   const { color } = otherProps
//   // console.debug('props isSelected', isSelected)
//   console.debug('props color', color)

//   return (
//     <Component
//       {...getBaseProps()}
//       className={cn(
//         'group inline-flex items-center justify-between hover:bg-content2 flex-row-reverse',
//         'cursor-pointer border-2 border-default rounded-lg gap-4 p-4',
//         'data-[selected=true]:border-primary'
//       )}
//     >
//       <VisuallyHidden>
//         <input {...getInputProps()} />
//       </VisuallyHidden>
//       <span {...getWrapperProps()}>
//         <span {...getControlProps()} />
//       </span>
//       <div {...getLabelWrapperProps()}>
//         {children && <span {...getLabelProps()}>{children}</span>}
//         {description && (
//           <span className="text-small text-foreground opacity-70">
//             {description}
//           </span>
//         )}
//       </div>
//     </Component>
//   )
// }
