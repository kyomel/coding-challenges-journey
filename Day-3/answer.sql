--Data Export and Querying: We translated the in-memory structure of our hash table into a relational database format, followed by extensive query.
INSERT INTO HashTableEntries(key, value) VALUES (?, ?);

-- Basic SQL Queries: Retrieve an Entry: To fetch values similar to the hash table's search operation.
SELECT value FROM HashTableEntries WHERE key = 'exampleKey';

-- Aggregate Functions: Demonstrates operations beyond basic CRUD, such as counting distinct values.
SELECT COUNT(DISTINCT value) FROM HashTableEntries;

-- Performance Optimization: Adding an index to improve search operations.
CREATE INDEX idx_key ON HashTableEntries(key);