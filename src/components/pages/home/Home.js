import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SearchBar from '../../searchBar/SearchBar'
import Gallery from '../../Gallery/Gallery'
import './home.css'
import Skeleton from '../../skeleton/Skeleton'

const Home = () => {
  const [imageListSearched, setimageListSearched] = useState([])
  const [searchValue, setSearchValue] = useState('apple')
  const [page, setPage] = useState(1)
  const [order, setOrder] = useState('relevant')
  const [orient, setOrient] = useState('landscape')
  const [isLoading, setIsLoading] = useState(true)

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const fetchImageSearchList = async () => {
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=SWJVkNeIcpMT8cOA8FEggv1GkY8HdpUgWeEn2uPb4Ms&page=${page}&query=${searchValue}&order_by=${order}&orientation=${orient}`
      )

      setimageListSearched(data.results)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.scroll(0, 0)
    setTimeout(() => {
      fetchImageSearchList(searchValue)
    }, 3000)
  }, [searchValue, page, order, orient, isLoading])

  console.log(imageListSearched)

  return (
    <div className='home'>
      {' '}
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setPage={setPage}
      />
      {isLoading ? (
        <div className='skeletonWrapper'>
          {array.map((item) => (
            <Skeleton />
          ))}
        </div>
      ) : (
        <Gallery
          imageListSearched={imageListSearched}
          setPage={setPage}
          page={page}
          setOrder={setOrder}
          setOrient={setOrient}
          setIsLoading={setIsLoading}
        />
      )}
    </div>
  )
}

export default Home
