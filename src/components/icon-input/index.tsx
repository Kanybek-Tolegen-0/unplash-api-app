import { useState, type ChangeEvent } from "react"
import { SearchIcon } from "../../assets/icons"
import styles from './style.module.scss'

export const IconInput = ({ onChange }: { onChange: (value: string) => void }) => {
    const [value, setValue] = useState("")

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setValue(() => {
            onChange(value)
            return value
        })
    }

    return <div className={styles["icon-input"]}>
        <div className={styles["input-wrapper"]}>
            <input value={value} className={styles.input} placeholder="Поиск" onChange={handleInputChange} />
            <SearchIcon />
        </div>
    </div>
}