import { Link } from "react-router-dom";
import type { SearchImage } from "../../models";
import styles from "./style.module.scss"

export const Gallery = ({ images } : { images: SearchImage[] }) => {
    return <div className={styles.gallery}>
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