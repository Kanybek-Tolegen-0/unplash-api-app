import styles from "./style.module.scss"

export const BackgroundImage = ({ children, backgroundImage, width, height, style }: { children?: React.ReactNode, backgroundImage: string, width?: number, height?: number, style: React.CSSProperties }) => {
    return <div className={styles["background-image"]} style={{
        backgroundImage: `url(${backgroundImage})`,
        width,
        height,
        ...style
    }}>
        {children}
    </div>
}