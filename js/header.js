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
                        <span id="carrito-contador" class="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
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

        <!-- Botones Flotantes Móvil -->
        <div class="fixed bottom-4 right-4 flex flex-col gap-2 md:hidden z-[100]">
            <button onclick="toggleTheme()" class="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center hover:scale-110 transition-all">
                <span class="material-symbols-outlined text-primary text-xl block dark:hidden">dark_mode</span>
                <span class="material-symbols-outlined text-primary text-xl hidden dark:block">light_mode</span>
            </button>
            <button onclick="abrirCarrito()" class="relative w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-xl flex items-center justify-center hover:scale-110 transition-all">
                <span class="material-symbols-outlined text-white text-2xl">shopping_cart</span>
                <span id="carrito-contador" class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </button>
        </div>

        <!-- Espaciador para el header fijo -->
        <div class="h-14 md:h-16"></div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
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
