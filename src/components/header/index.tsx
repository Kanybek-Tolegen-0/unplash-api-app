import {LikeIcon, LogoIcon} from '../../assets/icons'
import { IconButton } from '../icon-button'
import style from './style.module.scss'

export const Header = () => {
    return (
    <div className={style.header}>
        <LogoIcon />
        <IconButton Icon={LikeIcon} label='Избранное' />
    </div>)
}