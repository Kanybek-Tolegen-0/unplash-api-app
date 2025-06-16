import styles from './styles.module.scss'

export const ContentLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className={styles.content}>
        {children}
    </div>
}