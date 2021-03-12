# Database Setup

```
CREATE TABLE users (
    id SERIAL UNIQUE NOT NULL,
    username varchar(255) UNIQUE NOT NULL,
    password varchar(255) NOT NULL,
    created_at timestamp NOT NULL,
    authorized boolean DEFAULT true NOT NULL
);


INSERT INTO users (username, password) VALUES ( 'brff19', 'hashedPasswordFromBcryptOnNodeServer');

SELECT * FROM users WHERE username = 'brff19';

```
