'use strict';
// Crearemos un array con la galería de imágenes
const images = [
    { src: 'https://picsum.photos/400/300?image=1&quot', category: 'nature' },
    { src: 'https://picsum.photos/400/300?image=2&quot', category: 'city' },
    { src: 'https://picsum.photos/400/300?image=3&quot', category: 'animals' },
    { src: 'https://picsum.photos/400/300?image=4&quot', category: 'nature' },
    { src: 'https://picsum.photos/400/300?image=5&quot', category: 'city' },
    { src: 'https://picsum.photos/400/300?image=6&quot', category: 'animals' },
    { src: 'https://picsum.photos/400/300?image=7&quot', category: 'nature' },
    { src: 'https://picsum.photos/400/300?image=8&quot', category: 'city' },
    { src: 'https://picsum.photos/400/300?image=9&quot', category: 'animals' },
];
// Creamos los elementos del DOM galería, modal, modalImage, close, next, prev
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0; // Índice de la imagen actual
// Creación de la función de la Galería
const createGallery = () => {
    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = `Imagen ${index + 1}`;
        img.addEventListener('click', () => openModal(index));
        gallery.appendChild(img);
    });
};
// Función para abrir el modal y mostrar la imagen seleccionada
const openModal = index => {
    currentIndex = index;
    modalImage.src = images[currentIndex].src;
    modal.style.display = 'flex';
};
// Función para cerrar el modal
const closeModal = () => {
    modal.style.display = 'none';
};
function prevImagen() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // Volver al final si es la primera imagen
    }
    modalImage.src = images[currentIndex].src;
}
function nextImagen() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volver al principio si es la última imagen
    }
    modalImage.src = images[currentIndex].src;
}
// Eventos de los EventListeners
document.addEventListener(
    'DOMContentLoaded',
    () => {
        console.log('hola');
        closeBtn.addEventListener('click', closeModal);
        prevBtn.addEventListener('click', prevImagen);
        nextBtn.addEventListener('click', nextImagen);
        window.addEventListener('click', event => {
            if (event.target === modal) {
                closeModal();
            }
        });
        createGallery();
    },
    false
);
