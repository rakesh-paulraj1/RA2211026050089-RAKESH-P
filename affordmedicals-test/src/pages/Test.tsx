import React, { useState } from 'react';
import axios from 'axios';


const  Test=()=> {
  const [selectedId, setSelectedId] = useState('e');
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [avg, setAvg] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetch = async () => {
    setLoading(true);
    setError(null);
    try {
const ACCESS_TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNDc3MTYyLCJpYXQiOjE3NDI0NzY4NjIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImUxNDNiYmUyLTMxODEtNDlmOS05NTlhLWU2ZjhjNWJlYWExZCIsInN1YiI6InJwMjkyOUBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoicmVudWdhbWFydCIsImNsaWVudElEIjoiZTE0M2JiZTItMzE4MS00OWY5LTk1OWEtZTZmOGM1YmVhYTFkIiwiY2xpZW50U2VjcmV0Ijoid3VaS2R1Y2FsWUJib0l0dCIsIm93bmVyTmFtZSI6IlJha2VzaCBQIiwib3duZXJFbWFpbCI6InJwMjkyOUBzcm1pc3QuZWR1LmluIiwicm9sbE5vIjoiUkEyMjExMDI2MDUwMDg5In0.uW9lV-lGrXmYgRJjNZzyCNNaaDvn28PBQpmSAOgFedk"
      const response = await axios.get(`http://20.244.56.144/test/${selectedId}`,{headers:{Authorization:`Bearer ${ACCESS_TOKEN}`}});
      const data = response.data;
      console.log(data);
      setWindowPrevState(data.windowPrevState);
      setWindowCurrState(data.windowCurrState);
      setNumbers(data.numbers);
      setAvg(data.avg);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <div>
        <label htmlFor="numberType">Select Number Type:</label>
        <select
          id="numberType"
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          <option value="e">Even</option>
          <option value="p">Prime</option>
          <option value="Y">Fibonacci</option>
          <option value="r">Random</option>
        </select>
        <button onClick={handleFetch} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Numbers'}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      <div>
        <h2>Results</h2>
        <p><strong>Previous Window State:</strong> {windowPrevState.join(', ')}</p>
        <p><strong>Current Window State:</strong> {windowCurrState.join(', ')}</p>
        <p><strong>Numbers:</strong> {numbers.join(', ')}</p>
        <p><strong>Average:</strong> {avg}</p>
      </div>
    </div>
  );
}

export default Test;