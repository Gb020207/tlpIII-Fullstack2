const API_BASE_URL = 'http://localhost:3000/api';

// GET all fighters
export const getAllFighters = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/peleadores`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data; // Return only the data array
  } catch (error) {
    console.error('Error fetching fighters:', error);
    throw error;
  }
};

// GET fighter by ID
export const getFighterById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/peleadores/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching fighter ${id}:`, error);
    throw error;
  }
};

// CREATE new fighter
export const createFighter = async (fighterData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/peleadores/crear`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fighterData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating fighter:', error);
    throw error;
  }
};

// UPDATE fighter
export const updateFighter = async (id, fighterData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/peleadores/actualizar/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fighterData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error updating fighter ${id}:`, error);
    throw error;
  }
};

// DELETE fighter
export const deleteFighter = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/peleadores/borrar/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error deleting fighter ${id}:`, error);
    throw error;
  }
};
