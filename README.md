# Database Setup

```
CREATE TABLE users (
    id SERIAL UNIQUE NOT NULL,
    username varchar(255) UNIQUE NOT NULL,
    password varchar(255) UNIQUE NOT NULL,
    created_at datetime NOT NULL,
    authorized boolean DEFAULT true NOT NULL
);


INSERT INTO users (username, password) VALUES ( 'brff19', SHA2('123456', 512);

SELECT * FROM users WHERE password = SHA2('123456', 512);

```
