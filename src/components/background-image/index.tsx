import styles from "./style.module.scss"

export const BackgroundImage = ({ children, backgroundImage }: { children: React.ReactNode, backgroundImage: string }) => {
    return <div className={styles["background-image"]} style={{
        backgroundImage: `url(${backgroundImage})`
    }}>
        {children}
    </div>
}