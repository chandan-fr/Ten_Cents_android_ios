const { airlineIATA } = require("../config/StaticVars");

const getCurrentLocalTime = (inputDate) => {
    const date = new Date(inputDate);
    const offset = 5.5 * 60; // Convert 5.5 hours to minutes

    // Calculate local time using the provided offset (in minutes)
    const localTime = new Date(date.getTime() + offset * 60000);

    // Get the local hours and minutes
    const localHours = localTime.getHours();
    const localMinutes = localTime.getMinutes();

    // Format the local hours and minutes to ensure they are two digits
    const formattedHours = localHours.toString().padStart(2, '0');
    const formattedMinutes = localMinutes.toString().padStart(2, '0');

    // Return the formatted local time as a string
    return `${formattedHours}:${formattedMinutes}`;
};

const formatDuration = (input) => {
    // Regular expression to match hours and minutes
    const regex = /PT(\d+H)?(\d+M)?/;
    if(input){
        const match = input.match(regex);
        
        if (!match) {
            throw new Error("Invalid input format");
        }
        
        // Extract hours and minutes, defaulting to 0 if not present
        let hours = match[1] ? parseInt(match[1].replace('H', '')) : 0;
        let minutes = match[2] ? parseInt(match[2].replace('M', '')) : 0;
        
        // Format hours and minutes with leading zero if needed
        let formattedHours = hours.toString().padStart(2, '0');
        let formattedMinutes = minutes.toString().padStart(2, '0');
        
        return `${formattedHours}h ${formattedMinutes}m`;
    }
};

const getFormatedDate = (inputDate) => {
    // Parse the input date string into a Date object
    const date = new Date(inputDate);

    // Array of month names
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Extract the components of the date
    const year = date.getFullYear();
    const month = date.getMonth(); // Returns 0-11, where 0 is January
    const day = date.getDate();

    // Format the date as "Month dd, yyyy"
    return `${monthNames[month]} ${day}, ${year}`;
};

const calculateStopTime = (segments) => {
    let totalStopTime = 0;

    segments.forEach(segment => {
        if (segment.stops && segment.stops.length > 0) {
            segment.stops.forEach(stop => {
                // Extract duration from ISO 8601 duration format (PT35M)
                let duration = stop.duration.substring(2); // remove 'PT' from start
                let hours = parseInt(duration.match(/(\d+)H/)?.[1]) || 0;
                let minutes = parseInt(duration.match(/(\d+)M/)?.[1]) || 0;
                let stopDurationMinutes = hours * 60 + minutes;

                totalStopTime += stopDurationMinutes;
            });
        }
    });

    if (totalStopTime) {
        return convertMintesToHourDuration(`${totalStopTime}m`);
    } else {
        return `${totalStopTime}m`;
    }
};

const convertMintesToHourDuration = (input) => {
    const regex = /(\d+)m/;
    const match = input?.match(regex);

    if (!match) {
        return "Invalid input format";
    }

    const minutes = parseInt(match[1], 10);

    // Calculate hours and remaining minutes
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    // Format hours and minutes
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = remainingMinutes.toString().padStart(2, '0');

    return `${formattedHours}h ${formattedMinutes}m`;
};

const getAirlinesName = (iata) => {
    const data = airlineIATA?.filter(item => item.carrierCode === iata);
    return data[0];
};

const getCurrentLocalDate = (dateString) => {
    const date = new Date(dateString);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const weekday = weekdays[date.getDay()];

    return `${day} ${month}, ${weekday}`;
};

module.exports = { getCurrentLocalTime, formatDuration, getFormatedDate, calculateStopTime, getAirlinesName, getCurrentLocalDate };
