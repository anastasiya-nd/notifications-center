import React from 'react';
import s from './App.module.sass';
import Header from './components/Header/Header';
import NotificationTableContainer from './components/NotificationTable/NotificationTableContainer';



const App = (props) => {
  return (
    <div className={s.app_wrap}>
      <Header />
      <NotificationTableContainer />
    </div>
  )
}

export default App;