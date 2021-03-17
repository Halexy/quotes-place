import React, { useState } from 'react'
import firebase from '../utils/firebaseConfig';

const UpdateDelete = ({ item }) => {
    const [update, setUpdate] = useState(false);
    const [authorUpdate, setAuthorUpdate] = useState(null);
    const [textUpdate, setTextUpdate] = useState(null);

    const updateItem = () => {
        let quote = firebase.database().ref("quotesDB").child(item.id); // Identify quote

        if (authorUpdate !== null) {
            quote.update({
                author: authorUpdate
            });
        }

        if (textUpdate !== null) {
            quote.update({
                text: textUpdate
            });
        }

        setUpdate(false);
    };

    const deleteItem = () => {
        let quote = firebase.database().ref("quotesDB").child(item.id);

        quote.remove();
    }


    return (
        
            <div className="card col-3 mx-auto p-0 shadow">
                <div className="card-body bg-dark">
                {update === false && (
                    <blockquote className="blockquote mb-0">
                        <div className="item-container">
                            <p className="text-light">"{item.text}"</p>
                            <footer className="blockquote-footer">{item.author}</footer>
                        </div>
 
                        <div className="button-container mt-2">
                            <button onClick={() => setUpdate(!update)} className="btn btn-info btn-sm mr-1">Modifier</button>
                            <button onClick={deleteItem} className="btn btn-danger btn-sm ml-1">Supprimer</button>
                        </div>
                    </blockquote>
                )}

                {update && 
                    <div className="item-container-update">
                        <div className="form-group">
                            <textarea 
                                defaultValue={item.text}
                                onChange={(e) => 
                                    setTextUpdate(e.target.value)
                                }
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="text"
                                defaultValue={item.author}
                                onChange={(e) => 
                                    setAuthorUpdate(e.target.value)
                                }
                                className="form-control"
                            />
                        </div>


                        <button onClick={updateItem} className="btn btn-success btn-sm">Valider</button>
                    </div>

                }
                </div>
            </div>

    )
}

export default UpdateDelete
