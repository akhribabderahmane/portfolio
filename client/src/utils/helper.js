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

export { formatDate, redirectToLink };
