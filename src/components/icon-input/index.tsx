import { useState, type ChangeEvent } from "react"
import { SearchIcon } from "../../assets/icons"
import styles from './style.module.scss'
import { useIsMobile } from "../../hooks"

export const IconInput = ({ onChange }: { onChange: (value: string) => void }) => {
    const isMobile = useIsMobile();
    const [value, setValue] = useState("")

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setValue(value)
        onChange(value)
    }

    return <div className={styles["icon-input"]}>
        <div className={styles["input-wrapper"]}>
            <input value={value} className={`${styles.input} ${isMobile ? styles["input__mobile"] : ""}`} placeholder="Поиск" onChange={handleInputChange} />
            <SearchIcon />
        </div>
    </div>
}