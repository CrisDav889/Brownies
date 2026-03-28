const PRECIOS = {
    brownie: { nombre: 'Brownie Clásico', precio: 8, imagen: 'intimg/clasicos.png' },
    galletas: { nombre: 'Galletas con chispas', precio: 6, imagen: 'intimg/galletas.png' }
};

const WHATSAPP_NUMERO = "50232994232";

function getCarrito() {
    const carrito = localStorage.getItem('carritoInterclass');
    return carrito ? JSON.parse(carrito) : [];
}

function saveCarrito(carrito) {
    localStorage.setItem('carritoInterclass', JSON.stringify(carrito));
    actualizarContadorCarrito();
}

function agregarAlCarrito(producto) {
    let carrito = getCarrito();
    const existente = carrito.find(p => p.id === producto);
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({ id: producto, cantidad: 1 });
    }
    saveCarrito(carrito);
}

function cambiarCantidadCarrito(producto, cambio) {
    let carrito = getCarrito();
    const item = carrito.find(p => p.id === producto);
    if (item) {
        item.cantidad += cambio;
        if (item.cantidad <= 0) {
            eliminarDelCarrito(producto);
            return;
        }
    }
    saveCarrito(carrito);
    actualizarCarritoUI();
}

function eliminarDelCarrito(producto) {
    let carrito = getCarrito();
    carrito = carrito.filter(p => p.id !== producto);
    saveCarrito(carrito);
    actualizarCarritoUI();
}

function actualizarContadorCarrito() {
    const contador = document.getElementById('carrito-contador');
    if (contador) {
        const totalItems = getCarrito().reduce((sum, item) => sum + item.cantidad, 0);
        contador.textContent = totalItems;
    }
}

function actualizarCarritoUI() {
    const contador = document.getElementById('carrito-contador');
    const lista = document.getElementById('carrito-lista');
    const vacio = document.getElementById('carrito-vacio');
    const total = document.getElementById('carrito-total');
    const btnPedir = document.getElementById('btn-pedir');
    
    if (!lista) return;

    const carrito = getCarrito();
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    
    if (contador) contador.textContent = totalItems;

    let sumaTotal = 0;
    lista.innerHTML = '';

    if (carrito.length === 0) {
        if (vacio) vacio.classList.remove('hidden');
        lista.classList.add('hidden');
        if (total) total.textContent = 'Q0.00';
        if (btnPedir) btnPedir.disabled = true;
    } else {
        if (vacio) vacio.classList.add('hidden');
        lista.classList.remove('hidden');
        if (btnPedir) btnPedir.disabled = false;

        // Calcular altura máxima basada en cantidad de items
        const maxHeight = Math.min(carrito.length * 90 + 40, 350);

        lista.innerHTML = `<div class="space-y-2" style="max-height: ${maxHeight}px; overflow-y: auto;">`;
        
        carrito.forEach(item => {
            const producto = PRECIOS[item.id];
            const subtotal = producto.precio * item.cantidad;
            sumaTotal += subtotal;

            lista.innerHTML += `
                <div class="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-800/50 p-2 rounded-xl">
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="w-10 h-10 object-cover rounded-lg flex-shrink-0">
                    <div class="flex-1 min-w-0">
                        <h4 class="font-bold text-primary dark:text-secondary text-xs truncate">${producto.nombre}</h4>
                        <p class="text-zinc-500 dark:text-zinc-400 text-[10px]">Q${producto.precio} c/u</p>
                    </div>
                    <div class="flex items-center gap-1">
                        <button onclick="cambiarCantidadCarrito('${item.id}', -1)" class="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center hover:bg-primary/20 transition-all">
                            <span class="material-symbols-outlined text-xs">remove</span>
                        </button>
                        <span class="w-5 text-center font-bold text-xs">${item.cantidad}</span>
                        <button onclick="cambiarCantidadCarrito('${item.id}', 1)" class="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center hover:bg-primary/20 transition-all">
                            <span class="material-symbols-outlined text-xs">add</span>
                        </button>
                    </div>
                    <div class="text-right min-w-[40px]">
                        <span class="font-bold text-primary dark:text-secondary text-xs">Q${subtotal.toFixed(2)}</span>
                    </div>
                    <button onclick="eliminarDelCarrito('${item.id}')" class="text-red-500 hover:text-red-700 p-0.5">
                        <span class="material-symbols-outlined text-base">delete</span>
                    </button>
                </div>
            `;
        });
        
        lista.innerHTML += '</div>';

        if (total) total.textContent = `Q${sumaTotal.toFixed(2)}`;
    }
}

function abrirCarrito() {
    actualizarCarritoUI();
    const modal = document.getElementById('modal-carrito');
    const panel = document.getElementById('carrito-panel');
    if (modal && panel) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            panel.classList.remove('translate-y-full');
        }, 10);
    }
}

function cerrarCarrito() {
    const modal = document.getElementById('modal-carrito');
    const panel = document.getElementById('carrito-panel');
    if (modal && panel) {
        panel.classList.add('translate-y-full');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

function enviarPedido() {
    const carrito = getCarrito();
    
    if (carrito.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }

    const nombre = document.getElementById('carrito-nombre')?.value.trim();
    if (!nombre) {
        alert('Por favor ingresa tu nombre');
        return;
    }

    let mensaje = `*🍫 Nuevo Pedido - Interclass*\n\n`;
    mensaje += `*Cliente:* ${nombre}\n\n`;
    mensaje += `*Productos:*\n`;
    
    let total = 0;
    carrito.forEach(item => {
        const producto = PRECIOS[item.id];
        const subtotal = producto.precio * item.cantidad;
        total += subtotal;
        mensaje += `• ${producto.nombre} x${item.cantidad} = Q${subtotal}\n`;
    });
    
    mensaje += `\n*Total: Q${total.toFixed(2)}*\n`;
    
    const notas = document.getElementById('carrito-notas')?.value.trim();
    if (notas) {
        mensaje += `\n*Notas:* ${notas}`;
    }
    
    mensaje += `\n\n_Gracias por tu pedido_ 🙏`;
    
    const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');

    setTimeout(() => {
        localStorage.removeItem('carritoInterclass');
        actualizarContadorCarrito();
        actualizarCarritoUI();
        cerrarCarrito();
        const nombreInput = document.getElementById('carrito-nombre');
        const notasInput = document.getElementById('carrito-notas');
        if (nombreInput) nombreInput.value = '';
        if (notasInput) notasInput.value = '';
    }, 1000);
}

function inicializarCarrito() {
    actualizarContadorCarrito();
    
    const modal = document.getElementById('modal-carrito');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                cerrarCarrito();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarCarrito();
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarCarrito);
} else {
    inicializarCarrito();
}
