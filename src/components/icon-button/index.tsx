import type { JSX } from 'react';

interface IconButtonProps {
    Icon: () => JSX.Element, label: string
}

export const IconButton = ({ Icon, label }: IconButtonProps) => {
    return <div>
        <Icon />
        <button>{label}</button>
    </div>
}