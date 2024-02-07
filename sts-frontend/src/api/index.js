const baseURL = '/api'; // Adjust this to the actual base URL of your Directus instance

// Helper function to make fetch requests
async function fetchDirectus(endpoint) {
    const response = await fetch(`${baseURL}${endpoint}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Include Authorization header if needed, like:
            // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        },
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

// Fetch projects
async function getProjects() {
    return await fetchDirectus('/items/projects');
}

// Fetch project files
async function getProjectFiles() {
    return await fetchDirectus('/items/projects_files');
}

// Fetch service types
async function getServiceTypes() {
    return await fetchDirectus('/items/service_types');
}

// Fetch files
async function getFiles() {
    return await fetchDirectus('/files');
}

// Assuming 'directus_files_id' is not a standard Directus collection, 
// this might require custom implementation or correction.
// This example is based on fetching file IDs specifically, but you may need to adjust.

export { getProjects, getFiles, getServiceTypes,  getProjectFiles };
