import {formatDistanceToNow,format } from 'date-fns'
const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
const redirectToLink = (link) => {
  if (link.startsWith("mailto:")) {
    window.location.href = link;
  } else {
    window.open(link, "_blank");
  }
};
const formatSeconds = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours} hrs ${minutes} mins`;
};

const getLastUpdate = (modifiedAt) => {
  const lastUpdate = new Date(modifiedAt);
  return `Last update: ${formatDistanceToNow(lastUpdate, { addSuffix: true })}`;
};

/**
 * Formats a Firestore timestamp to "DD/MM/YYYY, HH:mm".
 * @param {object} timestamp - The Firestore timestamp object.
 * @returns {string} The formatted date string.
 */
const formatTimestamp = (timestamp) => {
  if (!timestamp) return "Invalid timestamp";

  let date;

  // Check if timestamp is already a JavaScript Date object
  if (timestamp instanceof Date) {
    date = timestamp;
  } else if (timestamp.seconds) {
    // Handle Firestore Timestamp (object with seconds property)
    date = new Date(timestamp.seconds * 1000);
  } else {
    // Attempt to parse timestamp as a date
    date = new Date(timestamp);
  }

  // Check if date is valid
  if (isNaN(date.getTime())) return "Invalid timestamp";

  return format(date, "dd/MM/yyyy, HH:mm");
};



export { formatDate, redirectToLink,formatSeconds,getLastUpdate,formatTimestamp };
