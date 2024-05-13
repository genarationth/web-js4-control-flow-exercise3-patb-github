const dayNumber = parseInt(process.argv[2]);

if (isNaN(dayNumber)) console.log("Input must be a number");
else if (dayNumber < 0 || dayNumber > 6) console.log("Invalid day number");
else if (dayNumber > 0 && dayNumber < 6) console.log("weekday");
else console.log("weekend");
