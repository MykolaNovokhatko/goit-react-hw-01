import Profile from '../Profile/Profile';
import userData from '../Profile/userData.json'
import clsx from 'clsx'
import css from './App.module.css'

export default function App () {
return (
  <>
  <Profile userData={userData}/>
  </>
)
}