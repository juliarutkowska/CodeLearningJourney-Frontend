import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';

const DataFetcher = () => {
    // Define state to store the response object
    const [responseData, setResponseData] = useState(null);
    // Define state to store loading state
    const [loading, setLoading] = useState(true);
    // Define state to store error message
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to fetch data from the API
        const fetchData = async () => {
            try {
                // Make a GET request to the API endpoint
                const response = await fetch('http://localhost:5081/LearningSources');
                // Check if the response is successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse the response JSON data
                const data = await response.json();
                // Update the state with the fetched data
                setResponseData(data);
            } catch (error) {
                // If an error occurs, set the error state
                setError(error.message);
            } finally {
                // Set loading state to false after fetching data
                setLoading(false);
            }
        };

        // Call the fetchData function when the component mounts
        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    // Render loading indicator if data is being fetched
    if (loading) {
        return <div>Loading...</div>;
    }

    // Render error message if an error occurred
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Render the DataTable component with the fetched data
    return <DataTable data={responseData} />;
};

export default DataFetcher;