# User management
### Online demo
https://cruduserstable.herokuapp.com/

### How run it locally

1. Download Xampp (https://www.apachefriends.org/pl/index.html)
2. Using phpmyadmin or symfony create mysql database `crud_users` and table `users` with columns:
```
id, int(11), AUTO_INCREMENT
name, varchar(255)
surname, varchar(255)
age, int(11)
phone, varchar(50)
password, varchar(255)
hourly_rate, float
email, varchar(100)	
```

## API Endpoints

### GET
`/api/users` https://cruduserstable.herokuapp.com/api/users

`/api/user/show/1` https://cruduserstable.herokuapp.com/api/user/show/1
### POST
`/api/user/create` https://cruduserstable.herokuapp.com/api/user/create

`/api/user/update/{id}` https://cruduserstable.herokuapp.com/api/user/update/1

`/api/user/updatepassword/{id}` https://cruduserstable.herokuapp.com/api/user/updatepassword/1
### DELETE
`/api/user/delete/{id}` https://cruduserstable.herokuapp.com/api/user/delete/1

## Description
### GET /api/users
Get all existing users.
### GET /api/user/show/1
Get specific user.
### POST /api/user/create
Create user, the form must have: `name, surname, age, phone, email, password, hourly_rate`.
### POST /api/user/update/{id}
Update user `{id}`, the form can have: `name, surname, age, phone, email, hourly_rate`.
### POST /api/user/updatepassword/{id}
Update user `{id}` password , the form must have: `password`.
### DELETE /api/user/delete/{id}
Delete user `{id}`.
