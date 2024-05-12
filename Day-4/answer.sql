-- Query to analyze historical weather patterns
SELECT location, AVG(temperature) as AvgTemp, MAX(temperature) as MaxTemp, MIN(temperature) as MinTemp
FROM weather_history
GROUP BY location
ORDER BY AvgTemp DESC;

-- Query for unusual weather trends
SELECT date, temperature
FROM weather_history
WHERE location = 'New York' AND temperature > (SELECT AVG(temperature) + 10 FROM weather_history WHERE location = 'New York');

CREATE TRIGGER WeatherAlert
AFTER INSERT ON weather_history
WHEN NEW.temperature >= 35 OR NEW.temperature <= -10
BEGIN
    INSERT INTO alerts (alert_date, message) VALUES (CURRENT_DATE, 'Extreme temperature warning!');
END;