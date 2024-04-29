import React, { useState } from 'react';

function UpdateHindiMovie() {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        year: '',
        url: '',
        plot: '',
        price: '',
        cast: '',
        director: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = `http://127.0.0.1:8081/updateHindi/${formData.id}`;
    
        try {
            const response = await fetch(url, {
                method: 'PUT', // Method is correct for an update
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                const errorText = await response.text();  // Get text from the response body which might include error messages
                throw new Error(`Failed to update Hindi movie: ${errorText}`);
            }
    
            const result = await response.json();
            console.log('Success:', result);
            alert('Movie updated successfully!');
    
            // Optionally reset form or navigate away
            setFormData({
                id: '',
                title: '',
                year: '',
                url: '',
                plot: '',
                price: '',
                cast: '',
                director: ''
            });
        } catch (error) {
            console.error('Error:', error);
            alert(`Error updating movie: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="id" value={formData.id} onChange={handleChange} placeholder='ID' required /> <br /><br />
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder='Movie Name' required /><br /><br />
            <input type="text" name="year" value={formData.year} onChange={handleChange} placeholder='Release Year' required /><br /><br />
            <input type="text" name="url" value={formData.url} onChange={handleChange} placeholder='Image URL' required /><br /><br />
            <textarea name="plot" value={formData.plot} onChange={handleChange} placeholder='Movie Plot' required /><br /><br />
            <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder='Price' required /><br /><br />
            <input type="text" name="cast" value={formData.cast} onChange={handleChange} placeholder='Cast' required /><br /><br />
            <input type="text" name="director" value={formData.director} onChange={handleChange} placeholder='Director' required /><br /><br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UpdateHindiMovie;
