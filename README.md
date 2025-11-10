# ⚛️ Hosting Template: React Application

Este repositorio contiene el código base para una aplicación **React** dockerizada, lista para el despliegue a través de la plataforma de **Hosting basada en contenedores**.

El template utiliza *Node.js* y *Nginx* dentro de un contenedor Docker para compilar y servir la aplicación de manera eficiente.

---

## 🚀 Cómo Empezar

Sigue estos pasos para adaptar este template a tu proyecto y desplegarlo en la plataforma de Hosting:

1. **Clonar el Template:**  
   Clona este repositorio en tu cuenta personal de GitHub.

2. **Modificar el Código:**  
   - Trabaja exclusivamente dentro de la carpeta `src/`.  
   - Edita los archivos `App.js`, `App.css` e `index.js` para personalizar tu aplicación.  
   - Si deseas modificar el HTML base, puedes editar `public/index.html`.

3. **Registro en la Plataforma de Hosting:**  
   - Una vez que tu proyecto esté listo en tu repositorio personal, copia la URL del repositorio.  
   - Regístrala en la interfaz de la plataforma de Hosting.

4. **Despliegue:**  
   - La plataforma construirá automáticamente el contenedor y te asignará una URL local donde podrás acceder a tu aplicación React.

---

## 📁 Estructura del Template

La arquitectura está diseñada para separar tu código del proceso de despliegue.

| Archivo/Directorio | Descripción | ¿Editable por el Usuario? |
| :------------------ | :----------- | :------------------------ |
| src/App.js | Componente principal de la aplicación. | ✅ SÍ |
| src/App.css | Hoja de estilos personalizada para la aplicación. | ✅ SÍ |
| src/index.js | Punto de montaje principal de React. | ✅ SÍ |
| public/index.html | Plantilla HTML base de la app. | ✅ SÍ |
| **Dockerfile** | Instrucciones Docker para compilar y servir la app. | ❌ NO |
| **package.json** | Configuración y dependencias de React. | ⚠️ Con precaución |

---

## ⚠️ NOTA IMPORTANTE PARA EL DESPLIEGUE

**No modifiques el archivo `Dockerfile`** en la raíz de este repositorio.  
Este archivo contiene la configuración crítica necesaria para que el *Project Manager Service* de la plataforma de Hosting pueda construir y ejecutar tu contenedor correctamente con Node y Nginx.  
Cualquier cambio podría provocar fallos en el despliegue o conflictos con el proxy de la plataforma.
