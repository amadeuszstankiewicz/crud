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
3. Run:
```
symfony server:start
```
