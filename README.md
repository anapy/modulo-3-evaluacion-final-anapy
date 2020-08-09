Módulo 3: Ejercicio de evaluación final - Ana Belén Funes
------------------------------------------------------------------------------

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje.
La aplicación se va a crear utilizando React y va a constar de las siguientes partes:

1. Listado de personajes
En primer lugar, se muestra una web con el listado de personajes de Rick and Morty. Para eso, se ha utilizado la siguiente api <https://rickandmortyapi.com/documentation/#get-all-characters> que nos devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno, se muestra:
  - Foto
  - Nombre
  - Especie

2. Filtrado de personajes
La segunda parte consiste en poder hacer búsquedas por nombre. Para eso, se encuentra un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas.

3. Componentes del listado de personajes
El listado contiene los siguientes componentes:
  - Componente para los filtros (Filters.js)
  - Componente para el listado (CharacterList.js)
  - Componente para la tarjeta de cada personaje del listado (CharacterCard.js)
  - Componente para el detalle de cada personaje (CharacterDetails.js)
  - Componente para el mensaje de error (Error.js)
  - Componente principal (App.js)

4. Detalle de personajes
Al hacer clic sobre la imagen de la tarjeta de un personaje, su información
aparecerá a pantalla completa. Para hacer esto se ha usado rutas y React router. En la pantalla de detalle aparecen además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.

5. Detallitos de calidad
- Si estando en el campo de filtrado pulsamos intro se impide que el navegador navegue o cambie la ruta sin querer.
- Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se muestra el mensaje "There is no character matching your search XXX.
- El filtro de búsqueda admite que la usuaria introduzca el texto en mayúsuclas o minúsculas.
- Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto sigue mostrando el texto que tenía anteriormente.

6. BONUS: Mejoras visuales
Para terminar, podéis realizar algunas mejoras visuales del ejercicio. Por ejemplo:
Se muestra la especie (humano o alien) y el estatus (vivo, muerto o desconocida)con iconos
Se utiliza flex box para el listado de personajes y grid en los detalles.
Es responsive para dispositivos más pequeños.

7. BONUS: URL compartible
Como extra os proponemos la URL del detalle de personaje es compartible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle del personaje.
Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo
http://localhost:3000/#/detail/agencydirectords (el id agencydirectords no existe) se muestra un mensaje con el texto "There is no character matching your search".

8. BONUS: Ordenación
El listado de personajes aparece ordenado alfabéticamente por nombre.

9. BONUS: Filtrado por especie o estatus
El listado de personajes se puede filtrar por especie y por estado, a la vez que por el nombre del personaje.

10. BONUS: Reseteo de la búsqueda
Se ha incorporado un botón de reset que permite limpiar el formulario de búsqueda y devuelve el listado al estado inicial.

11. BONUS: Navegación entre los personajes del listado filtrado
Una vez dentro del listado se puede navegar a través de los botones-cohetes hacia adelante y atrás en los resultados, solo se mostrarán estos botones si hay más resultados hacia un lado u otro, en caso contrario desaparecerán.

