import { useLoaderData, useRevalidator } from "react-router-dom"
import type { SearchImage } from "../../models";
import { Avatar, BackgroundImage } from "../../components";
import { useEffect } from "react";
import { ActionButtons } from "./action-buttons";
import { useIsMobile, useLikes, useRandomImage } from "../../hooks";
import styles from './style.module.scss'

export const ImagePage = () => {
    const isMobile = useIsMobile();
    const loaderData = useLoaderData<SearchImage>();
    const { revalidate } = useRevalidator();
    const {isLiked, toggleLike } = useLikes(loaderData)

    const { randomImage } = useRandomImage()

    const onDownload = () => {
      const link = document.createElement('a');
      link.href = loaderData.urls.full;
      link.download = loaderData.urls.full;

    fetch(loaderData.urls.full)
    .then(response => response.blob())
    .then(blob => {
      const blobUrl = URL.createObjectURL(blob);
      link.href = blobUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    })
    .catch(error => {
      console.error('Ошибка при загрузке изоброжения:', error);
    });
    }

    useEffect(() => {
        revalidate()
    }, [revalidate])

    return loaderData ?
          <div className={styles['random-image']}
              style={{ position: "relative",
              backgroundImage: !isMobile ? `url(${randomImage?.urls.full})` : "none"
              }}>
            <div style={{ width: "max-content", display: "flex", flexDirection: "column", gap: "8px", position: "absolute", left: "50%", top: "10%", transform: "translate(-50%, 0)"}}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Avatar user={loaderData.user} />
              <ActionButtons isLiked={isLiked} onDownload={onDownload} onLikeChange={() => {
                if(loaderData?.id) {
                  toggleLike(loaderData)
                }
                }} />
            </div>
            <BackgroundImage
              backgroundImage={isMobile ? loaderData.urls.small : loaderData.urls.full} style={{
            }}
              width={isMobile ? 400 : 1482}
              height={isMobile ? 227 : 600}
            />
            </div>
        </div> : null
}