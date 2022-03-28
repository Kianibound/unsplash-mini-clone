import './gallery.css'
import Filters from './Filters'

const Gallery = ({ imageListSearched, setPage, page, setOrder, setOrient }) => {
  const handleNext = () => {
    setPage(page + 1)
  }

  const handlePrev = () => {
    setPage(page - 1)
  }
  return (
    <>
      <Filters setOrder={setOrder} setOrient={setOrient} />
      {imageListSearched && (
        <div className='gallery'>
          {imageListSearched.map((image) => (
            <img
              key={image.id}
              src={image.urls.regular}
              alt={image.alt_decription}
            />
          ))}
        </div>
      )}

      <div className='pagebtns'>
        <button
          onClick={handlePrev}
          className='btn prev'
          style={{ opacity: `${page === 1 ? '.2' : ''}` }}
        >
          Prev
        </button>
        <button onClick={handleNext} className='btn next'>
          Next
        </button>
      </div>
    </>
  )
}

export default Gallery
