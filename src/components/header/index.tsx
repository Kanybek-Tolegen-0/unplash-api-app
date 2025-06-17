import { Link, useLocation } from 'react-router-dom'
import {LikeIcon, LogoIcon, Search2Icon} from '../../assets/icons'
import { IconButton } from '../icon-button'
import style from './style.module.scss'
import { useIsMobile } from '../../hooks'

export const Header = () => {
    const location = useLocation()
    const isMobile = useIsMobile();

    return (
    <div className={`${style.header} ${isMobile ? style["header__mobile"] : ""}`}>
        <Link to="/"><LogoIcon width={185.48} height={72.66} /></Link>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {location.pathname !== "/" ? <Link to="/"><IconButton Icon={Search2Icon} label='Поиск' bgColor='none' /></Link> : null}
            {location.pathname !== "/favourites" ?<Link to="/favourites"><IconButton Icon={LikeIcon} label='Избранное' bgColor='none' /></Link> : null}
        </div>
    </div>)
}