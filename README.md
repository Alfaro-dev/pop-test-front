# Pop Test Front 🛍️

Frontend en **Angular** con **renderizado del lado del servidor (SSR)** y **Tailwind CSS**: catálogo de productos con listado y página de detalle.

## ✨ Funciones

- Listado de productos y página de detalle
- Pantalla de carga (splash screen)
- Componentes reutilizables: botón, tarjetas, header, características del producto
- SSR con `@angular/ssr` y servidor Express

## 🛠️ Stack

- **Angular** + **TypeScript**
- **Angular SSR**
- **Tailwind CSS**

## 📁 Estructura

```
src/app/
├── features/products/   # páginas de listado y detalle, routing y módulo
├── shared/              # componentes reutilizables (button, card, header...)
├── app.routes.ts
└── app.config.ts
```

## 🚀 Cómo correrlo

```bash
npm install
npm start          # desarrollo en http://localhost:4200
npm run build      # build de producción con SSR
```

---

Desarrollado por [Carlos Alfaro](https://carlosalfaro.dev).
