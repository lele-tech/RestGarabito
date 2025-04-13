import { uploadImage } from './ImageUploadService';

/**
 * Servicio para manejar el almacenamiento de imágenes
 * Guarda las imágenes en la carpeta /public/imgs usando el servidor
 */

// Clave para almacenar la referencia de la imagen del home en localStorage
const HOME_IMAGE_KEY = 'home_image';

/**
 * Guarda la imagen del home
 * @param {string} imageData - La imagen en formato base64 o URL
 * @returns {Promise<boolean>} true si la imagen se guardó correctamente
 */
export const saveHomeImage = async (imageData) => {
  try {
    // Si la imagen ya es una URL que apunta a /public/imgs, la guardamos directamente
    if (imageData.startsWith('/imgs/')) {
      localStorage.setItem(HOME_IMAGE_KEY, imageData);
      return true;
    }
    
    // Subir la imagen al servidor
    const imageUrl = await uploadImage(imageData);
    
    // Guardar la referencia en localStorage
    localStorage.setItem(HOME_IMAGE_KEY, imageUrl);
    return true;
  } catch (error) {
    console.error('Error al guardar la imagen:', error);
    return false;
  }
};

/**
 * Obtiene la imagen del home desde localStorage
 * @returns {string|null} La imagen en formato base64 o null si no existe
 */
export const getHomeImage = () => {
  try {
    return localStorage.getItem(HOME_IMAGE_KEY);
  } catch (error) {
    console.error('Error al obtener la imagen:', error);
    return null;
  }
};

/**
 * Verifica si el usuario está autenticado
 * @returns {boolean} true si el usuario está autenticado, false en caso contrario
 */
export const isUserAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};