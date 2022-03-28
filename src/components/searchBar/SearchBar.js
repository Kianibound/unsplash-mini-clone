import './searchbar.css'
import react, { useState } from 'react'

const SearchBar = ({ setSearchValue, setPage }) => {
  const [inputValue, setInputValue] = useState('')

  const handleClick = () => {
    setSearchValue(inputValue)
    setInputValue('')
    setPage(1)
  }
  return (
    <>
      <div className='searchArea'>
        <input
          type='text'
          placeholder='Search an image...'
          className='searchInput'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleClick} className='searchBtn'>
          search
        </button>
      </div>
    </>
  )
}

export default SearchBar
