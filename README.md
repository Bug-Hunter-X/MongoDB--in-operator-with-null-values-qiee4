# MongoDB $in operator with null values

This repository demonstrates an uncommon error related to the MongoDB `$in` operator when used with arrays containing `null` values.  The `$in` operator ignores `null` values, which can lead to unexpected query results.

## Bug Description
The provided JavaScript code showcases incorrect usage of the `$in` operator. It attempts to find documents where the 'field' is equal to 1, 2, or `null`.  However, MongoDB ignores the `null` value in the query, effectively reducing the query to `{$in: [1,2]}`.

## Solution
The solution involves handling `null` values separately. Either filter them out before the query or use a combination of the `$in` and `$or` operators.
