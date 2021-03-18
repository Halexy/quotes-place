import React from 'react';
import firebase from '../utils/firebaseConfig';
import logo from '../img/logo.png';
import Create from './Create';
import Read from './Read';

const Main = () => {
    return (
        <main>
            <nav className="navbar navbar-dark bg-dark">
                <div className="navbar-img col-md">
                    <img src={logo} width="90" height="100" className="d-inline-block align-top" alt="Logo pictures place" />
                </div>

                <div className="navbar-text col-md mb-1">
                    <h3>👋 Bonjour {firebase.auth().currentUser.displayName} 👋</h3>
                </div>
                
                <div className="navbar-btn col-md">
                    <button onClick={() => firebase.auth().signOut()} type="button" className="btn btn-danger">Se déconnecter</button>
                </div>
           </nav>
           <Create />
           <Read />
        </main>
    )
}

export default Main;


