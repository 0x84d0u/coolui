import * as RootBox from "@slots/field/root-box.slot"
import * as RootLabel from "@slots/field/root-label.slot"
import * as Native from "@slots/field/native.slot"


import { cn } from "@utils/cn"
import { Icon, IconProps } from "@components/core/icon.sever"


// Input

export type ShortTextProps = Omit<Native.InputProps, 'className'> & {
    className?: {
        root?: string
        input?: string
        icon?: string
    }
    icon?: IconProps['name']
}
export type SearchProps = ShortTextProps
export type PasswordProps = ShortTextProps
export type EmailProps = ShortTextProps
export type NumberProps = ShortTextProps
export type DateProps = ShortTextProps
export type FileProps = ShortTextProps

export const ShortText = ({ icon, className, ...inputProps }: ShortTextProps) => <RootBox.Slot className={className?.root}>
    {icon && <Icon name={icon} className={className?.icon} />}
    <Native.Input type="text" className={className?.input} {...inputProps} />
</RootBox.Slot>

export const Search = (props: SearchProps) => <ShortText icon="search" type="search"   {...props} />
export const Password = (props: PasswordProps) => <ShortText icon="lock" type="password" autoComplete="current-password"  {...props} />
export const Email = (props: EmailProps) => <ShortText icon="mail" type="email" autoComplete="email"   {...props} />
export const Number = (props: NumberProps) => <ShortText icon="hash" type="number"   {...props} />
export const Date = (props: DateProps) => <ShortText icon="calendar" type="date"   {...props} />
export const File = (props: DateProps) => <ShortText icon="upload" type="file"   {...props} />



// Input with label


export type CheckboxProps = Omit<Native.InputProps, 'className'> & {
    className?: {
        root?: string
        icon?: string
        input?: string
        label?: string
    }
    icon?: IconProps['name']
    label?: string
}

export type RadioProps = CheckboxProps
export const Checkbox = ({ label, icon, className, ...inputProps }: CheckboxProps) => <RootLabel.Slot className={className?.root}>
    {icon && <Icon name={icon} className={className?.icon} />}
    <Native.Input type="checkbox" className={cn("size-4 accent-ring", className?.input)} {...inputProps} />
    {label && <span className={cn("text-sm", className?.label)} >{label}</span>}
</RootLabel.Slot>



export const Radio = ({ label, icon, className, ...inputProps }: RadioProps) => <RootLabel.Slot className={className?.root}>
    {icon && <Icon name={icon} className={className?.icon} />}
    <Native.Input type="radio" className={cn("size-4 accent-ring rounded-full", className?.input)} {...inputProps} />
    {label && <span className={cn("text-sm", className?.label)} >{label}</span>}
</RootLabel.Slot>


// TextArea

export type ParagraphProps = Omit<Native.TextareaProps, 'className'> & {
    className?: {
        root?: string
        input?: string
        icon?: string
    }
    icon?: IconProps['name']
}


export const Paragraph = ({ icon, className, ...inputProps }: ParagraphProps) => <RootBox.Slot className={className?.root}>
    {icon && <Icon name={icon} className={className?.icon} />}
    <Native.Textarea rows={4} className={className?.input} {...inputProps} />
</RootBox.Slot>


// Select based fields



export type SelectProps = Omit<Native.SelectProps, 'className'> & {
    className?: {
        root?: string
        input?: string
        icon?: string
    }
    icon?: IconProps['name']
    chevronIcon?: IconProps['name'],
}

export const Select = ({ 
    className, 
    icon, 
    chevronIcon = 'chevron-down', 
    ...fieldProps 
}: SelectProps) => {
    return (
        <RootBox.Slot className={className?.root}>
            {icon && <Icon name={icon} className={className?.icon} />}
            <Native.Select {...fieldProps} />
            <Icon name={chevronIcon} />
        </RootBox.Slot>
    )
}