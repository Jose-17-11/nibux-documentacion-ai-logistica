# Proyecto de documentacion y guia para usuarios nibux

```sh
pnpm create astro@latest -- --template basics
```

## 🚀 Estructura del proyecto

Orden de acomodo de Ficheros y directorios del proyecto:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── logo.svg
│   ├── components
│   │   └── Button.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

## 🧞 Comandos

Todos los comandos para ejecutar el projecto, desde una terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Instalar dependencias                            |
| `pnpm dev`             | Correr servidor local desarrollo en `localhost:4321`      |
| `pnpm build`           | Construir el sitio en produccion en `./dist/`          |
| `pnpm astro ...`       | Ejecutar CLI comandos `astro add`, `astro check` |
| `pnpm astro -- --help` | Obtener ayuda usando la terminal de Astro        |
