import clsx from 'clsx';
import css from '../FriendListItem/FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  const isOnlineClass = clsx(isOnline === true ? css.online : css.offline);
  return (
    <div className={css.container}>
      <img src={avatar} alt="avatar" width="48" />
      <p className={css.nameStyle}>{name}</p>
      <p className={isOnlineClass}>
        {isOnline === true ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}