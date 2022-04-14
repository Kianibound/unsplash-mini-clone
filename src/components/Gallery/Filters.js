import React from 'react'
import './filters.css'

const Filters = ({ setOrder, setOrient }) => {
  return (
    <div className='filters'>
      <div className='orderFilters'>
        <label htmlFor='order'>Order By</label>

        <select
          name='order'
          id='order'
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value='relevant'>Relevant</option>
          <option value='Latest'>Latest</option>
        </select>
      </div>
      <div className='oreintaionFilters'>
        <label htmlFor='oreint'>Orientation</label>

        <select
          name='orient'
          id='orient'
          onChange={(e) => setOrient(e.target.value)}
        >
          <option value='landscape'>landscape</option>
          <option value='portrait'>portrait</option>
          <option value='squarish'>squarish</option>
        </select>
      </div>
    </div>
  )
}

export default Filters
