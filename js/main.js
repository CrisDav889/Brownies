tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#6B4226",
                secondary: "#D4A373",
                accent: "#E9EDC9",
                "background-light": "#FAEDCD",
                "background-dark": "#2C1810",
            },
            fontFamily: {
                display: ["Playfair Display", "serif"],
                sans: ["Plus Jakarta Sans", "sans-serif"],
            },
        },
    },
};

document.querySelector('.theme-toggle').addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
});
