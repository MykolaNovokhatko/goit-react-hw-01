import Profile from '../Profile/Profile';
import userData from '../Profile/userData.json';
import FriendList from '../FriendList/FriendList';
import friends from '../FriendList/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transaction from '../TransactionHistory/TransactionHistory.json';

import clsx from 'clsx';
import css from './App.module.css';

export default function App() {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
}