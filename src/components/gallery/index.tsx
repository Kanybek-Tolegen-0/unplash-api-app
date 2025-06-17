import { Link } from "react-router-dom";
import type { SearchImage } from "../../models";
import styles from "./style.module.scss"
import { useIsMobile } from "../../hooks";

export const Gallery = ({ images } : { images: SearchImage[] }) => {
    const isMobile = useIsMobile()

    return <div className={`${styles.gallery} ${isMobile ? styles["gallery__mobile"] : ""}`}>
        {
            images.map(({ urls, id}) => {
                return <Link to={`/${id}`}><div key={id} title={urls.full} className={styles["gallery__image" ]} style={{
                    backgroundImage: `url(${urls.small})`
                }} />
                </Link>
            })
        }
    </div>
}