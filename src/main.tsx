import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { AppContext, IAppContext } from './context/app-ctx.ts';
import { IContextData } from './interfaces/IContextData.ts';
import './index.scss';
import { ENotifType } from './enums/ENotification-enum.ts';
import { Notification } from './components/notification/ENotification.tsx';


const AppInitializer: React.FunctionComponent = () => {
  const [userData, setUserData] = useState<IContextData>({
    user_id: "",
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    birthday: "",
    isAdmin: false,
  });

  const [canStoreData, setCanStoreData] = useState<boolean>(false);

  const [showNotif, setNotif] = useState<{
    txt: string;
    type: ENotifType;
    bShow: boolean;
  }>({
    txt: "",
    type: ENotifType.INFO,
    bShow: false,
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (!storedUserData && canStoreData) {
      localStorage.setItem("userData", JSON.stringify(userData));
      setCanStoreData(false);
    }
  }, [userData]);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotif({ txt: "", type: ENotifType.INFO, bShow: false });
    }, 6000);

    return () => clearTimeout(timeout);
  }, [showNotif]);

  const contextValue: IAppContext = {
    userData,
    setUserData,
    setCanStoreData,
    showNotif,
    setNotif,
  };

  return (
    <React.StrictMode>
      <AppContext.Provider value={contextValue}>
        <App />
        {showNotif.bShow && (
          <Notification txt={showNotif.txt} type={showNotif.type} />
        )}
      </AppContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(
  <AppInitializer />,
  document.getElementById('root') as HTMLElement
);
