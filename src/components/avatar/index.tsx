import type { SearchImage } from "../../models";
import styles from "./style.module.scss"

export const Avatar = ({ user }: { user: SearchImage['user'] }) => {
    return <div className={styles.avatar}>
        <div className={styles["avatar__photo"]} style={{ background: `url(${user.profile_image.medium})` }} />
        <div className={styles["user-container"]}>
            <p className={`${styles.user} ${styles["user__fio"]}`}>{`${user.first_name} ${user.last_name}`}</p>
            <p className={`${styles.user} ${styles["user__username"]}`}>{`@${user.username}`}</p>
        </div>
    </div>
}