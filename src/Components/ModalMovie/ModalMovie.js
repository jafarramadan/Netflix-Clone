import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './ModalMovie.css'

function ModalMovie({ openModal, closeModal, selectMovie, comment, setComment }) {
    const handleSaveToFavorites = async () => {
        
            await axios.post('http://localhost:8080/addMovie', {
                original_title: selectMovie.title,
                release_date: selectMovie.release_date,
                poster_path: selectMovie.image,
                overview: selectMovie.overview,
                comment: comment
            });
            closeModal();
         
    };
    return (
        <Modal show={openModal} onHide={closeModal}>
           
            <Modal.Body>
                <h5>{selectMovie && selectMovie.title}</h5>
                {selectMovie && <img src={`https://image.tmdb.org/t/p/w500${selectMovie.image}`} alt={selectMovie.title} style={{ maxWidth: '100%' }} />}
                <textarea
                    className="form-control mt-3"
                    rows="3"
                    placeholder="Add your comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>Close</Button>
                <Button variant="primary" onClick={handleSaveToFavorites}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalMovie;

