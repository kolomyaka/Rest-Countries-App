import Controls from './components/Controls';
import Header from './components/Header';
import Main from './components/Main';
import { useState, useEffect } from 'react'

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
  }, [])

  return (
    <>
      <Header />
      <Main>
        <Controls/>
      </Main>
    </>
  );
}

export default App;
