import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FavList({ jsonRes }){
    const [favMovies, setFavMovies] = useState([]);

    useEffect(() => {
        sendReq();
    }, []);

    const sendReq = async () => {
        const serverURL ="http://localhost:8080/getMovies";
        const res = await fetch(serverURL);
        const jsonRes = await res.json();
        setFavMovies(jsonRes);
    };

    const deleteItem = async (id) => {
        const serverURL = `http://localhost:8080/deleteMovie/${id}`;
        const res = await fetch(serverURL, { method: "DELETE" });
        if (res.ok) {
            setFavMovies((prevMovies) => prevMovies.filter(movie => movie.id !== id));
        }
    }

    const handleUpdate = async (movieId, updatedComment) => {
        const updatedMovies = favMovies.map(movie => {
            if (movie.id === movieId) {
                return { ...movie, comment: updatedComment };
            }
            return movie;
        });
        setFavMovies(updatedMovies);

        const serverURL = `http://localhost:8080/editMovie/${movieId}`;
        const res = await fetch(serverURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ comment: updatedComment })
        });

        if (!res.ok) {
           
            setFavMovies(prevMovies => prevMovies.map(movie => {
                if (movie.id === movieId) {
                    return { ...movie, comment: movie.comment }; 
                }
                return movie;
            }));
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
        <div className="movie-list-container">
            {favMovies.map((movie) => (
                <div key={movie.id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                        <Card.Body>
                            <Card.Title>{movie.original_title || movie.name}</Card.Title>
                            {editingMovieId === movie.id ? (
                                <>
                                    <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
                                    <Button variant="primary" onClick={() => submitUpdate(movie.id)}>Submit</Button>
                                    <Button variant="secondary" onClick={cancelEditing}>Cancel</Button>
                                </>
                            ) : (
                                <>
                                    <Card.Text>{movie.comment}</Card.Text>
                                    <Button variant="danger" onClick={() => deleteItem(movie.id)}>Delete</Button>
                                    <Button variant="primary" onClick={() => startEditing(movie.id, movie.comment)}>Update</Button>
                                </>
                            )}
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default FavList;
