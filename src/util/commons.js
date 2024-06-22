import { DateTime } from 'luxon';
import {jwtDecode} from 'jwt-decode';

const currentDate = new Date();


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


// Wed, Mar 27, 2024, 9:30 AM EDT
export const getLocalDateString = (dateString) => {
  const date = new Date(dateString);
  
  const options = { 
    weekday: 'short', // abbreviated day of the week (e.g., 'Wed')
    day: '2-digit', // two-digit day (e.g., '27')
    month: 'short', // abbreviated month name (e.g., 'Mar')
    year: 'numeric', // full numeric year (e.g., '2024')
    hour: 'numeric', // numeric hour (e.g., '9')
    minute: '2-digit', // two-digit minute (e.g., '30')
    hour12: true // 12-hour clock format (e.g., 'AM' or 'PM')
  };
  
  const formattedDate = date.toLocaleString('en-US', options);
  console.log(formattedDate);
  return formattedDate;
}

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
// Output example: "Thu, Sep 8, 2023"
export const getDateShortWithoutWeek = (dt) => {
    const systemLocale = navigator.language;
    const date = new Date(dt); 

    // Specify the desired locale and options
    const locale = systemLocale; // French (France)
    const options = {
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
  const currentDate = new Date(date);
  console.log('currentDate::', currentDate);
  // Format the time in 12-hour format with AM/PM
  const formattedTime = currentDate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  console.log('formattedTime', formattedTime)
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
  if (start.equals(end)) {
    dates.push(start.toISODate());
  }

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
  const num = entry[field] ? entry[field] : 0
  return total + parseFloat(num, 10);
}, 0);

export const currencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
  

export const backDatedDate = (date, num, period) => {
  // Get the current date and time
  console.log("backDate", date)
  const currentDate = DateTime.fromJSDate(date);

  switch (period.toLowerCase()) {
    case 'day(s)':
      return currentDate.minus({ days: num }).toJSDate();
    case 'hour(s)':
      return currentDate.minus({ hours: num }).toJSDate();
    case 'minute(s)':
      return currentDate.minus({ minutes: num }).toJSDate();
    default:
      return '';
  }
};

export const mergeTimeToDate = (dateStamp, timeStamp) => {
  const date = DateTime.fromJSDate(dateStamp);
  const time = DateTime.fromJSDate(timeStamp);
// Extract the time components from the time DateTime object
  const { hour, minute, second, millisecond } = time;

// Merge the time components into the date DateTime object
  const mergedDateTime = date.set({ hour, minute, second, millisecond });
  return mergedDateTime.toISO();
}


export const averageDurationOfEvent = (eventSchedule) => {
  // Function to calculate the duration between two dates in minutes
const getDurationInMinutes = (start, end) => {
  const diffInMs = new Date(end).getTime() - new Date(start).getTime();
  return diffInMs / (1000 * 60); // Convert milliseconds to minutes
};

// Calculate total duration of all events in minutes
const totalDurationInMinutes = eventSchedule.reduce((total, event) => {
  const duration = getDurationInMinutes(event.start, event.end);
  return total + duration;
}, 0);

// Calculate average duration
const averageDurationInMinutes = totalDurationInMinutes / eventSchedule.length;

// Convert average duration from minutes to hours and minutes
const hours = Math.floor(averageDurationInMinutes / 60);
const minutes = Math.round(averageDurationInMinutes % 60);

console.log(`Average duration of events: ${hours} hrs ${minutes} mins`);
return `${hours} hr(s) ${minutes} min(s)`
}

//filter and sort schedule to remove past dates

export const filterSortSchedule = (schedule) => {
  if(schedule.length > 0){

    // Filter and sort the schedule
    const filteredSchedule = schedule.filter(item => new Date(item.end) > currentDate);
    const sortedSchedule = filteredSchedule.sort((a, b) => new Date(a.start) - new Date(b.start));

    console.log('date',getDateShort(new Date(sortedSchedule[0]?.start)), 'Time', getLocalTime(new Date(sortedSchedule[0]?.start)))
    // Log the sorted schedule
    return sortedSchedule;
  }
}

export const findMinimumPriceOrFreeTicket = (sections) => {
  let minimumPrice = Infinity; // Initialize minimumPrice to positive infinity
  let hasFreeTicket = false; // Initialize hasFreeTicket to false

  sections.forEach((section) => {
    section.ticketTypes?.forEach((ticket) => {
      // Convert price to a number
      const price = parseFloat(ticket.price);

      if (ticket.type.toLowerCase() === 'free') {
        // If the price is 0, set hasFreeTicket to true
        hasFreeTicket = true;
      } else if (price < minimumPrice) {
        // If the price is less than the current minimumPrice, update minimumPrice
        minimumPrice = price;
      }
    });
  });

  if (hasFreeTicket) {
    // If there is a free ticket, return true
    return 'Free';
  } else {
    console.log("minimumPrice::", minimumPrice)
    // If there is no free ticket, return the smallest ticket price
    return `from ${currencyFormat.format(minimumPrice)}`;
  }
};


// truncate by words
export const truncateTextLong = (text, wordLimit) => {
  console.log(text)
  if(!text){
    return ''
  }

  // const words = text.split(' ');
  // if (words.length > wordLimit) {
  //   return words.slice(0, wordLimit).join(' ') + '...';
  // }
  return text;
}

