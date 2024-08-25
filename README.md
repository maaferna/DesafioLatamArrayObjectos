# Centro Médico Dental Ñuñoa - Gestión de Consultas Médicas

Este proyecto es una aplicación web desarrollada para gestionar las consultas médicas de un centro médico. Utiliza tecnologías web como HTML, CSS, JavaScript y Bootstrap para la interfaz de usuario, y se enfoca en la manipulación dinámica de arrays y objetos en JavaScript para cumplir con los requerimientos del centro médico.

## Descripción

La aplicación permite:
1. **Agregar nuevas consultas** al arreglo de Traumatología.
2. **Eliminar consultas** del arreglo de Radiología.
3. **Mostrar las consultas** de distintas especialidades en la página web con un formato estilizado.
4. **Filtrar y mostrar pacientes** según su previsión de salud (Isapre o Fonasa).
5. **Imprimir listados completos** de pacientes y consultas.
6. **Mostrar u ocultar** tablas de consultas médicas con un botón.

## Funcionalidades

### 1. Agregar Consultas de Traumatología
Se agregan nuevas consultas al arreglo de traumatología utilizando métodos de arrays como `push()`. Estas consultas luego se muestran en una tabla Bootstrap dentro del `<div>` con el ID `traumatologia`.

### 2. Eliminar Consultas de Radiología
Se eliminan el primer y último elemento del arreglo de radiología utilizando métodos como `shift()` y `pop()`. Este cambio se refleja dinámicamente en la página.

### 3. Mostrar Consultas Médicas
Las consultas médicas de las diferentes especialidades se muestran en tablas estilizadas con Bootstrap, permitiendo al usuario ver claramente la información. Se utiliza la función `document.write` y `innerHTML` para incluir el contenido dinámico en la página.

### 4. Filtrar Pacientes por Previsión
Se filtran y muestran los pacientes según su previsión (Isapre o Fonasa) utilizando métodos como `filter()` y se despliegan en la página.

### 5. Listado Completo de Pacientes
Se genera un listado completo de todos los pacientes atendidos, y se muestra en un formato claro y ordenado. Los nombres de los pacientes se unen en un solo string utilizando `join()` y se presentan en la interfaz.

### 6. Mostrar/Ocultar Tablas
Las tablas de consultas médicas pueden ser ocultadas o mostradas según el requerimiento del usuario mediante un botón interactivo. Esto se logra utilizando eventos como `click` en JavaScript y manipulaciones del DOM.

## Estructura del Proyecto


- `index.html`: La estructura principal de la página web.
- `style.css`: Archivo CSS personalizado para estilos adicionales.
- `script.js`: Archivo JavaScript con la lógica principal para manejar las consultas médicas.
- `README.md`: Este archivo.

## Tecnologías Utilizadas

- **HTML5**: Estructura del contenido de la web.
- **CSS3**: Estilos y diseño de la interfaz, incluyendo Bootstrap para componentes responsivos.
- **JavaScript**: Lógica para manipulación de arrays y objetos, actualización dinámica del DOM.
- **Bootstrap 4.5**: Framework de CSS para el diseño responsivo y estilizado.

## Requisitos

Para trabajar en este proyecto localmente, necesitas:

- Un navegador web actualizado.
- Un editor de código como Visual Studio Code.
- Conexión a internet para cargar los recursos de Bootstrap desde su CDN.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/maaferna/DesafioLatamArrayObjectos.git
    ```

2. Navega a la carpeta del proyecto:
    ```bash
    cd DesafioLatamArrayObjectos
    ```

3. Abre `index.html` en tu navegador o utiliza una extensión de Live Server en tu editor de código.

## Uso

1. **Agregar Consultas**: Las consultas de traumatología se agregan automáticamente cuando la página se carga.
2. **Eliminar Consultas**: Las consultas de radiología se pueden modificar desde el código.
3. **Mostrar/Ocultar Tablas**: Usa el botón en la interfaz para mostrar u ocultar las tablas de consultas.
4. **Filtrar Pacientes**: Los resultados filtrados se muestran automáticamente en la página.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Realiza un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, revisa el archivo `LICENSE`.

## Contacto

Para consultas o sugerencias, puedes contactar al desarrollador a través del correo: maaferna@gmail.com.

