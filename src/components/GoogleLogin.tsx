import { useState, useEffect } from 'react';
import { initClient, signInToGoogle, getSignedInUserName, signOutFromGoogle } from '../services/googleServices';
import { SaveDate } from './SaveDate';

export const GoogleLogin = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const getGoogleUserName = async () => {
    const name = await getSignedInUserName();
    if (name) {
      setSignedIn(true);
      setUserName(name);
    }
  };

  const signIn = async () => {
    const successful = await signInToGoogle();
    if (successful) {
      getGoogleUserName();
    }
  };

  const signOut = async () => {
    const status = await signOutFromGoogle();
    if (status) {
      setSignedIn(false);
      setUserName('');
    }
  };

  useEffect(() => {
    initClient((success: boolean) => {
      if (success) {
        getGoogleUserName();
      }
    });
  }, []);

  return (
    <>
      <div className="mb-12 flex flex-row justify-between">
        {signedIn ? (
          <>
            <div>
              Olá{' '}
              <span className="underline decoration-purple-500 decoration-solid decoration-1 underline-offset-1">
                {userName}
              </span>
            </div>
            <button
              className="border border-neutral-700 px-2 transition delay-300 ease-in-out hover:border-purple-700 hover:text-purple-700"
              onClick={signOut}
            >
              Sair
            </button>
          </>
        ) : (
          <>
            <div></div>
            <button
              className="border border-neutral-700 px-2 hover:border-purple-700 hover:text-purple-700"
              onClick={signIn}
            >
              Entrar
            </button>
          </>
        )}
      </div>
      <SaveDate signedIn={signedIn} />
    </>
  );
};
