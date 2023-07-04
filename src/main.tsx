import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.scss';
import { AppContext, IAppContext } from './context/app-ctx.ts';
import { IContextData } from './interfaces/IContextData.ts';
import { logger } from './services/ESLogger.ts';


const AppInitializer: React.FunctionComponent = () => {
  const [userData, setUserData] = useState<IContextData>(
    {
      user_id : "",
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      birthday: "",
      isAdmin: false,
    }
  );

  const [canStoreData, setCanStoreData] = useState<boolean>(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (!storedUserData && canStoreData) {
      localStorage.setItem("userData", JSON.stringify(userData));
      setCanStoreData(false);
      logger.debug(userData);
    }
  }, [userData]);


  const contextValue: IAppContext = { userData, setUserData, setCanStoreData} ;

  return (
    <React.StrictMode>
      <AppContext.Provider value={contextValue}>
        <App />
      </AppContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(
  <AppInitializer />,
  document.getElementById('root') as HTMLElement
);
