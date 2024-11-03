function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [retries, setRetries] = useState(0);

  useEffect(() => {
    if (retries < 3) {
      // Limit the number of retries to 3
      fetch(
        "https://api-regional.codesignalcontent.com/posting-application-2/posts/"
      )
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => setData(data))
        .catch((error) => {
          setError(error);
          setRetries(retries + 1); // Increment the number of retries if an error occurs
        });
    }
  }, [retries]); // Rerun the effect if retries number changed

  // return JSX similar to the previous block
}
