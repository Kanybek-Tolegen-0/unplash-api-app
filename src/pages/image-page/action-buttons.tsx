import { Like2Icon, DownloadIcon, LikeIcon } from "../../assets/icons"
import { IconButton } from "../../components"

export const ActionButtons = ({isLiked, onDownload, onLikeChange }: {isLiked: boolean, onDownload: () => void, onLikeChange: () => void}) => {
    return <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <IconButton Icon={isLiked ? LikeIcon : Like2Icon} bgColor={isLiked ? "#D01110"  : "#FFF" } onClick={onLikeChange} />
                <IconButton Icon={DownloadIcon} color="#000000" bgColor="#FFF200" label="Downloand" onClick={onDownload} />
    </div>
}