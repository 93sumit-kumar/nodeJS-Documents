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

### Get some column value from table using aggregation projection using CMD

__Note:__ `column_field: 1` means to display the field data. `column_field: 0` means to not display the field data. __You can not use `1` & `0` in same query only _id can define 0__
```cmd

//Using aggreration
$ db.inventory.aggregate( [ { $project: { "item": 1, "qty": 1, "amount": 1 } } ] ).pretty()

```
### Get some column value from table using aggregation without projection using CMD
```cmd

// display = 1, Not display = 0
$ db.inventory.find({}, { "item": 1, "qty": 1, "amount": 1 }).pretty()

```
### Lookup(JOIN) in MongoDB using CMD
```cmd

// lookup means JOIN
$ db.inventory.aggregate([
  { $match: { "item":"computer" } },
  { $lookup: { from: "orders", localField: "item", foreginField: "item",as: "order_details" } }
]).pretty()

```
* __Note:__ localField means comman field which is available in both table and forgineField means what what data you want to get.
