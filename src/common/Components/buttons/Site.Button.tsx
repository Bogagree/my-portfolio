import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import style from './SiteButton.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    error?: boolean
}

const SiteButton: React.FC<SuperButtonPropsType> = (
    {
        error, className,
        ...restProps
    }
) => {
    const finalClassName = `${error ? style.red : style.default} ${className}`

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    )
}

export default SiteButton
