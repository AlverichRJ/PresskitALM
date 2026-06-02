# Presskit Digital Interactivo — Al-Maburak

Sitio estático premium para el presskit digital de **Al-Maburak**, diseñado bajo la dirección visual aprobada **Ruta A: Cinemática oscura**.

## Base aprobada

El proyecto está construido como un sitio estático optimizado para despliegue en **GoDaddy Web Hosting con cPanel**. No utiliza WordPress, backend, base de datos, autenticación ni panel administrativo.

| Área | Decisión |
|---|---|
| Framework | Astro |
| Interactividad | React Islands |
| Estilos | TailwindCSS + CSS global |
| Animaciones | Motion y GSAP selectivo |
| Despliegue | Build estático `dist/` para subir a `public_html` |

## Comandos

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Despliegue en GoDaddy cPanel

Para publicar el sitio, ejecutar `pnpm build` y subir el contenido generado dentro de `dist/` a `public_html` en cPanel. La carpeta `dist/` no se versiona por defecto para evitar subir compilados innecesarios al repositorio.

## Edición de contenido

El contenido principal se encuentra en `src/content/` como archivos JSON. Esto permite actualizar textos, integrantes, música y redes sin panel administrativo ni base de datos.
