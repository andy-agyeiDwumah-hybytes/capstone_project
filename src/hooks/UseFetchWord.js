// React
import { useState } from "react";
// API options
import { API_OPTIONS } from "../utils/apiConfig"

// Used to fetch a word from WordsAPI
// returns the data (if any), an error message, and a function to fetch the data
export function useFetchWord() {
  const [wordData, setWordData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null)

  const fetchWord = async (word) => {
    if (!word) return;
    setLoading(true)
    // Create a timeout promise - prevents the app from hanging if data cannot be fetched
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), 10000)
    );

    const URL = `https://wordsapiv1.p.rapidapi.com/words/${word}`;

    try {
      const fetchPromise = fetch(URL, API_OPTIONS).then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      });
      const result = await Promise.race([fetchPromise, timeout]);
      setWordData(() => {
        return [result]
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false)
    }
  };

  return { wordData, error, fetchWord, loading };
}
