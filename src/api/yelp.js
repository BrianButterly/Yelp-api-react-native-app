import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer kOj15kNu1LDC432YkVr4fCDUJo3kDLM_H1hmR3uQ33RMQ2Gcso3Es4iP4GMxz7hYPtfWWbb0b6Xbi5n-GJr5y5jaFo2BrE0fgmVlrb5OakwlmZDX2uUabRQ07r8ZYHYx",
  },
});
