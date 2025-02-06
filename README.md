# Enunciado

* Crear una galería de imágenes interactiva que permita filtrar las imágenes por categorías y visualizarlas en un modal con funcionalidad de navegación.
* Crear una página web con un título ("**Galería con Filtros**").
* Añadir botones de filtro para las categorías: "**Toda**s", "**Naturaleza**", "**Ciudad**" y "**Animales**".
* Crear un contenedor para la galería de imágenes.
* Implementar un modal que muestre la imagen seleccionada en tamaño completo.
* Usar un array de objetos para almacenar las imágenes. Cada objeto debe contener:

1. **src**: URL de la imagen (puedes usar https://picsum.photos/).
2. **category**: Categoría de la imagen (nature, city, animals).

* Al hacer clic en un botón de filtro, mostrar solo las imágenes de la categoría seleccionada.
* El botón de la categoría seleccionada debe resaltarse (por ejemplo, cambiando su color de fondo).
* Usar un bucle para generar las imágenes en la galería.
* Cada imagen debe ser clicable para abrir el modal.
* Al hacer clic en una imagen, abrir el modal y mostrar la imagen en tamaño completo.
* Incluir botones para navegar entre las imágenes de la categoría seleccionada (anterior y siguiente).
* Permitir cerrar el modal haciendo clic en un botón de cierre (una "X") o fuera de la imagen.
* Diseñar una interfaz atractiva y responsive.
* Asegurarse de que la galería se vea bien en dispositivos móviles y de escritorio.
* Estilizar el modal para que se vea profesional (fondo oscuro semitransparente, imagen centrada, etc.).


## Pistas
* Usar un bucle (for, forEach, etc.) para generar dinámicamente las imágenes en la galería.
* Usar otro bucle para agregar eventos a los botones de filtro.
* Usar condicionales (if, else if, else) para filtrar las imágenes según la categoría seleccionada.
* Usar condicionales para manejar la navegación entre imágenes en el modal (por ejemplo, si el índice llega al final, volver al principio).
* Asignar eventos click a los botones de filtro, las imágenes y los botones de navegación del modal.
* Crear funciones para:
* Generar la galería.
* Filtrar las imágenes.
* Abrir y cerrar el modal.
* Navegar entre las imágenes en el modal.
```
const images = [
{ src: "https://picsum.photos/400/300?image=1&quot;, category: "nature" },
{ src: "https://picsum.photos/400/300?image=2&quot;, category: "city" },
{ src: "https://picsum.photos/400/300?image=3&quot;, category: "animals" },
{ src: "https://picsum.photos/400/300?image=4&quot;, category: "nature" },
{ src: "https://picsum.photos/400/300?image=5&quot;, category: "city" },
{ src: "https://picsum.photos/400/300?image=6&quot;, category: "animals" },
{ src: "https://picsum.photos/400/300?image=7&quot;, category: "nature" },
{ src: "https://picsum.photos/400/300?image=8&quot;, category: "city" },
{ src: "https://picsum.photos/400/300?image=9&quot;, category: "animals" }
];:
```
## Estructura básica de la página.
* Botones de filtro y contenedor de la galería.
* Modal con botones de navegación y cierre.
* Estilos para la galería, los botones de filtro y el modal.
* Lógica para generar la galería, filtrar imágenes y manejar el modal.
* Una galería funcional que permita filtrar imágenes por categoría y verlas en un modal con navegación.
Usa console.log para depurar tu código y verificar que las funciones se ejecuten correctamente.

Prueba tu código en diferentes dispositivos para asegurarte de que sea responsive.
Personaliza los estilos para que la galería se vea atractiva.
