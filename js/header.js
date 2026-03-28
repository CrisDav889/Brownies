function crearHeader(paginaActual) {
    const headerHTML = `
        <!-- Header Compartido -->
        <header class="fixed top-0 left-0 right-0 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-sm z-[150]">
            <div class="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
                <!-- Logo/Back -->
                <div class="flex items-center gap-3">
                    ${paginaActual !== 'index' ? `
                        <a href="index.html" class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all">
                            <span class="material-symbols-outlined text-primary">arrow_back</span>
                        </a>
                    ` : ''}
                    <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary text-2xl">bakery_dining</span>
                        <span class="font-display italic font-bold text-primary">Interclass</span>
                    </div>
                </div>

                <!-- Navegación -->
                <nav class="flex items-center gap-1">
                    <a href="index.html" class="px-4 py-2 rounded-full text-sm font-medium transition-all ${paginaActual === 'index' ? 'bg-primary text-white' : 'text-zinc-600 dark:text-zinc-300 hover:bg-primary/10'}">
                        Menú
                    </a>
                    <a href="brownies.html" class="px-4 py-2 rounded-full text-sm font-medium transition-all ${paginaActual === 'brownies' ? 'bg-primary text-white' : 'text-zinc-600 dark:text-zinc-300 hover:bg-primary/10'}">
                        Brownies
                    </a>
                    <a href="galletas.html" class="px-4 py-2 rounded-full text-sm font-medium transition-all ${paginaActual === 'galletas' ? 'bg-primary text-white' : 'text-zinc-600 dark:text-zinc-300 hover:bg-primary/10'}">
                        Galletas
                    </a>
                </nav>

                <!-- Carrito & Theme -->
                <div class="flex items-center gap-2">
                    <button onclick="abrirCarrito()" class="relative w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all">
                        <span class="material-symbols-outlined text-primary">shopping_cart</span>
                        <span id="carrito-contador" class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">0</span>
                    </button>
                    <button onclick="toggleTheme()" class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all theme-toggle">
                        <span class="material-symbols-outlined text-primary block dark:hidden">dark_mode</span>
                        <span class="material-symbols-outlined text-primary hidden dark:block">light_mode</span>
                    </button>
                </div>
            </div>
        </header>

        <!-- Espaciador para el header fijo -->
        <div class="h-16"></div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
}

// Inicializar tema
function inicializarTema() {
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', toggleTheme);
    }
}
