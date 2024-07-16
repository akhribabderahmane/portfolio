import {formatDistanceToNow } from 'date-fns'
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


export { formatDate, redirectToLink,formatSeconds,getLastUpdate };
