import React, { useState } from 'react'
import './modal.css'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import Modal from '@mui/material/Modal'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
}

const ModalComp = ({ image }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className='modal'>
      <Button onClick={handleOpen} variant='contained' color='success'>
        Download
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='modalContainer'>
            <img src={image.urls.small} alt={image.alt_decription} />
            <div className='downloadBtns'>
              <DownloadForOfflineIcon className='DLicon' fontSize='large' />
              <div className='downloadLink full'>
                <a href={image.urls.full} download target='_blank'>
                  Full
                </a>
              </div>
              <div className='downloadLink'>
                <a href={image.urls.regular} download target='_blank'>
                  Regular
                </a>
              </div>
              <div className='downloadLink raw'>
                <a href={`${image.urls.raw}`} download target='_blank'>
                  Raw
                </a>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalComp
