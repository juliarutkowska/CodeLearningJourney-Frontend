const BASE_URL_SOURCE = 'http://localhost:5081/LearningSources';
const BASE_URL_TIME = 'http://localhost:5081/Time';


export const fetchDataSources = async () => {
    const response = await fetch(BASE_URL_SOURCE);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const fetchTimeData = async () => {
    const response = await fetch(BASE_URL_TIME);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const addSource = async (newSource) => {
    const response = await fetch(BASE_URL_SOURCE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Name: newSource.name, DisplayName: newSource.name })
    });
    if (!response.ok) {
        const errorMessage = await response.json();
        console.error('Server response:', errorMessage);
        throw new Error('Failed to add source');
    }
};

export const addTime = async (newTime) => {
    const response = await fetch(BASE_URL_TIME, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTime)
    });
    if (!response.ok) {
        const errorMessage = await response.json();
        console.error('Server response:', errorMessage);
        throw new Error('Failed to add time');
    }
};

export const updateSource = async (sourceId, updatedSource) => {
    const response = await fetch(`${BASE_URL_SOURCE}/${sourceId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedSource)
    });
    if (!response.ok) {
        throw new Error('Failed to update source');
    }
};

export const updateTime = async (timeId, updatedTime) => {
    const response = await fetch(`${BASE_URL_TIME}/${timeId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTime)
    });
    if (!response.ok) {
        throw new Error('Failed to update time');
    }
};

export const deleteSource = async (sourceId) => {
    const response = await fetch(`${BASE_URL_SOURCE}/${sourceId}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete source');
    }
};

export const deleteTime = async (timeId) => {
    const response = await fetch(`${BASE_URL_TIME}/${timeId}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete time');
    }
};
