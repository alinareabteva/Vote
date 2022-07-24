import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const SuccessModal = ({open, onClose}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={ModalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    You voted!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                   <Button onClick={onClose}>Exit</Button>
                </Typography>
            </Box>
        </Modal>
    );
};

export default SuccessModal;