import './App.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SearchBar from './components/searchBar/SearchBar'
import Gallery from './components/Gallery/Gallery'

function App() {
  const [imageListSearched, setimageListSearched] = useState([])
  const [searchValue, setSearchValue] = useState('apple')
  const [page, setPage] = useState(1)
  const [order, setOrder] = useState('relevant')
  const [orient, setOrient] = useState('landscape')

  const fetchImageSearchList = async () => {
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=SWJVkNeIcpMT8cOA8FEggv1GkY8HdpUgWeEn2uPb4Ms&page=${page}&query=${searchValue}&order_by=${order}&orientation=${orient}`
      )

      setimageListSearched(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.scroll(0, 0)
    fetchImageSearchList(searchValue)
  }, [searchValue, page, order, orient])

  return (
    <main className='app'>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setPage={setPage}
      />
      <Gallery
        imageListSearched={imageListSearched}
        setPage={setPage}
        page={page}
        setOrder={setOrder}
        setOrient={setOrient}
      />
    </main>
  )
}

export default App
