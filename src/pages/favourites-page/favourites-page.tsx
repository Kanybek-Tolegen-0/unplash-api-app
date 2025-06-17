import { ContentLayout, Gallery } from "../../components"
import { useFavImages } from "../../hooks"

export const FavouritesPage = () => {
    const {favImages} = useFavImages();
    
    return <div className="favourites">
        <ContentLayout>
            <h1 style={{ textAlign: "center", marginBottom: "16px" }}>Избранные</h1>
            {favImages ? <Gallery images={favImages} /> : null }
        </ContentLayout>
    </div>
}