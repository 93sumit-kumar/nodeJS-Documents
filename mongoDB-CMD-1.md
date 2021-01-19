# MongoDB with CMD command

## Aggregate in MongoDB using CMD

First create a new table `orders` under `inventory` table.
```cmd

//List all the DBs
$ show dbs

// Use inventory database table
$ use inventory

// Create orders table and insert many data
$ db.orders.insertMany([
  { "cust_id": 1, "qty": 2, "amount": 200 },
  { "cust_id": 2, "qty": 2, "amount": 300 },
  { "cust_id": 3, "qty": 2, "amount": 400 },
  { "cust_id": 2, "qty": 2, "amount": 400 },
  { "cust_id": 1, "qty": 2, "amount": 200 }
])

```
To show the data of `orders` table
```cmd
// display all the data
$ db.orders.find()

```
### Now create own aggregate function 
```cmd

$ db.orders.aggregate([
  { $match: { "cust_id":1 } }, // where condition
  { $group: { '_id': "$cust_id", total: { $sum: "amount" } } } // Group by total amount and _id is custom name you can change according to your req.
])

```



