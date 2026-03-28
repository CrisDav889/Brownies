function crearHeader(paginaActual) {
    const headerHTML = `
        <!-- Header Compartido -->
        <header class="fixed top-0 left-0 right-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-sm z-[150]">
            <div class="max-w-4xl mx-auto px-3 py-2 flex items-center justify-between">
                <!-- Logo/Back -->
                <div class="flex items-center gap-2">
                    ${paginaActual !== 'index' ? `
                        <a href="index.html" class="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all flex-shrink-0">
                            <span class="material-symbols-outlined text-primary text-xl">arrow_back</span>
                        </a>
                    ` : ''}
                    <a href="index.html" class="flex items-center gap-1.5 min-w-0">
                        <span class="material-symbols-outlined text-primary text-xl flex-shrink-0">bakery_dining</span>
                        <span class="font-display italic font-bold text-primary text-sm md:text-base truncate">Interclass</span>
                    </a>
                </div>

                <!-- Navegación Desktop -->
                <nav class="hidden md:flex items-center gap-1">
                    <a href="index.html" class="px-3 py-1.5 rounded-full text-xs font-medium transition-all ${paginaActual === 'index' ? 'bg-primary text-white' : 'text-zinc-600 dark:text-zinc-300 hover:bg-primary/10'}">
                        Menú
                    </a>
                    <a href="brownies.html" class="px-3 py-1.5 rounded-full text-xs font-medium transition-all ${paginaActual === 'brownies' ? 'bg-primary text-white' : 'text-zinc-600 dark:text-zinc-300 hover:bg-primary/10'}">
                        Brownies
                    </a>
                    <a href="galletas.html" class="px-3 py-1.5 rounded-full text-xs font-medium transition-all ${paginaActual === 'galletas' ? 'bg-primary text-white' : 'text-zinc-600 dark:text-zinc-300 hover:bg-primary/10'}">
                        Galletas
                    </a>
                </nav>

                <!-- Botón Menú Móvil -->
                <button id="menu-toggle" onclick="toggleMenu()" class="md:hidden w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all">
                    <span class="material-symbols-outlined text-primary">menu</span>
                </button>

                <!-- Carrito & Theme Desktop -->
                <div class="hidden md:flex items-center gap-1.5">
                    <button onclick="abrirCarrito()" class="relative w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all">
                        <span class="material-symbols-outlined text-primary">shopping_cart</span>
                        <span id="carrito-contador" class="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center hidden">0</span>
                    </button>
                    <button onclick="toggleTheme()" class="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all theme-toggle">
                        <span class="material-symbols-outlined text-primary text-lg block dark:hidden">dark_mode</span>
                        <span class="material-symbols-outlined text-primary text-lg hidden dark:block">light_mode</span>
                    </button>
                </div>
            </div>

            <!-- Menú Móvil Desplegable -->
            <div id="mobile-menu" class="hidden md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
                <div class="px-3 py-2 space-y-1">
                    <a href="index.html" class="block px-3 py-2 rounded-lg text-sm font-medium ${paginaActual === 'index' ? 'bg-primary text-white' : 'text-zinc-600 dark:text-zinc-300'}">
                        Menú
                    </a>
                    <a href="brownies.html" class="block px-3 py-2 rounded-lg text-sm font-medium ${paginaActual === 'brownies' ? 'bg-primary text-white' : 'text-zinc-600 dark:text-zinc-300'}">
                        Brownies
                    </a>
                    <a href="galletas.html" class="block px-3 py-2 rounded-lg text-sm font-medium ${paginaActual === 'galletas' ? 'bg-primary text-white' : 'text-zinc-600 dark:text-zinc-300'}">
                        Galletas
                    </a>
                </div>
            </div>
        </header>

        <!-- Bottom Navigation Bar Móvil -->
        <nav class="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden z-[140]">
            <div class="flex items-center justify-around py-2 px-1">
                <a href="index.html" class="flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${paginaActual === 'index' ? 'text-primary' : 'text-zinc-400 hover:text-primary'}">
                    <span class="material-symbols-outlined text-2xl">menu</span>
                    <span class="text-[10px] font-medium">Menú</span>
                </a>
                <button onclick="abrirCarrito()" class="relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all text-zinc-400 hover:text-primary">
                    <span class="material-symbols-outlined text-2xl">shopping_cart</span>
                    <span id="carrito-contador" class="absolute top-0 right-1 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center hidden">0</span>
                    <span class="text-[10px] font-medium">Carrito</span>
                </button>
                <button onclick="toggleTheme()" class="flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all text-zinc-400 hover:text-primary">
                    <span class="material-symbols-outlined text-2xl block dark:hidden">dark_mode</span>
                    <span class="material-symbols-outlined text-2xl hidden dark:block">light_mode</span>
                    <span class="text-[10px] font-medium">Tema</span>
                </button>
            </div>
        </nav>

        <!-- Espaciador para bottom nav -->
        <div class="h-16 md:hidden"></div>

        <!-- Instrucciones flotantes (solo la primera vez) -->
        <div id="instruccion" class="fixed bottom-24 md:bottom-4 left-4 md:left-auto md:right-20 z-[90] hidden">
            <div class="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-3 max-w-[200px] md:max-w-xs">
                <div class="flex items-start gap-2">
                    <span class="material-symbols-outlined text-primary text-xl">touch_app</span>
                    <p class="text-xs text-zinc-600 dark:text-zinc-300">
                        <span class="font-bold">Toca un producto</span> para agregarlo al carrito
                    </p>
                </div>
            </div>
            <button onclick="cerrarInstruccion()" class="absolute -top-2 -right-2 w-5 h-5 bg-zinc-400 rounded-full flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-xs">close</span>
            </button>
        </div>

        <!-- Espaciador para el header fijo -->
        <div class="h-14 md:h-16"></div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    
    // Mostrar instrucción si es la primera vez
    setTimeout(() => {
        const yaVioInstruccion = localStorage.getItem('yaVioInstruccion');
        const instruccion = document.getElementById('instruccion');
        if (!yaVioInstruccion && instruccion) {
            instruccion.classList.remove('hidden');
            localStorage.setItem('yaVioInstruccion', 'true');
        }
    }, 1000);
}

function cerrarInstruccion() {
    const instruccion = document.getElementById('instruccion');
    if (instruccion) {
        instruccion.classList.add('hidden');
    }
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('menu-toggle');
    menu.classList.toggle('hidden');
    
    const icon = btn.querySelector('span');
    if (menu.classList.contains('hidden')) {
        icon.textContent = 'menu';
    } else {
        icon.textContent = 'close';
    }
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

// Cargar tema guardado
function cargarTema() {
    const tema = localStorage.getItem('theme');
    if (tema === 'dark' || (!tema && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
}

// Inicializar tema
function inicializarTema() {
    cargarTema();
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', toggleTheme);
    }
}

// Cerrar menú móvil al hacer click fuera
document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('menu-toggle');
    if (menu && !menu.classList.contains('hidden') && !menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.add('hidden');
        btn.querySelector('span').textContent = 'menu';
    }
});
