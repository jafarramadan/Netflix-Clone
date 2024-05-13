import React, { useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';

import ModalMovie from '../ModalMovie/ModalMovie';
import './Movie.css'; 

function Movie(props) {
    const [showFullOverview, setShowFullOverview] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectMovie, setSelectMovie] = useState(null);
    const [comment, setComment] = useState("");

    const toggleOverview = () => {
        setShowFullOverview(!showFullOverview);
    };

    const openModal = (movie) => {
        setShowModal(true);
        setSelectMovie(movie);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectMovie(null);
        setComment("");
    };

    const truncatedOverview = () => {
        const words = props.overview.split(' ');
        return words.slice(0, 10).join(' ');
    };

    return (
        <Col>
            <Card className="movie-card">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.image}`} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    {showFullOverview ? (
                        <Card.Text>{props.overview}</Card.Text>
                    ) : (
                        <Card.Text>{truncatedOverview()}...</Card.Text>
                    )}
                    <Button variant="link" onClick={toggleOverview}>
                        {showFullOverview ? 'See Less' : 'See More'}
                    </Button>
                    <br/>
                    <Button
                        variant="link"
                        className="like-button"
                        onClick={() => openModal(props)}
                    >
                        ❤️
                    </Button>
                </Card.Body>
            </Card>

            <ModalMovie
                openModal={showModal}
                closeModal={closeModal}
                selectMovie={selectMovie}
                comment={comment}
                setComment={setComment}
            />
        </Col>
    );
}

export default Movie;
