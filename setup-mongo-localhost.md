# Setup MongoDB to Localhost
#### Compass: 
MongoDB Compass is used for userInterface(UI) to view the database with all tables.
* MongoDB has auto ID for every data in a table.

__1st Step:__ Download MongoDB community server or Enterprise Server as per requirements.

__2nd Step:__ In Windows Install the downloaded server.

__3rd Step:__ To check the MongoDb configuration type __mongod__ in cmd.

__4th Step:__ To continue use MongoDB using CMD than just type __mongo__ command in cmd.

## Now using MongoDB with CMD

### Show all the database using CMD
```cmd

// 1st start the MongoDB server
$ mongo

// than use the command to show the database
$ show dbs

```
### Select the database using CMD
```cmd

// Select database command
$ use database_name

```
### Show the database tables or you can say database collections
```cmd

// Show database connection command
$ show collections

```
