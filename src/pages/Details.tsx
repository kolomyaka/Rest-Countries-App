import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

export const Details = (props: Props) => {

    let { name } = useParams(); 

  return (
    <div>Details {name} </div>
  )
}
