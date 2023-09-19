# TECNOW - ReactJS App
##
TECNOW es una tienda ficticia de teléfonos celulares, laptops y tablets.
Este proyecto fue creado usando [Create React App](https://github.com/facebook/create-react-app) para el [curso de ReactJS de Coderhouse](https://www.coderhouse.com/online/reactjs).

## Instrucciones para inicializar el proyecto

### 1) Descargar Node.js
Instala [Node.js](https://nodejs.org/) en tu sistema operativo.

### 2) Descarga y navega al directorio
[Descarga el proyecto](https://github.com/cirmialexis/coderhouse-react-project/archive/refs/heads/main.zip), descomprímelo y navega al directorio con la terminal o consola usando `cd /ruta/del/proyecto`.

### 3) Instala los módulos necesarios
Para poder inicializar el proyecto, primero hay que instalar los módulos de Node.js necesarios con `npm install`.

### 4) Inicializa el proyecto
Una vez instalados los módulos, usa el comando `npm start` para inicializar la app en modo de desarrollo, pudiendo visualizarla y probarla en [http://localhost:3000](http://localhost:3000).

### Aprende más
Puedes aprender más en la [documentación de Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, [mira la documentación](https://reactjs.org/).

##
## Sobre la app

### Barra de navegación
La app cuenta con una barra de navegación que muestra el logo de la marca, un selector de categoría de productos y el ícono de un carrito que aparece al agregar algún producto. La página muestra por defecto todos los productos, y siempre se puede acceder a esta vista por defecto haciendo clic en el logo de TECNOW.

### Agregar productos al carrito
Al ingresar al detalle de algún producto, se puede seleccionar la cantidad de productos deseados y luego hacer clic en "Agregar al carrito". Automáticamente, aparece en su lugar el botón "Terminar mi compra", que llevará al usuario a la sección de revisión del estado del carrito. También se puede acceder a dicha sección haciendo clic en el ícono de carrito que aparece en la barra de navegación. Por supuesto, se pueden agregar más productos antes de revisar el carrito y terminar la compra.

### Estado del carrito
Al revisar el carrito, se pueden ver los datos de los productos elegidos, con los subtotales correspodientes y el total a pagar. Se pueden quitar o agregar más unidades de cada producto desde aquí mismo, e incluso hay un botón para limpiar el carrito. Con el botón "Continuar" se accede al formulario final.

### Checkout
Aquí, el comprador completa el formulario con su nombre, número de teléfono y correo electrónico. Al hacer clic en "Crear orden" se genera el pedido, se envía al vendedor y se muestra al comprador el número de referencia del mismo.