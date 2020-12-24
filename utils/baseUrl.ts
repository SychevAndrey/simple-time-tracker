const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://simple-time-tracker.vercel.app/"
    : "http://localhost:3000";

export default baseUrl;