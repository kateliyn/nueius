function timeAgo(date) {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  
  if (minutes === 1) {
    return "1 minute ago";
  } else if (minutes < 60) {
    return minutes + " minutes ago";
  }
  // Add more conditions for hours, days, etc.
}

// Usage
const oneMinuteAgo = new Date(new Date().getTime() - 60000);
console.log(timeAgo(oneMinuteAgo)); // Output: "1 minute ago"
