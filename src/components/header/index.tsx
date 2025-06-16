import { Link } from 'react-router-dom'
import {LikeIcon, LogoIcon} from '../../assets/icons'
import { IconButton } from '../icon-button'
import style from './style.module.scss'

export const Header = () => {
    return (
    <div className={style.header}>
        <Link to="/"><LogoIcon width={185.48} height={72.66} /></Link>
        <IconButton Icon={LikeIcon} label='Избранное' />
    </div>)
}