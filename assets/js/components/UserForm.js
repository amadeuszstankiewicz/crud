import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/userform.css';

function UserForm(props) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [hourly_rate, setHourlyRate] = useState("");

    useEffect(() => {
        if(props.userId != 0) {
            let currentUser = props.users[props.users.findIndex(x => x['id'] == props.userId)];
            setName(currentUser['name']);
            setSurname(currentUser['surname']);
            setAge(currentUser['age']);
            setPhone(currentUser['phone']);
            setEmail(currentUser['email']);
            setHourlyRate(currentUser['hourly_rate']);
        }
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(props.userId == 0) {
            addUser();
        } else {
            editUser();
        }
    }

    function addUser() {
        let bodyFormData = new URLSearchParams();
        bodyFormData.append('name', name);
        bodyFormData.append('surname', surname);
        bodyFormData.append('age', age);
        bodyFormData.append('phone', phone);
        bodyFormData.append('password', password);
        bodyFormData.append('email', email);
        bodyFormData.append('hourly_rate', hourly_rate);

        axios({
                method: 'post',
                url: `http://localhost:8000/api/user/create`,
                data: bodyFormData
            })
            .catch(function (error) {
                if (error.response) {
                    alert(error.response.data);
                }
            })
            .then(res => {
                if(res) {
                    props.setUserForm(-1);
                }
            })
    }

    function editUser() {
        let bodyFormData = new URLSearchParams();
        bodyFormData.append('name', name);
        bodyFormData.append('surname', surname);
        bodyFormData.append('age', age);
        bodyFormData.append('phone', phone);
        bodyFormData.append('password', password);
        bodyFormData.append('email', email);
        bodyFormData.append('hourly_rate', hourly_rate);

        axios({
                method: 'post',
                url: `http://localhost:8000/api/user/update/` + props.userId,
                data: bodyFormData
            })
            .catch(function (error) {
                if (error.response) {
                    alert(error.response.data);
                } 
            })
            .then(res => {
                if(res) {
                    props.setUserForm(-1);
                }
            })
    }

    return(
        <div>
            <div className="show-popup-bg"/>
            
                <div className="show-popup-container">
                {
                    props.userId == 0 ?
                        <div>
                            <button className="btn btn-danger popup-exit" onClick={() => props.setUserForm(-1)}>X</button>
                            <h2>Dodaj użytkownika</h2>
                        </div>
                    :
                        <div>
                            <button className="btn btn-danger popup-exit" onClick={() => props.setUserForm(-1)}>X</button>
                            <h2>Edytuj użytkownika</h2>
                        </div>
                }

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>
                            Imie:
                        </label>
                            <input
                            className="form-control"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                    </div>
                    <div className="form-group">
                        <label>
                            Nazwisko:
                        </label>
                            <input
                            className="form-control"
                            type="text"
                            value={surname}
                            onChange={e => setSurname(e.target.value)}
                            />
                    </div>
                    <div className="form-group">
                        <label className="user-form-element">
                            Wiek:
                        </label>
                            <input
                            className="form-control"
                            type="text"
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            />
                    </div>
                    <div className="form-group">
                        <label className="user-form-element">
                            Telefon:
                        </label>
                            <input
                            className="form-control"
                            type="text"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            />
                    </div>
                    {
                        props.userId == 0 ?
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
                        :
                            null
                    }
                    <div className="form-group">
                        <label className="user-form-element">
                            Email:
                        </label>
                            <input
                            className="form-control"
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                    </div>
                    <div className="form-group">
                        <label className="user-form-element">
                            Stawka zł/h:
                        </label>
                            <input
                            className="form-control"
                            type="text"
                            value={hourly_rate}
                            onChange={e => setHourlyRate(e.target.value)}
                            />
                    </div>

                    <input className="btn btn-success" type="submit" value="Zatwierdź" />
                </form>
            </div>
        </div>
    )
}
export default UserForm;