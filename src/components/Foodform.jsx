import React, { useState } from 'react';
import axios from 'axios';

const FoodForm = () => {
    const [data, setData] = useState({
        productName: "",
        weight: '',
        energy: '',
        protine: '',
        carbohydrate: '',
        fat: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://service.apikeeda.com/api/v1/nutri-food', data, {
                headers: {
                    'x-apikeeda-key': 'e1724158111824dcr980592169wf'
                }
            });
            console.log('Food item add:', response.data);
        } catch (error) {
            console.error('Error add food item:', error);
        }
    };

    return (
        <>
            <h1>Food Form</h1>
            <form id="foodForm" onSubmit={handleSubmit}>
                <label htmlFor="productName">Food Name:</label><br />
                <input type="text" id="productName" name="productName" value={data.productName} onChange={handleChange} required /><br /><br />

                <label htmlFor="weight">Weight:</label><br />
                <input type="number" id="weight" name="weight" value={data.weight} onChange={handleChange} required /><br /><br />

                <label htmlFor="energy">Energy:</label><br />
                <input type="number" id="energy" name="energy" value={data.energy} onChange={handleChange} required /><br /><br />

                <label htmlFor="protein">Protein:</label><br />
                <input type="number" id="protein" name="protine" value={data.protine} onChange={handleChange} required /><br /><br />

                <label htmlFor="carbohydrate">Carbohydrates:</label><br />
                <input type="number" id="carbohydrate" name="carbohydrate" value={data.carbohydrate} onChange={handleChange} required /><br /><br />

                <label htmlFor="fat">Fat:</label><br />
                <input type="number" id="fat" name="fat" value={data.fat} onChange={handleChange} required /><br /><br />

                <button type="submit">Add/Update Food Item</button>
            </form>
        </>
    );
}

export default FoodForm;
