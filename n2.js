
// getCurrentDateTime.js
const currentDate = new Date();

console.log(`Current Date and Time: ${currentDate}`);
// getCurrentDateTimeFormatted.js


const formattedDateTime = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;

console.log(`Formatted Date and Time: ${formattedDateTime}`);
