/*
Script para valoración
Author: Donato Ramos Martínez
versión: 1.0
*/
document.addEventListener('DOMContentLoaded', function () {
    const starts = document.querySelectorAll('.start');
    starts.forEach(star => {
        star.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            const ratingContainer = this.parentElement;
            // Resetea las estrellas
            ratingContainer.querySelectorAll('.star').forEach(s => {
                s.classList.remove('active');
            });
            // Activa las estrellas una a una al hacer clic
            for (let i = 0; i < value; i++) {
                ratingContainer.querySelector(`.star[data-value="{(i+1})]`).classList.add('active');
            }
            console.log(`Valoración; ${value} estrellas`);
        });
    });
});
