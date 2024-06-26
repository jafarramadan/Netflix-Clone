import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './FavList.css'; // Import CSS file

function FavList({ jsonRes }) {
    const [favMovies, setFavMovies] = useState([]);

    useEffect(() => {
        sendReq();
    }, []);

    const sendReq = async () => {
        const apiUrl = process.env.REACT_APP_API_URL;
        const res = await fetch(`${apiUrl}/getMovies`);
        const jsonRes = await res.json();
        setFavMovies(jsonRes);
    };

    const deleteItem = async (id) => {
        const apiUrl = process.env.REACT_APP_API_URL;
        const res = await fetch(`${apiUrl}/deleteMovie/${id}`, { method: "DELETE" });
        if (res.ok) {
            setFavMovies((prevMovies) => prevMovies.filter(movie => movie.id !== id));
        }
    }

    const handleUpdate = async (movieId, updatedComment) => {
        const apiUrl = process.env.REACT_APP_API_URL;
        const updatedMovies = favMovies.map(movie => {
            if (movie.id === movieId) {
                return { ...movie, comment: updatedComment };
            }
            return movie;
        });
        setFavMovies(updatedMovies);

        const serverURL = `${apiUrl}/editMovie/${movieId}`;
        const res = await fetch(serverURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ comment: updatedComment })
        });

        if (!res.ok) {
            // Handle error
        }
    };

    const [editingMovieId, setEditingMovieId] = useState(null);
    const [newComment, setNewComment] = useState("");

    const startEditing = (id, comment) => {
        setEditingMovieId(id);
        setNewComment(comment);
    }

    const cancelEditing = () => {
        setEditingMovieId(null);
        setNewComment("");
    }

    const submitUpdate = async (id) => {
        await handleUpdate(id, newComment);
        setEditingMovieId(null);
        setNewComment("");
    }

    return(
        <>
        <br></br>
        <br></br>
        <br></br>
        <div className="movie-list-container">
            {favMovies.map((movie) => (
                <div key={movie.id}>
                    <Card className="movie-card">
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                        <Card.Body>
                            <Card.Title className="movie-card-title">{movie.original_title || movie.name}</Card.Title>
                            {editingMovieId === movie.id ? (
                                <>
                                    <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
                                    <Button variant="primary" onClick={() => submitUpdate(movie.id)}>Submit</Button>
                                    <Button variant="secondary" onClick={cancelEditing}>Cancel</Button>
                                </>
                            ) : (
                                <>
                                    <Card.Text className="movie-card-text">{movie.comment}</Card.Text>
                                    <div className="movie-card-buttons">
                                        <Button variant="danger" onClick={() => deleteItem(movie.id)}>Delete</Button>
                                        <Button variant="primary" onClick={() => startEditing(movie.id, movie.comment)}>Update</Button>
                                    </div>
                                </>
                            )}
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
        </>
    )
}

export default FavList;
