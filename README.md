# Geizeldos - Backend

Este documento describe la configuración y los pasos necesarios para configurar y ejecutar el backend de la aplicación Geizeldos.
El backend está construido con Node.js y Express y utiliza MongoDB para el almacenamiento de datos.

## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose

## Instalación

Para instalar y ejecutar el backend localmente, sigue estos pasos:

1. Clona el repositorio:
   bash
   git clone <https://github.com/PekeEspn2311/backend>
2. Navega al directorio del backend:
   bash
   cd geizeldos/backend
3. Instala las dependencias:
   bash
   npm install
4. Crea un archivo .env en la raíz del directorio del backend y agrega tu URI de MongoDB:
   bash
   MONGODB_URI=mongodb://localhost:27017/geizeldos
5. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
6. Frontend de la aplicación web:
  [geizeldos](https://github.com/PekeEspn2311/geizeldos)
    
## Configuración de componentes

| Nombre del Componente | Descripción | Enlace |
| index.js              | Archivo principal del servidor backend. | [index.js](index.js) |
| Product               | Modelo de datos para los productos. | [Product.js](models/Product.js) |
| productRoutes         | Define las rutas de la API para productos. | [productRoutes.js](routes/productRoutes.js) |
| productController     | Controladores para la lógica de productos. | [productController.js](controllers/productController.js) |
