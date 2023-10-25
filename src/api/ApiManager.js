import axios from "axios";

export const fetchReclamData = async () => {
  try {
    const response = await apiService.get("http://127.0.0.1:3000"); // Remplacez par l'URL de votre endpoint
    return response.data; // Les données sont extraites de l'API
  } catch (error) {
    throw error;
  }
};
