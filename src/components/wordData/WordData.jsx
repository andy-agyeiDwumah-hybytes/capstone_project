export default function WordData({ word, styles, results, generateKey }) {
  return (
    <>
      <div>
        <p className={[styles.capitaliseText, styles.searchWord].join(" ")}>
          {word}
          &nbsp;
        </p>
      </div>
      <div>
        <h3 className={styles.heading}>Definition</h3>
        {results ? (
          // Use of ordered list here is important to reference later sections
          <ol className={styles.list}>
            {results.map(result => {
              const definition = result?.["definition"];
              const partOfSpeech = result?.["partOfSpeech"]
                ? `(${result["partOfSpeech"]})`
                : "";
              return (
                <li key={generateKey()} className={styles.capitaliseText}>
                  {definition}{" "}
                  <span>
                    <em>{partOfSpeech}</em>
                  </span>
                </li>
              );
            })}
          </ol>
        ) : (
          <p>No definitions available</p>
        )}
      </div>
      <div>
        <h3 className={styles.heading}>Synonyms</h3>
        {results ? (
          results.map((result, outerIdx) => {
            const synonyms = result?.synonyms ? result.synonyms : "";
            // Check if there are synonyms
            return synonyms.length > 0 ? (
              <div key={generateKey()}>
                <p>Definition {outerIdx + 1}</p>
                <ul className={styles.list}>
                  {synonyms.map(synonym => (
                    <li
                      key={generateKey()}
                      className={styles.capitaliseText}
                    >
                      {synonym}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              // Reference associated definition
              <p key={generateKey()}>No synonyms available for definition {outerIdx + 1}</p>
            );
          })
        ) : (
          <p>No synonyms available</p>
        )}
      </div>
      <div>
        <h3 className={styles.heading}>Examples</h3>
        {results ? (
          results.map((result, outerIdx) => {
            const examples = result?.examples ? result.examples : "";
            return examples.length > 0 ? (
              <div key={generateKey()}>
                <p>Definition {outerIdx + 1}</p>
                <ul className={styles.list}>
                  {examples.map(example => (
                    <li
                      key={generateKey()}
                      className={styles.capitaliseText}
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p key={generateKey()}>No examples available for definition {outerIdx + 1}</p>
            );
          })
        ) : (
          <p>No examples available</p>
        )}
      </div>
    </>
  );
}
