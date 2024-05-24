const fs = require('fs');
const path = require('path');

// Ruta de la carpeta que contiene las canciones
const folderPath = 'src/assets/musicaFondo';

// Función para obtener la lista de archivos de una carpeta
function getSongsList(folderPath) {
    try {
        // Lee el contenido de la carpeta
        const files = fs.readdirSync(folderPath);
        return files.filter(file => file.endsWith('.mp3')); // Filtra solo archivos con extensión .mp3
    } catch (error) {
        console.error('Error al leer la carpeta:', error);
        return [];
    }
}

// Función para crear el JSON con la lista de canciones
function generateJSON(folderPath) {
    const songs = getSongsList(folderPath).map(file => ({
        name: path.parse(file).name, // Nombre de la canción sin extensión
        url: "assets/musicaFondo/"+file // URL es el nombre del archivo completo con la extensión
    }));
    const jsonContent = JSON.stringify(songs, null, 2); // Formatea el JSON con indentación de 2 espacios
    try {
        fs.writeFileSync('canciones.json', jsonContent); // Guarda el JSON en un archivo llamado 'canciones.json'
        console.log('JSON creado correctamente.');
    } catch (error) {
        console.error('Error al escribir el archivo JSON:', error);
    }
}

// Llama a la función para generar el JSON
generateJSON(folderPath);
