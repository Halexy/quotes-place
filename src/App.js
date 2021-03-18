import './App.css';
import firebase from './utils/firebaseConfig';
import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import logo from './img/logo.png';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { UidContext } from './components/UidContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [isSignedIn, setSignedIn] = useState(false);
  const [Uid, setUid] = useState(null);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  // Get local state and other React features without having to write classes
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setSignedIn(!!user); //(!!) to transform into boolean
      setUid(user.uid);
    })
  }, []);


  return (
    // unique user value
    <UidContext.Provider value={Uid}>
      <div className="App">
        {isSignedIn ? ( // If user is signed
          <Main />
        ) : ( // If user isn't signed
          <div className="loginPage">
            <div className="container col-11 col-md-7">

              <div className="container-fluid boxText">
                <div className="col-11 p-0 mx-auto">
                  <img src={logo} width="150" height="160" className="d-inline-block align-top" alt="Logo pictures place" />
                  <h1 className="h1 text-center">QUOTES PLACE</h1>
                  <h2 className="h3 text-center">Identifiez-vous pour accédez aux citations et en ajouter !</h2>
                </div>

                <div className="row col-12 mx-auto">
                  <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                  />
                </div>
              </div>

            </div>
          </div>
        )}

        {/* copyrights */}
        <div id="copyrights">
          <div className="container">
            <p>
              &copy; Copyrights <strong>Hajjar Alexy</strong>
            </p>
            <div className="credits">
              Site réalisé avec React JS par <a href="https://www.alexyhajjar.fr/">AlexyHajjar</a>
            </div>
          </div>
        </div>

      </div>
    </UidContext.Provider>
  );
}

export default App;
