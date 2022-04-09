import Controls from './components/Controls';
import Header from './components/Header';
import Main from './components/Main';
import { useState, useEffect } from 'react'
import { useGetCountriesQuery } from './redux'
import List from './components/List';
import Card from './components/Card';


function App() {
  
  const [countries, setCountries] = useState([]);
  const {data = []} = useGetCountriesQuery('');  


  return (
    <>
      <Header />
      <Main>
        <Controls/>
        <List>
          { data.map(el => {
            let info = [
              {
                title: 'Population',
                description: el.population.toLocaleString()
              },
              {
                title: "Region",
                description: el.region
              },
              {
                title: 'Capital',
                description: el.capital
              }
            ]
            return (
              <Card key={el.name} img={el.flags.png} name={el.name} info={info} />
            )
          })}
        </List>
      </Main>
    </>
  );
}

export default App;
