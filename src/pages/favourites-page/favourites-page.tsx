import { ContentLayout, Gallery } from "../../components"
import { useLikes } from "../../hooks"
import styles from './styles.module.scss'

export const FavouritesPage = () => {
    const {getLikedPhotos} = useLikes();

    const favImages = getLikedPhotos()
    
    return <div className={styles.favourites}>
        <ContentLayout>
            <h1 style={{ textAlign: "center", marginBottom: "16px" }}>Избранные</h1>
            {favImages ? <Gallery images={favImages} /> : null }
        </ContentLayout>
    </div>
}