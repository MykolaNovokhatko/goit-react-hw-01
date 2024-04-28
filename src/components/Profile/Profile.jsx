import css from './Profile.module.css'

export default function Profile({ 
  userData: {name, tag, location, image, stats},
}) {
  return (
    <div className={css.container}>
      <div className={css.userInfo}>
        <img src={image} alt="User avatar" className={css.imegeUser} />
        <p className={css.nameUser}>{name}</p>
        <p className={css.tagUser}>@{tag}</p>
        <p className={css.locationUser}>{location}</p>
      </div>

      <ul className={css.statsUl}>
        <li className={css.statsLi}>
          <span>Followers</span>
          <span className={css.statsText}>{stats.followers}</span>
        </li>
        <li className={css.statsLi}>
          <span>Views</span>
          <span className={css.statsText}>{stats.views}</span>
        </li>
        <li className={css.statsLi}>
          <span>Likes</span>
          <span className={css.statsText}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
