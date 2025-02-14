// React
import { useId, useState } from "react"
import { v4 as uuidv4 } from "uuid"
// Styles
import styles from "./SearchWord.module.css"
// Custom hook
import {useFetchWord } from "../../hooks/UseFetchWord"
// Components
import WordData from "../../components/wordData/WordData"

export default function SearchWord() {
  const [searchWord, setSearchWord] = useState("")
  const wordDataId = useId()

  // Custom hook - see hooks directory
  const { wordData, error, fetchWord, loading } = useFetchWord()

  const handleSubmit = async e => {
    e.preventDefault()
    fetchWord(searchWord)
    // Clear input
    setSearchWord("")
  }

  const generateKey = () => {
    return uuidv4()
  }

  return (
    <>
      <>
        <title>Search | VocabVault</title>
      </>
      <section
        className="section"
        aria-labelledby="search-word-heading"
      >
        <div className={[styles.searchh2Wrapper, "h2Wrapper"].join(" ")}>
          <h2 id="search-word-heading">Search</h2>
        </div>
        <div className="setPaddingInline">
          <search className={styles.search}>
            <form
              onSubmit={handleSubmit}
              className={styles.form}
              aria-label="Search word"
            >
              <input
                type="search"
                inputMode="search"
                id="search"
                name="q"
                className={styles.searchInput}
                placeholder="Search a word..."
                aria-label="Search a word"
                value={searchWord}
                onChange={e => setSearchWord(e.target.value)}
              />
              {/* Note: Add search icon */}
            </form>
          </search>
          <div
            aria-live="polite"
            aria-atomic="true"
            className={
              error || loading
                ? styles.errorLoadingContainer
                : styles.resultsContainer
            }
          >
            {/* Show loading text when data is being fetched */}
            {loading ? (
              <div>
                <p className={styles.loadingErrorText}>Loading ...</p>
              </div>
            ) : // Show error if data cannot be fetched
            error ? (
              <div>
                <p className={styles.loadingErrorText}>
                  {error.message}. Please try again.
                </p>
              </div>
            ) : (
              // Show content only if fetch was successful
              wordData?.map(wordResults => {
                const word = wordResults?.["word"]
                  ? wordResults["word"]
                  : "N/A";
                const results = wordResults?.results
                  ? wordResults.results
                  : null;
                return (
                  <WordData
                    key={wordDataId}
                    word={word}
                    styles={styles}
                    results={results}
                    generateKey={generateKey}
                  />
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}
