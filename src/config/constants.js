export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://grab-market-server-0301010.herokuapp.com"
    : "http://localhost:8080";
