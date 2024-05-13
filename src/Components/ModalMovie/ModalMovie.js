import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './ModalMovie.css'; // Assuming you have additional CSS for this component

function ModalMovie({ openModal, closeModal, selectMovie, comment, setComment }) {
    const handleSaveToFavorites = async () => {
        const apiUrl = process.env.REACT_APP_API_URL;
        await axios.post(`${apiUrl}/addMovie`, {
            original_title: selectMovie.title,
            release_date: selectMovie.release_date,
            poster_path: selectMovie.image,
            overview: selectMovie.overview,
            comment: comment
        });
        closeModal();
    };

    return (
        <Modal show={openModal} onHide={closeModal} backdrop="static" centered>
            <Modal.Body style={{ backgroundColor: '#1a1a1a', color: '#fff' }}>
                <h5>{selectMovie && selectMovie.title}</h5>
                {selectMovie && <img src={`https://image.tmdb.org/t/p/w500${selectMovie.image}`} alt={selectMovie.title} style={{ maxWidth: '100%' }} />}
                <textarea
                    className="form-control mt-3"
                    rows="3"
                    placeholder="Add your comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#fff', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.3)' }}
                ></textarea>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: '#1a1a1a', borderTop: 'none', padding: '10px 20px' }}>
                <Button variant="secondary" onClick={closeModal}>Close</Button>
                <Button variant="primary" onClick={handleSaveToFavorites}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalMovie;
