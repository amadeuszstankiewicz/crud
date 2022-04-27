import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/showuser.css';

function ShowUser(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/show/` + props.userId)
            .then(res => {
                setUser(res.data);
            })
    }, []);

    return(
        <div>
            <div className="show-popup-bg"/>
                {
                    user != null ?
                        <div className="show-popup-container">
                            <button className="btn btn-danger popup-exit" onClick={() => props.setShowUser(-1)}>X</button>
                            <p><b>IMIĘ:</b> {user['name']}</p>
                            <p><b>NAZWISKO:</b> {user['surname']}</p>
                            <p><b>WIEK:</b> {user['age']}</p>
                            <p><b>TELEFON:</b> {user['phone']}</p>
                            <p><b>EMAIL:</b> {user['email']}</p>
                            <p><b>STAWKA ZŁ/H:</b> {user['hourly_rate']}</p>
                        </div>
                    :
                        <div className="show-popup-container">
                            <button className="btn btn-danger popup-exit" onClick={() => props.setShowUser(-1)}>X</button>
                            Loading...
                        </div>
                }
        </div>
    )
}
export default ShowUser;