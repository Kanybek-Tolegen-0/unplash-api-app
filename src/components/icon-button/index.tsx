import { useIsMobile } from '../../hooks'
import styles from './style.module.scss'

interface IconButtonProps {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    label?: string,
    bgColor?: string,
    color?: string,
    onClick?: () => void
}

export const IconButton = ({ Icon, label, bgColor, color, onClick }: IconButtonProps) => {
    const isMobile = useIsMobile();

    const button = label ? <button className={styles.button} style={{
            color: color ?? "white",
        }}>{label}</button> : null

    return (<div className={styles["button-wrapper"]} style={{
        background: bgColor ?? "white",
        padding: label ? "8px 16px" : "8px"
    }}

    onClick={onClick}>
        <Icon />
        {isMobile ? null :  button}
    </div>
)}