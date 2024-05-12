-- This query helped us understand which methods are most efficient under different conditions.
SELECT method, AVG(execution_time) AS average_time
FROM fibonacci_computations
GROUP BY method
ORDER BY average_time;