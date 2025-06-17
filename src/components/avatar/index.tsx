import { useIsMobile } from "../../hooks";
import type { SearchImage } from "../../models";
import styles from "./style.module.scss"

export const Avatar = ({ user }: { user: SearchImage['user'] }) => {
    const isMobile = useIsMobile();

    return <div className={styles.avatar}>
        <div className={styles["avatar__photo"]} style={{ background: `url(${user.profile_image.medium})` }} />
        <div className={styles["user-container"]}>
            <p className={`${styles.user} ${styles["user__fio"]} ${isMobile ? styles["user__fio__mobile"] : ""}`}>{`${user.first_name} ${user.last_name}`}</p>
            <p className={`${styles.user} ${styles["user__username"]} ${isMobile ? styles["user__username__mobile"] : ""}`}>{`@${user.username}`}</p>
        </div>
    </div>
}