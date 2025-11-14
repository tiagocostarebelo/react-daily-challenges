import { useState, useEffect, useDeferredValue } from 'react'
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedVale] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedVale(value)
    }, delay);

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay]);

  return debouncedValue;
}

function App() {
  const [searchedCountry, setSearchedCountry] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedSearchTerm = useDebounce(searchedCountry, 500);

  const handleChange = (e) => {
    setSearchedCountry(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      setCountryData([]);
      setError(null);
      return;
    }

    const fetchCountry = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${debouncedSearchTerm}`);
        if (!response.ok) {
          if (response.status === 404) {
            setCountryData([]);
          }
          throw new Error(`Failed to fetch country: ${response.statusText}`);
        }
        const data = await response.json();
        setCountryData(data);
        console.log("API Call Result: ", data);
      } catch (error) {
        setError(error.message);
        setCountryData([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCountry();
  }, [debouncedSearchTerm])


  return (
    <>
      <header>
        <h1>API Fetch</h1>
      </header>
      <main>
        <form>
          <label htmlFor='countryInput'>Enter the country</label>
          <input
            type="text"
            id="countryInput"
            name="country"
            value={searchedCountry}
            onChange={handleChange}
            placeholder="Search the country"
            required
          />
        </form>

        {loading && <p>Searching for {debouncedSearchTerm}...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {!loading && !error && countryData.length > 0 && (
          <div>
            <h2>Found {countryData.length} matches:</h2>
            {countryData.map((country) => (
              <p key={country.cca2}>{country.name.common}</p>
            ))}
          </div>
        )}

        {!loading && !error && debouncedSearchTerm.trim() !== "" && countryData.length === 0 && (
          <p>No results found for "{debouncedSearchTerm}"</p>
        )}
      </main>
    </>
  )
}

export default App
