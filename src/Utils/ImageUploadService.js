import axios from 'axios';

/**
 * Servicio para manejar la carga de imágenes al servidor
 */

const API_URL = 'http://localhost:3000/api';

/**
 * Sube una imagen al servidor
 * @param {File|Blob|string} imageData - La imagen a subir (puede ser un archivo, blob o base64)
 * @returns {Promise<string>} URL de la imagen guardada
 */
export const uploadImage = async (imageData) => {
  try {
    // Si la imagen es base64, convertirla a Blob
    let imageBlob = imageData;
    if (typeof imageData === 'string' && imageData.startsWith('data:')) {
      const response = await fetch(imageData);
      imageBlob = await response.blob();
    }

    // Crear FormData para enviar la imagen
    const formData = new FormData();
    formData.append('image', imageBlob);

    // Enviar la imagen al servidor
    const response = await axios.post(`${API_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Retornar la URL de la imagen guardada
    return response.data.imageUrl;
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    throw error;
  }
};