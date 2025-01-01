```javascript
// Solution 1: Filter out null values before the query
const values = [1, 2, null].filter(value => value !== null);
db.collection('myCollection').find({field: {$in: values}});

// Solution 2: Use $or operator to handle null separately
db.collection('myCollection').find({$or: [{field: {$in: [1, 2]}}, {field: null}]});
```