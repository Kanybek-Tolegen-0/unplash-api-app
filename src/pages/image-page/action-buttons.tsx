import { Like2Icon, DownloadIcon } from "../../assets/icons"
import { IconButton } from "../../components"

export const ActionButtons = ({onDownload, onLikeChange }: {onDownload: () => void, onLikeChange: () => void}) => {
    return <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <IconButton Icon={Like2Icon} bgColor="#FFF" onClick={onLikeChange} />
                <IconButton Icon={DownloadIcon} color="#000000" bgColor="#FFF200" label="Downloand" onClick={onDownload} />
    </div>
}