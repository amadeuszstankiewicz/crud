import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/userform.css';

function PasswordForm(props) {
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        editPassword();
    }

    function editPassword() {
        if(password != passwordRepeat) {
            alert("Hasła nie mogą się różnić.");
            return;
        }
        let bodyFormData = new URLSearchParams();
        bodyFormData.append('password', password);

        axios({
                method: 'post',
                url: `https://cruduserstable.herokuapp.com/api/user/updatepassword/` + props.userId,
                data: bodyFormData
            })
            .catch(function (error) {
                if (error.response) {
                  console.log(error.response.data);
                }
            })
            .then(res => {
                props.setPasswordForm(-1);
            })
    }

    return(
        <div>
            <div className="show-popup-bg"/>
            
                <div className="show-popup-container">

                <div>
                    <button className="btn btn-danger popup-exit" onClick={() => props.setPasswordForm(-1)}>X</button>
                    <h2>Zmień hasło</h2>
                </div>


                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="user-form-element">
                            Hasło:
                        </label>
                            <input
                            className="form-control"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                    </div>
                    <div className="form-group">
                        <label className="user-form-element">
                            Powtórz hasło:
                        </label>
                            <input
                            className="form-control"
                            type="password"
                            value={passwordRepeat}
                            onChange={e => setPasswordRepeat(e.target.value)}
                            />
                    </div>
                    <input className="btn btn-success" type="submit" value="Zmień hasło" />
                </form>
            </div>
        </div>
    )
}
export default PasswordForm;