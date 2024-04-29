import React, { useState } from 'react';

function DeleteEnglishMovie() {
    const [movieId, setMovieId] = useState('');

    const handleChange = (event) => {
        setMovieId(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = `http://127.0.0.1:8081/deleteEnglish/${movieId}`;
    
        try {
            const response = await fetch(url, {
                method: 'DELETE', // Change to DELETE method for deletion
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                const errorText = await response.text();  // Get text from the response body which might include error messages
                throw new Error(`Failed to delete Telugu movie: ${errorText}`);
            }
    
            const result = await response.json();
            console.log('Success:', result);
            alert('Movie deleted successfully!');
    
            // Optionally clear the movie ID input
            setMovieId('');
        } catch (error) {
            console.error('Error:', error);
            alert(`Error deleting movie: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
                <input type="text" value={movieId} onChange={handleChange} placeholder='Enter Movie ID' required /><br /><br />
            <button type="submit">Delete English Movie</button>
        </form>
    );
}

export default DeleteEnglishMovie;
