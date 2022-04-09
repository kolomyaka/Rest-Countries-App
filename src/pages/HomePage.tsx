import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Controls from '../components/Controls';
import List from '../components/List';
import { useGetCountriesQuery } from '../redux';




type Props = {}

export const HomePage = (props: Props) => {


  const [countries, setCountries] = useState([]);
  const {data = []} = useGetCountriesQuery('');  
    let navigate = useNavigate();
  const onClick = (name: string) => {
  }

  return (
    <>
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
              <Card key={el.name} 
              img={el.flags.png} 
              name={el.name} 
              info={info} 
              onClick={() => navigate(`/country/${el.name}`)}
              />
            )
          })}
        </List>
    </>
  )
}