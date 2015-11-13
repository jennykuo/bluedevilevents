
CREATE TABLE RegisteredUser 
(id VARCHAR(16) NOT NULL PRIMARY KEY,
 first_name VARCHAR(16) NOT NULL,
 last_name VARCHAR(16) NOT NULL, 
 email VARCHAR(256) NOT NULL 
);

CREATE TABLE Events
(eventid INTEGER NOT NULL,
 name VARCHAR(32) NOT NULL,
 date DATE NOT NULL, 
 start_time time NOT NULL, 
 end_time time NOT NULL, 
 description VARCHAR(256) NOT NULL, 
 location VARCHAR(128) NOT NULL, 
 tags VARCHAR(64) NOT NULL, 
 netid VARCHAR(16) NOT NULL,
 PRIMARY KEY(eventid, netid)
);


