import React from 'react'
import { useState, useEffect } from 'react';
import { Search } from './Search'
import { CustomSelect } from './CustomSelect';

type Props = {}

const Controls = (props: Props) => {

    const [ search, setSearch ] = useState('');

  return (
    <div>
        <Search search={search} setSearch={setSearch} />
    </div>
  )
}

export default Controls