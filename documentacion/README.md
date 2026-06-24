# 🛒 ColorFly

ColorFly es una herramienta web interactiva diseñada para generar paletas de colores aleatorias con un solo clic.

## 🔗 Enlaces
- **Demo en vivo:  https://joaco2003.github.io/ProyectoM1__JoaquinSuarez/
- **Repositorio:  (https://github.com/joaco2003/ProyectoM1__JoaquinSuarez)

## 🚀 Funcionalidades Principales
*   **Generación instantánea:** Creación dinámica de nuevas paletas de colores aleatorias mediante una interacción simple (botón de generar).
*   **Identificación de colores:** Visualización clara de los códigos de color (Hex o hsl) directamente en pantalla, listos para ser utilizados.
*   **Copiado al portapapeles:** Permite al usuario hacer clic sobre el código de un color para copiarlo automáticamente, agilizando el flujo de trabajo.
*   **Bloqueo de colores:** Posibilidad de "congelar" uno o mas  colores específicos que le haya gustado al usuario mientras sigue generando aleatoriamente el resto de la paleta.
*   **Opción interactiva para cambiar la visualización de los códigos de color entre HEX y HSL.

## 🛠 Tecnologías Utilizadas
- **Frontend:** javascript, HTML5, CSS
- **Herramientas:** Git, GitHub.

## 🧠 Decisiones Técnicas
*  ** Manipulación del DOM: Utilice getElementById: por ejemplo en el botón de acción (generar) y el selector que define cuántos colores se van a mostrar (cantidad)
*  ** Renderizado dinámico: Una vez actualizados los datos, se ejecuta la función renderPaleta(), pasándole como argumento el valor actual del selector (convertido a número entero con parseInt).              Esto asegura que la vista siempre coincida con la cantidad de colores elegida por el usuario.
*  ** Diseño y UI: Se implementó una imagen de fondo (background-image) cuidadosamente seleccionada para mejorar la estética general.

