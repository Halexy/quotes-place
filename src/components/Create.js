import React, { useState } from "react";
import firebase from "../utils/firebaseConfig";
import quotes from '../img/quotes.png';

const Create = () => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");


  const createQuote = () => {
    const quotesDB = firebase.database().ref("quotesDB");
    const quote = {
      author,
      text,
    };

    quotesDB.push(quote);

    setAuthor("");
    setText("");
  };

  return (
    <div className="create">

<div className="row">

  <div className="col-12 bannTitle">
    <div className="contact-info">
      <img src={quotes} width="50" height="50" className="my-2"/>
      <h2>Ajoutez une citation !</h2>
      <p>Laissez vous emporter par votre inspiration et déposez vos citations.</p>
    </div>
  </div>


  <div className="col-12 py-4 form bg-light">

    <div className="col-8 mx-auto">

      <div className="form-group">
        <label className="control-label col-sm-2" for="fname">Auteur</label>
        <div className="col-8 mx-auto">          
            <input
            type="text"
            placeholder="Albert Einstein"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-control"
            />
        </div>
      </div>

      <div className="form-group">
        <label className="control-label text-center" for="comment">Citation</label>
        <div className="col-8 mx-auto">
            <textarea
            type="text"
            placeholder="Un problème sans solution est un problème mal posé"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="form-control"
            />
        </div>
      </div>

      <div className="form-group">        
        <div className="col-12">
        <button onClick={createQuote} className="btn btn-success">Créer</button> 
        </div>
      </div>

    </div>
  </div>
</div>
</div>


  );
};

export default Create;