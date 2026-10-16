# React + Vite

## Reflexión: props

1. **¿Por qué la ruta de la foto cambió de `../Images` a `./Images`?**  
   La ruta depende de la ubicación del archivo que hace el import. `App.jsx` está en `src`, al mismo nivel que la carpeta `imagenes`, por eso usa `./imagenes/Usuario.jpg`. Un componente dentro de `src/Components` necesitaría subir un nivel con `../imagenes/Usuario.jpg`.

2. **¿Qué ventaja tiene enviar un objeto `usuario` en lugar de tres props separadas?**  
   Los datos relacionados se agrupan en un solo objeto. Así es más fácil enviar y mantener juntos el nombre, el rol, la foto y el correo.

3. **Si mañana el nombre del usuario llegara desde el backend, ¿en qué archivo tendrías que hacer el cambio y por qué solo en ese?**  
   En `App.jsx`, que es donde se origina el objeto `usuario`. `Encabezado`, `MenuUsuario` y `Sidebar` reciben ese objeto por props, por lo que no necesitan cambios mientras conserve la misma estructura.

4. **¿Qué es el prop drilling y en qué momento se vuelve un problema?**  
   Es pasar props a través de componentes intermedios para que lleguen a un componente descendiente. Es sencillo con pocos niveles, pero se vuelve incómodo cuando muchos componentes deben reenviar datos que no usan; en esos casos se pueden considerar alternativas como Context.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
