import React, {useState, useEffect} from 'react';
import firebase from '../utils/firebaseConfig';
import UpdateDelete from './UpdateDelete';

const Read = () => {
    const [quoteList, setQuoteList] = useState([]);

    useEffect(() => {
        const quotesDB = firebase.database().ref('quotesDB');

        quotesDB.on('value', (snapshot) => {
            let previousList = snapshot.val();
            let list = [];
            for (let id in previousList) {
                list.push({id, ...previousList[id]}); // take the whole array and incorporate id
            }
            setQuoteList(list);
        })
    }, []);

    return (
        <div className="read">
            <ul>
            <div className="row my-3">
                {quoteList && // If quoteList is true
                    quoteList.map((item, index) => (
                        <UpdateDelete 
                            item={item} 
                            key={index}
                        />
                    ))
                }
            </div>
            </ul>
        </div>
    )
}

export default Read
