const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();

// Habilitar CORS
app.use(cors());

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, '../public')));

// Configurar multer para el almacenamiento de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/imgs'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'img-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Ruta para subir imágenes
app.post('/api/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
    }

    // Construir la URL de la imagen
    const imageUrl = `/imgs/${req.file.filename}`;
    res.json({ imageUrl });
  } catch (error) {
    console.error('Error al procesar la imagen:', error);
    res.status(500).json({ error: 'Error al procesar la imagen' });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});