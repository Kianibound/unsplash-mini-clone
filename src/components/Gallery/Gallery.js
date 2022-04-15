import './gallery.css'
import Filters from './Filters'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ModalComp from './modal/ModalComp'

const Gallery = ({
  imageListSearched,
  setPage,
  page,
  setOrder,
  setOrient,
  setIsLoading,
}) => {
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
            <div className='imageContainer' key={image.id}>
              {imageListSearched.length > 0 && (
                <img
                  key={image?.id}
                  src={image?.urls.small}
                  alt={image?.alt_decription}
                  onLoad={() => setIsLoading(false)}
                />
              )}
              <div className='imageData'>
                <span>
                  <FavoriteIcon className='icon' /> {image.likes}
                </span>
                <span>By: {image.user.name}</span>
                <ModalComp image={image} />
              </div>
            </div>
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
