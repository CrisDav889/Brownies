# Interclass - Repostería Artesanal

Tienda en línea de brownies y galletas artesanales con sistema de pedidos por WhatsApp.

## Características

- **Diseño responsivo** - Optimizado para móviles (enfoque principal)
- **Carrito de compras** - Persistente con localStorage
- **Pedidos por WhatsApp** - Mensaje pre-escrito con los detalles del pedido
- **Modo oscuro** - Toggle para cambiar entre tema claro/oscuro
- **Navegación intuitiva** - Bottom bar en móviles, header en desktop

## Estructura del Proyecto

```
Brownies/
├── index.html          # Página principal (menú)
├── brownies.html       # Página de productos brownies
├── galletas.html       # Página de productos galletas
├── css/
│   └── styles.css      # Estilos personalizados
├── js/
│   ├── main.js         # Configuración de Tailwind
│   ├── header.js       # Header y navegación compartidos
│   └── carrito.js      # Lógica del carrito de compras
└── intimg/
    ├── clasicos.png    # Imagen de brownies
    └── galletas.png    # Imagen de galletas
```

## Productos

| Producto | Precio |
|----------|--------|
| Brownie Clásico | Q8.00 |
| Galletas con chispas | Q5.00 |

## Cómo Usar

1. **Ver productos**: En el menú principal muestra los productos disponibles
2. **Agregar al carrito**: 
   - En móviles: Toca un producto → elige cantidad → presiona "Agregar al Carrito"
   - El toast muestra la cantidad total de ese producto en el carrito
3. **Ver carrito**: Toca el ícono del carrito en la barra inferior (móvil) o header (desktop)
4. **Finalizar pedido**: 
   - Ingresa tu nombre
   - Opcional: agrega notas especiales
   - Presiona "Pedir por WhatsApp"
   - Se abre WhatsApp con el mensaje del pedido

## Configuración

### Número de WhatsApp
Edita `js/carrito.js` y cambia el número:
```javascript
const WHATSAPP_NUMERO = "50232994232";
```

### Precios
Edita `js/carrito.js`:
```javascript
const PRECIOS = {
    brownie: { nombre: 'Brownie Clásico', precio: 8, imagen: 'intimg/clasicos.png' },
    galletas: { nombre: 'Galletas con chispas', precio: 5, imagen: 'intimg/galletas.png' }
};
```

## Tecnologías Usadas

- **HTML5** - Estructura
- **Tailwind CSS** - Estilos (vía CDN)
- **Google Fonts** - Tipografía
- **Material Symbols** - Iconos
- **LocalStorage** - Persistencia del carrito
- **WhatsApp API** - Sistema de pedidos

## Cómo Ejecutar

Simplemente abre `index.html` en un navegador web. No requiere servidor ni instalación.

## Capturas de Pantalla

La app incluye:
- Hero con logo de la marca
- Sección de productos con precios
- Bottom navigation bar (móvil)
- Modal de carrito con items
- Sistema de pedidos por WhatsApp

## Licencia

Uso personal - Interclass Repostería
