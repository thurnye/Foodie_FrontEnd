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

export const formatDateWithTimeZoneRegion = (date) => {
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


//JWT Token Decode
export const decodeJWToken = async (token) => {
    console.log(jwtDecode(token))
    return  await jwtDecode(token)
} 
  