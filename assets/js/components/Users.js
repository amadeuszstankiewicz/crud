import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowUser from './ShowUser';
import UserForm from './UserForm';
import PasswordForm from './PasswordForm';
import '../../styles/app.css';

function Users() {
    const [users, setUsers] = useState([]);
    const [showUser, setShowUser] = useState(-1);
    const [userForm, setUserForm] = useState(-1);
    const [passwordForm, setPasswordForm] = useState(-1);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        fetchData();
    }, [userForm]);

    function fetchData() {
        axios.get(`https://cruduserstable.herokuapp.com/api/users`)
            .then(res => {
                if(Array.isArray(res.data)){
                    setUsers(res.data);
                }
            })
    }

    function deleteUser(userId) {
        if(window.confirm('Chcesz usunąć tego użytkownika?')){
            axios.delete(`https://cruduserstable.herokuapp.com/api/user/delete/` + userId)
                .then(res => {
                    fetchData();
                })
        }
    }

    return(
        <div className="main-container">
            <h1>Lista użytkowników</h1>
            <button className="btn btn-success m-3" onClick={() => setUserForm(0)}>Dodaj użytkownika</button>
            {
                passwordForm != -1 ?
                    <PasswordForm userId={passwordForm} setPasswordForm={setPasswordForm} />
                :
                    null
            }
            {
                showUser != -1 ?
                    <ShowUser userId={showUser} setShowUser={setShowUser} />
                :
                    null
            }
            {
                userForm != -1 ?
                    <UserForm userId={userForm} users={users} setUserForm={setUserForm}/>
                :
                    null
            }
            <table id="usersTable" className="table table-striped">
                <thead>
                    <tr>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Wiek</th>
                        <th>Telefon</th>
                        <th>Email</th>
                        <th>Stawka zł/h</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) =>
                        <tr key={user['id']}>
                            <td>{user['name']}</td>
                            <td>{user['surname']}</td>
                            <td>{user['age']}</td>
                            <td>{user['phone']}</td>
                            <td>{user['email']}</td>
                            <td>{user['hourly_rate']}zł</td>
                            <td><button className="btn btn-info" onClick={() => setShowUser(user['id'])}>POKAŻ</button></td>
                            <td><button className="btn btn-primary" onClick={() => setUserForm(user['id'])}>EDYTUJ</button></td>
                            <td><button className="btn btn-warning" onClick={() => setPasswordForm(user['id'])}>ZMIEŃ HASŁO</button></td>
                            <td><button className="btn btn-danger" onClick={() => deleteUser(user['id'])}>USUŃ</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Users;