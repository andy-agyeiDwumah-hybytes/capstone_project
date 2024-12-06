// API options for WordsAPI
export const API_OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_WORDS_API_KEY,
    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
  },
};
