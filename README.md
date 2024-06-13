# Práctica 5 del Posgrado Full-Stack Web Technologies, por Ferran Bals

## Proyecto: Aplicación para gestionar una biblioteca personal.

### Acerca del autor

**Autor**: Ferran Bals Moreno

**Perfil de GitHub:** [franksparks](https://github.com/franksparks)

## Descripción de la práctica realizada

### Introducción

Se ha desarrollado una aplicación que permite la gestión de una biblioteca personal.

Los libros pueden tener uno de los siguientes estados:

- Pendiente
- Leyendo
- Leído

### Instrucciones

Una vez arrancada la aplicación, veremos una serie de libros en la página principal, son los libros en nuestra biblioteca personal:

- Usuarios sin registrar pueden ver la colección y también el detalle de los libros.
- Para añadir libros, editar su estado o su valoración, necesitaremos iniciar sesión.

#### Casos especiales

- El libro "Error humano" lanza un error.
- El libro "Atlantis found" redirige a la página de NotFound.

---

### Pendiente a fecha del 13/6:

- Terminar el formulario para introducir libros.

  - Mejorar el formulario para poder añadir la imagen de portada.

- Implementar login + redirecciones.

  - Implementar controles para permitir aplicar cambios o introducir nuevos libros solo al usuario autenticado.

- Añadir filtros por estado en la página principal.

---

# Enunciado original

# Frontend en React, usando NextJS

Se trata de hacer una aplicación con NextJS (así pues, full-stack) que sea muy simple pero utilice las partes clave de dNextJS para hacer un primer uso en un proyecto con la intención de practicar, antes de hacer el proyecto. Es necesario tocar el máximo de las siguientes características de NextJS (con AppRouter):

1. App Router, es decir las carpetas como rutas (`page.tsx`).
2. Usar [ShadcnUI](https://ui.shadcn.com) para componentes de interface.
3. Usar layouts (`layout.tsx`), errores (`error.tsx`) y loading (`loading.tsx`).
4. Usar [actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) para hacer cosas en el servidor.

La idea subyacente a la aplicación es libre completamente, pero debe ser sencilla (queremos programar una "prueba de concepto", no una app entera), y de la misma envergadura que el proyecto que se hizo en clase (el TODO List). Algunos ejemplos:

- Un pequeño gestor de ficheros: se muestra una lista de ficheros y se puede 1) añadir un fichero (con un campo de formulario), 2) borrar un fichero, 3) descargar un fichero. Una opción muy chula es que se pueda [arrastarar un fichero](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop). Este ejercicio no requiere una base de datos, realmente.

- Un foro donde la gente puede hacer comentarios. En realidad es un foro público y no hay que hacer login para poder comentar, pero al poner un comentario se le pide al usuario alguna información por si luego quiere poder borrar sus mensajes. Cada mensaje tiene texto, nombre del autor y fecha.

- Editor de una receta: se puede editar una descripción y luego una lista de ingredientes. Cada ingrediente es lo mínimo: nombre y cantidad. En principio solo hay una receta, y es recomendable no usar base de datos y guardar solo un fichero JSON. Aunque una vez hecho eso, es fácil permitir tener más de una receta.
