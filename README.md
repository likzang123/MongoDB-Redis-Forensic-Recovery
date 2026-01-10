# MongoDB-Redis-Forensic-Recovery

# Overview
This repository investigates the database digital forensics and data recovery tools of MongoDB and Redis.

# About this Project
In this project, the database digital forensics and data recovery tools used are:
* MongoDB log
* MongoDB mongodump
* MongoDB mongorestore
* Redis log
* Redis rdb
* Redis aof

This project compares the tools used, identifies the strengths and weaknesses of each tool and suggests improvements that can be made for each tool.

# Other Tools and Technologies Used
* Visual Studio Code
* MongoDB Compass
* Redis CLI
* Notepad
* Notepad++

# Getting Started
Ensure that all the tools and technologies above are installed.

# Repository Navigation
This repository is organized into three parts:
* MongoDB folder - Contains all the files related to database digital forensics and data recovery tools in MongoDB.
* Redis folder - Contains all the files related to database digital forensics and data recovery tools in Redis.
* README.md file - Contains information about this repository such as the description of the project, tools and technologies used and how to get started.

# MongoDB
* mongodb-log_results.PNG - Contains the screenshot of MongoDB's mongod log file
* mongodb-mongodump_results-1.PNG - Contains the screenshot of the results of mongodump
* mongodb-mongodump_results-2.PNG - Contains the screenshot of the results of mongodump --db=demoDB
* mongodb-mongodump_time_taken.png - Contains the screenshot of the time taken for mongodump
* mongodb-mongorestore_results.PNG - Contains the screenshot of the results of mongorestore
* mongodb-mongorestore_time_taken-1.png - Contains the screenshot of the time taken for mongorestore - part 1
* mongodb-mongorestore_time_taken-2.png - Contains the screenshot of the time taken for mongorestore - part 2
* playground-1.mongodb.js - Code for selection of database and insertion of documents into collection
* playground-1_output.png - Output for the code in playground-1.mongodb.js
* playground-2.mongodb.js - Code for insertion of documents into collection
* playground-2_output.png - Output for the code in playground-2.mongodb.js
* playground-3.mongodb.js - Code for updating of documents in the database
* playground-3_output.png - Output for the code in playground-3.mongodb.js
* playground-4.mongodb.js - Code for selection of database and insertion of documents into collection
* playground-4_output.png - Output for the code in playground-4.mongodb.js

# Redis
* redis-aof_results.png - Contains the screenshot of Redis's AOF file
* redis-aof_time_taken.png - Contains the screenshot of the time taken for AOF
* redis-database_selection - Command for selection of database to use in Redis
* redis-log_results.png - Contains the screenshot of Redis's log file
* redis-rdb_results.png - Contains the screenshot of Redis's RDB file
* redis-rdb_time_taken.png - Contains the screenshot of the time taken for RDB
