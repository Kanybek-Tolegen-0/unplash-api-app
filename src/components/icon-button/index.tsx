import styles from './style.module.scss'

interface IconButtonProps {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    label: string
}

export const IconButton = ({ Icon, label }: IconButtonProps) => {
    return (<div className={styles["button-wrapper"]}>
        <Icon />
        <button className={styles.button}>{label}</button>
    </div>
)}