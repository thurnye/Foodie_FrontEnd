import { DateTime } from 'luxon';
import {jwtDecode} from 'jwt-decode';




//convert image to base64
export const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file);
        fileReader.onload = () => { 
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    })
}

// Random Int for Keys
export const getRandomInt = () => {
    return Math.floor(Math.random() * 500000000000);
};


//current user Time Zone
export const getTimeZone = () => new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];

export const formatDateWithTimeZoneRegion = (date, time) => {
    return DateTime.fromJSDate(date).toFormat('EEE, MMM dd, yyyy, hh:mma');
}

export const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    } else {
      return num.toString();
    }
}

// Output example: "Thu, Sep 8, 2023"
export const getDateShort = (dt) => {
    const systemLocale = navigator.language;
    const date = new Date(dt); 

    // Specify the desired locale and options
    const locale = systemLocale; // French (France)
    const options = {
        weekday: 'short', 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric',
    };

    // Format the date as a string with the specified locale and options
    const dateString = date.toLocaleDateString(locale, options);

    return dateString;

}

// Output example: "8:00AM"
export const getLocalTime = (date) => {
  const currentDate = DateTime.now(date);
  // Format the time in 12-hour format with AM/PM
  const formattedTime = currentDate.toLocaleString({
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return formattedTime;
}

//Output => Monday, Tuesday, ..., Sunday
export const getWeekDay = (date) => new Date(date).toLocaleDateString('en-US', { weekday: 'long' });

//Get Weekends date
export const getWeekendDates = ()  => {
    const today = DateTime.now();
    
    // Find the start of the current week (Monday)
  const startOfWeek = today.startOf('week');

  // Calculate the date for the next Saturday (start of the weekend)
  const startOfWeekend = startOfWeek.plus({ days: 4 });

  // Calculate the date for the next Sunday (end of the weekend)
  const endOfWeekend = startOfWeekend.plus({ days: 2 });

  return {
    starts: startOfWeekend.toISODate(),
    ends: endOfWeekend.toISODate()
  };
}

//Get Week date
export const getWeekDates = ()  => {
    const today = DateTime.now();
    
    // Find the start of the current week (Monday)
  const startOfWeek = today.startOf('week');

  // Calculate the date for the next Sunday (end of the weekend)
  const endOfWeekend = startOfWeek.plus({ days: 6 });

  return {
    starts: startOfWeek.toISODate(),
    ends: endOfWeekend.toISODate()
  };
}

// Get Month range
export const getMonthDates = () => {
    const today = DateTime.now();
    
    // Find the start of the current month
    const startOfMonth = today.startOf('month');
  
    // Find the end of the current month
    const endOfMonth = today.endOf('month');
  
    return {
      starts: startOfMonth.toISODate(),
      ends: endOfMonth.toISODate()
    };
  }

//Get Tomorrow
export const getTomorrowDate = () => {
  const today = DateTime.now();
  const tomorrow = today.plus({ days: 1 });

  return {
      starts: tomorrow.toISODate(),
      ends: ''
  };
}

// get the range of dates by their frequency - daily, weekly, monthly
export const getAllDatesInRange = (startDate, endDate, intervalType) => {
  const start = DateTime.fromISO(startDate);
  const end = DateTime.fromISO(endDate) 

  const dates = [];
  let currentDate = start;

  while (currentDate <= end) {
    dates.push(currentDate.toISO());

    // Update currentDate based on the specified interval
    switch (intervalType) {
      case 'daily':
        currentDate = currentDate.plus({ days: 1 });
        break;
      case 'weekly':
        currentDate = currentDate.plus({ weeks: 1 });
        break;
      case 'monthly':
        currentDate = currentDate.plus({ months: 1 });
        break;
      // Add more cases as needed for other intervals
      default:
        throw new Error('Invalid interval type');
    }
  }
  return dates;
};



//JWT Token Decode
export const decodeJWToken =  (token) => {
    return jwtDecode(token)
} 

export const getTotals = (data, field) =>  data.reduce((total, entry) => {
  return total + parseFloat(entry[field], 10);
}, 0);

export const currencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
  