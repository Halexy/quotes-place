import React from 'react';
import firebase from '../utils/firebaseConfig';
import logo from '../img/logo.png';
import Create from './Create';
import Read from './Read';

const Main = () => {
    return (
        <main>
            <nav className="navbar navbar-dark bg-dark">
                <img src={logo} width="90" height="100" className="d-inline-block align-top" alt="Logo pictures place" />
                <h3 className="col-6">👋 Bonjour {firebase.auth().currentUser.displayName} 👋</h3>
                <button onClick={() => firebase.auth().signOut()} type="button" className="btn btn-danger">Se déconnecter</button>
           </nav>
           <Create />
           <Read />
        </main>
    )
}

export default Main;


