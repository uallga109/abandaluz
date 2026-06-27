// Base de datos de la carta de AB Andaluz
const MENU_DATA = [
  // --- TAPAS ---
  {
    id: 1,
    category: "tapas",
    name: "Patatas Bravas Caseras",
    description: "Patatas cortadas a mano con salsa brava casera.",
    prices: { unica: "3,50€" }
  },
  {
    id: 2,
    category: "tapas",
    name: "Patatas Fritas Caseras",
    description: "Patatas frescas cortadas a mano y fritas al momento.",
    prices: { unica: "2,50€" }
  },
  {
    id: 3,
    category: "tapas",
    name: "Alitas (6 Unidades)",
    description: "Alitas de pollo crujientes y sazonadas.",
    prices: { unica: "6,00€" }
  },
  {
    id: 4,
    category: "tapas",
    name: "Nuggets (6 Unidades)",
    description: "Nuggets de pollo tiernos con rebozado crujiente.",
    prices: { unica: "6,00€" }
  },
  {
    id: 5,
    category: "tapas",
    name: "Samosas (4 Unidades)",
    description: "Empanadillas crujientes rellenas de verduras y especias.",
    prices: { unica: "6,00€" }
  },
  {
    id: 6,
    category: "tapas",
    name: "Falafel (4 Unidades)",
    description: "Croquetas de garbanzos con especias orientales.",
    prices: { unica: "6,00€" }
  },
  {
    id: 7,
    category: "tapas",
    name: "Humus con Pan Casero",
    description: "Crema de garbanzos con tahini, aceite de oliva y pan recién horneado.",
    prices: { unica: "5,90€" }
  },
  {
    id: 8,
    category: "tapas",
    name: "Crema de Berenjena y Pepino",
    description: "Berenjena y pimientos asados, yogur griego y pan casero.",
    prices: { unica: "5,90€" }
  },
  {
    id: 9,
    category: "tapas",
    name: "Calabacín Relleno",
    description: "Calabacín relleno de carne picada y queso mozzarella fundido.",
    prices: { unica: "4,50€" }
  },
  {
    id: 10,
    category: "tapas",
    name: "Berenjena Rellena",
    description: "Berenjena rellena de carne picada y queso mozzarella fundido.",
    prices: { unica: "5,90€" }
  },
  {
    id: 11,
    category: "tapas",
    name: "Adana Kebab (Kebab Ternera al Grill)",
    description: "Brocheta de carne picada de ternera especiada hecha al grill.",
    prices: { unica: "7,00€" }
  },
  {
    id: 12,
    category: "tapas",
    name: "Hamburguesa de Pollo",
    description: "Hamburguesa individual con carne de pollo jugosa.",
    prices: { unica: "5,00€" }
  },
  {
    id: 13,
    category: "tapas",
    name: "Hamburguesa de Ternera",
    description: "Hamburguesa individual con carne de ternera al grill.",
    prices: { unica: "6,00€" }
  },

  // --- KEBAB Y PITAS ---
  {
    id: 14,
    category: "kebab_pitas",
    name: "Rollo Durum Ternera, Pollo o Mixto",
    description: "Lechuga, tomate, cebolla, col y remolacha.",
    prices: { unica: "5,00€" }
  },
  {
    id: 15,
    category: "kebab_pitas",
    name: "Pita Ternera, Pollo o Mixto",
    description: "Lechuga, tomate, cebolla, col y remolacha.",
    prices: { unica: "5,00€" }
  },
  {
    id: 16,
    category: "kebab_pitas",
    name: "Pizza Turca de Pollo/Ternera/Mixta",
    description: "Base fina con carne picada sazonada, carne kebab y vegetales.",
    prices: { unica: "7,00€" }
  },

  // --- MENÚ KEBAB Y PIZZA TURCA ---
  {
    id: 17,
    category: "menu_kebab_pizza_turca",
    name: "Menú Rollo Durum Ternera, Pollo o Mixto",
    description: "Rollo durum, patatas fritas y bebida.",
    prices: { unica: "8,00€" }
  },
  {
    id: 18,
    category: "menu_kebab_pizza_turca",
    name: "Menú Pan Pita Ternera, Pollo o Mixto",
    description: "Pan de pita, patatas fritas y bebida.",
    prices: { unica: "8,00€" }
  },
  {
    id: 19,
    category: "menu_kebab_pizza_turca",
    name: "Menú Hamburguesa de Pollo / Ternera",
    description: "Hamburguesa en pan de pita o pan normal, patatas fritas y bebida.",
    prices: { pollo: "8,00€", ternera: "9,00€" }
  },
  {
    id: 20,
    category: "menu_kebab_pizza_turca",
    name: "Menú Pizza Turca de Pollo/Ternera/Mixto",
    description: "Pizza turca, patatas y bebida.",
    prices: { unica: "10,00€" }
  },

  // --- TACOS FRANCESES ---
  {
    id: 21,
    category: "tacos_franceses",
    name: "Taco Kebab (Ternera, Pollo o Mixto)",
    description: "Carne, huevo, patatas fritas y queso mozzarella fundido.",
    prices: { solo: "6,90€", menu: "9,00€" }
  },
  {
    id: 22,
    category: "tacos_franceses",
    name: "Taco Pollo Rebozado",
    description: "Pollo rebozado crujiente, huevo, patatas fritas y queso.",
    prices: { solo: "7,00€", menu: "10,00€" }
  },
  {
    id: 23,
    category: "tacos_franceses",
    name: "Taco Pollo Plancha",
    description: "Pechuga de pollo a la plancha, huevo, patatas fritas y queso.",
    prices: { solo: "7,00€" }
  },
  {
    id: 24,
    category: "tacos_franceses",
    name: "Taco Carne Picada (Ternera)",
    description: "Carne picada de ternera especiada, huevo, patatas fritas y queso.",
    prices: { solo: "7,90€" }
  },

  // --- PLATOS ---
  {
    id: 25,
    category: "platos",
    name: "Plato Kebab Pollo/Ternera/Mixto",
    description: "Carne kebab, arroz basmati, patatas fritas, ensalada variada y pan.",
    prices: { pequeno: "7,50€", grande: "8,50€" }
  },
  {
    id: 26,
    category: "platos",
    name: "Plato Nuggets",
    description: "Nuggets de pollo crujientes, arroz basmati, patatas fritas, ensalada y pan.",
    prices: { unica: "9,00€" }
  },
  {
    id: 27,
    category: "platos",
    name: "Plato Alitas",
    description: "Alitas de pollo doradas, arroz basmati, patatas fritas, ensalada y pan.",
    prices: { unica: "9,00€" }
  },
  {
    id: 28,
    category: "platos",
    name: "Plato Falafel",
    description: "Falafel casero, arroz basmati, patatas fritas, ensalada y pan.",
    prices: { unica: "9,00€" }
  },
  {
    id: 29,
    category: "platos",
    name: "Plato Samosa",
    description: "Samosas de verduras crujientes, arroz basmati, patatas fritas, ensalada y pan.",
    prices: { unica: "9,00€" }
  },
  {
    id: 30,
    category: "platos",
    name: "Plato Arroz",
    description: "Arroz basmati aromático cocinado al estilo tradicional.",
    prices: { unica: "4,50€" }
  },
  {
    id: 31,
    category: "platos",
    name: "Gratinado Pollo/Ternera/Mixto",
    description: "Patatas caseras, carne seleccionada, abundante queso mozzarella fundido y salsa de la casa.",
    prices: { mediano: "8,50€", grande: "10,50€" }
  },

  // --- MENÚS ---
  {
    id: 32,
    category: "menus",
    name: "Menú Plato Kebab (Infantil)",
    description: "Plato kebab infantil con carne tierna, patatas fritas y bebida.",
    prices: { unica: "8,00€" }
  },
  {
    id: 33,
    category: "menus",
    name: "Menú Nuggets",
    description: "Nuggets de pollo, patatas fritas y bebida.",
    prices: { unica: "8,00€" }
  },
  {
    id: 34,
    category: "menus",
    name: "Menú Alitas",
    description: "Alitas de pollo crujientes, patatas fritas y bebida.",
    prices: { unica: "8,00€" }
  },
  {
    id: 35,
    category: "menus",
    name: "Menú Falafel",
    description: "Croquetas de falafel, patatas fritas y bebida.",
    prices: { unica: "8,00€" }
  },
  {
    id: 36,
    category: "menus",
    name: "Menú Samosa",
    description: "Samosas crujientes, patatas fritas y bebida.",
    prices: { unica: "8,00€" }
  },

  // --- LA BRASA ---
  {
    id: 37,
    category: "la_brasa",
    name: "Especial Kebab",
    description: "Especial kebab en rollo durum o pan de pita, al grill casero con jugosa carne de pollo.",
    prices: { sencillo: "7,90€", menu: "10,90€" }
  },
  {
    id: 38,
    category: "la_brasa",
    name: "Especial Plato Kebab",
    description: "Especial plato kebab hecho al grill casero, con pollo, patatas fritas caseras, arroz basmati, ensalada y pan casero.",
    prices: { unica: "12,90€" }
  },
  {
    id: 39,
    category: "la_brasa",
    name: "Mix Grill (2 Personas)",
    description: "Surtido variado de carne a la brasa, patatas fritas caseras, ensalada fresca, 2 panes caseros y bebidas.",
    prices: { unica: "32,00€" }
  },
  {
    id: 40,
    category: "la_brasa",
    name: "Costillas de Cordero",
    description: "Costillas de cordero tiernas a la brasa, patatas fritas caseras, arroz basmati, ensalada y pan casero.",
    prices: { unica: "22,90€" }
  },
  {
    id: 41,
    category: "la_brasa",
    name: "Pinchos Morunos",
    description: "Brochetas de cordero a la brasa, patatas fritas caseras, arroz basmati, ensalada y pan casero.",
    prices: { unica: "16,90€" }
  },
  {
    id: 42,
    category: "la_brasa",
    name: "Pinchos de Pollo",
    description: "Brochetas de pollo marinadas al grill, patatas fritas caseras, arroz basmati, ensalada y pan casero.",
    prices: { unica: "13,90€" }
  },
  {
    id: 43,
    category: "la_brasa",
    name: "Piernas de Pollo",
    description: "Muslos de pollo dorados a la brasa, patatas fritas caseras, arroz basmati, ensalada y pan casero.",
    prices: { unica: "13,90€" }
  },
  {
    id: 44,
    category: "la_brasa",
    name: "Adana Kebab",
    description: "Carne picada de ternera especiada a la brasa, patatas fritas caseras, arroz basmati, ensalada, pan casero y crema de hummus.",
    prices: { unica: "13,90€" }
  },

  // --- ENSALADAS ---
  {
    id: 45,
    category: "ensaladas",
    name: "Ensalada de Atún",
    description: "Ensalada fresca con lechuga, tomate, cebolla, aceitunas y generoso atún de calidad.",
    prices: { unica: "5,50€" }
  },
  {
    id: 46,
    category: "ensaladas",
    name: "Ensalada de Normal",
    description: "Mezcla clásica de ensalada fresca de la casa con vegetales de temporada.",
    prices: { unica: "4,50€" }
  },
  {
    id: 47,
    category: "ensaladas",
    name: "Ensalada Gambona Agridulce",
    description: "Rúcula, tomate cherry, cebolla, jugosas gambas a la plancha y dados de queso feta.",
    prices: { unica: "7,90€" }
  },

  // --- PIZZAS ---
  {
    id: 48,
    category: "pizzas",
    name: "Pizza de Gamba",
    description: "Queso mozzarella, salsa de tomate, gamba y aceite de ajo.",
    prices: { pequena: "8,00€", mediana: "10,00€" }
  },
  {
    id: 49,
    category: "pizzas",
    name: "Margarita",
    description: "Queso mozzarella y deliciosa salsa de tomate casera.",
    prices: { pequena: "8,00€", mediana: "10,00€" }
  },
  {
    id: 50,
    category: "pizzas",
    name: "Funghi (Fugnhi)",
    description: "Queso mozzarella, salsa de tomate, champiñones laminados frescos, aceite de ajo y queso parmesano.",
    prices: { pequena: "8,00€", mediana: "10,00€" }
  },
  {
    id: 51,
    category: "pizzas",
    name: "Pizza Kebab",
    description: "Queso mozzarella, salsa de tomate, pimiento rojo/verde y opción de carne de ternera, pollo o mixta.",
    prices: { pequena: "8,00€", mediana: "10,00€" }
  },
  {
    id: 52,
    category: "pizzas",
    name: "Hawaiana",
    description: "Queso mozzarella, salsa de tomate, jamón de pavo y piña en trozos.",
    prices: { pequena: "8,00€", mediana: "10,00€" }
  },
  {
    id: 53,
    category: "pizzas",
    name: "4 Quesos",
    description: "Mezcla de cuatro quesos seleccionados y salsa de tomate.",
    prices: { pequena: "8,00€", mediana: "10,00€" }
  },
  {
    id: 54,
    category: "pizzas",
    name: "Pizza de Atún",
    description: "Queso mozzarella, salsa de tomate, atún, cebolla y aceitunas verdes.",
    prices: { pequena: "8,00€", mediana: "10,00€" }
  },
  {
    id: 55,
    category: "pizzas",
    name: "American Hot",
    description: "Queso mozzarella, salsa de tomate, pimiento rojo/verde, cebolla picada y carne de ternera.",
    prices: { pequena: "8,00€", mediana: "10,00€" }
  },
  {
    id: 56,
    category: "pizzas",
    name: "Rúcula",
    description: "Queso mozzarella, salsa de tomate, rúcula fresca, queso parmesano rallado y aceite de ajo.",
    prices: { pequena: "8,00€", mediana: "10,00€" }
  },
  {
    id: 57,
    category: "pizzas",
    name: "Chicago",
    description: "Queso mozzarella, salsa de tomate, carne picada de ternera, salsa barbacoa, cebolla picada y queso cheddar fundido.",
    prices: { pequena: "8,00€", mediana: "10,00€" }
  },
  {
    id: 58,
    category: "pizzas",
    name: "Pizza de Pollo",
    description: "Queso mozzarella, salsa de tomate, carne de pollo, pimiento rojo/verde y cebolla.",
    prices: { pequena: "8,00€", mediana: "10,00€" }
  },
  {
    id: 59,
    category: "pizzas",
    name: "Pizza Pepperoni",
    description: "Queso mozzarella, salsa de tomate y rodajas de pepperoni condimentado.",
    prices: { pequena: "8,00€", mediana: "10,00€" }
  },
  {
    id: 60,
    category: "pizzas",
    name: "Caprichosa",
    description: "Queso mozzarella, salsa de tomate, jamón de pavo y champiñones frescos.",
    prices: { pequena: "8,00€", mediana: "10,00€" }
  },
  {
    id: 61,
    category: "pizzas",
    name: "Parmesano",
    description: "Queso mozzarella y parmesano, salsa de tomate, patata cocida en láminas, aceite de ajo y huevo.",
    prices: { pequena: "8,00€", mediana: "10,00€" }
  },
  {
    id: 62,
    category: "pizzas",
    name: "Vegetal",
    description: "Salsa de tomate, mozzarella, berenjenas, calabacín y pimiento rojo/verde.",
    prices: { pequena: "8,00€", mediana: "10,00€" }
  },

  // --- POSTRES CASEROS ---
  {
    id: 63,
    category: "postres_caseros",
    name: "Tarte de 3 Cohocolates",
    description: "Tarta tradicional elaborada con tres variedades de chocolate.",
    prices: { unica: "3,50€" }
  },
  {
    id: 64,
    category: "postres_caseros",
    name: "Tarte de Queso con Mermelada Casera de Frutos Rojos",
    description: "Deliciosa tarta de queso al horno cubierta con mermelada casera.",
    prices: { unica: "3,50€" }
  },
  {
    id: 65,
    category: "postres_caseros",
    name: "Tarte de Chocolate",
    description: "Tarta clásica de chocolate para los más golosos.",
    prices: { unica: "3,50€" }
  },
  {
    id: 66,
    category: "postres_caseros",
    name: "Baklawa",
    description: "Pastelito dulce hojaldrado con frutos secos triturados y miel.",
    prices: { unica: "1,50€" }
  }
];

// Nombres de categorías legibles para el usuario
const CATEGORY_NAMES = {
  tapas: "Tapas",
  kebab_pitas: "Kebab y Pitas",
  tacos_franceses: "Tacos Franceses",
  menu_kebab_pizza_turca: "Menú Kebab y Pizza Turca",
  platos: "Platos",
  la_brasa: "La Brasa",
  menus: "Menús",
  ensaladas: "Ensaladas",
  pizzas: "Pizzas",
  postres_caseros: "Postres Caseros"
};

// Íconos SVG personalizados para cada categoría
const CATEGORY_ICONS = {
  tapas: `<svg viewBox="0 0 512 512" fill="currentColor"><path d="M416 384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H96C60.7 64 32 92.7 32 128v192c0 35.3 28.7 64 64 64h320zm-240-96c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/></svg>`,
  kebab_pitas: `<svg viewBox="0 0 512 512" fill="currentColor"><path d="M375.7 19.7c-10.8-11.3-28.7-11.3-39.5 0L242.2 118c-26.6-6-54.7 1.9-74.8 22-26.3 26.3-31 66.8-14.2 97.9L33.7 357.4C12.1 379 0 408.3 0 439c0 39.4 17.3 76.5 47.5 101.8 3.8 3.2 8.7 5.2 13.9 5.2H384c53 0 96-43 96-96V128c0-43-28.5-81.2-69-93.7L375.7 19.7zm-143 148c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l113.1 113.1c7.8 7.8 7.8 20.5 0 28.3s-20.5 7.8-28.3 0L232.7 167.7z"/></svg>`,
  tacos_franceses: `<svg viewBox="0 0 512 512" fill="currentColor"><path d="M464 256c0-114.9-93.1-208-208-208S48 141.1 48 256s93.1 208 208 208 208-93.1 208-208zm-208 80c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/></svg>`,
  menu_kebab_pizza_turca: `<svg viewBox="0 0 512 512" fill="currentColor"><path d="M464 96h-80V32c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32v64H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zm-144 0H192V64h128v32z"/></svg>`,
  platos: `<svg viewBox="0 0 512 512" fill="currentColor"><path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm0 384c-88.4 0-160-71.6-160-160S167.6 96 256 96s160 71.6 160 160-71.6 160-160 160z"/></svg>`,
  la_brasa: `<svg viewBox="0 0 512 512" fill="currentColor"><path d="M363.5 120.7C378.1 92 376.1 57.5 358 32c-15-21.1-41.5-27-62.9-14-38.3 23.3-64 64.9-67 110.7-3-45.8-28.7-87.4-67-110.7-21.4-13-47.9-7.1-62.9 14-18.1 25.5-20.1 60-5.5 88.7C107.5 149.3 128 190.2 128 234.7c0 70.3 57 127.3 128 127.3s128-57 128-127.3c0-44.5-20.5-85.4-34.5-114zM256 480c53 0 96-43 96-96H160c0 53 43 96 96 96z"/></svg>`,
  menus: `<svg viewBox="0 0 512 512" fill="currentColor"><path d="M224 96c0-17.7-14.3-32-32-32H32C14.3 64 0 78.3 0 96v320c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V96zm256 0c0-17.7-14.3-32-32-32H288c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V96z"/></svg>`,
  ensaladas: `<svg viewBox="0 0 512 512" fill="currentColor"><path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm50.6 156.4L239.5 256l67.1 67.6c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L216.9 278.6c-12.5-12.5-12.5-32.8 0-45.3l67.1-67.6c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.7z"/></svg>`,
  pizzas: `<svg viewBox="0 0 512 512" fill="currentColor"><path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm0 384c-88.4 0-160-71.6-160-160S167.6 96 256 96s160 71.6 160 160-71.6 160-160 160z"/></svg>`,
  postres_caseros: `<svg viewBox="0 0 512 512" fill="currentColor"><path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm90.4 263.6c-7.3 15.3-25.9 21.6-41.2 14.3L256 286.3l-49.2 23.6c-15.3 7.3-33.9 1-41.2-14.3s-1-33.9 14.3-41.2l49.2-23.6-49.2-23.6c-15.3-7.3-21.6-25.9-14.3-41.2s25.9-21.6 41.2-14.3l49.2 23.6 49.2-23.6c15.3-7.3 33.9-1 41.2 14.3s1 33.9-14.3 41.2L305.2 249l49.2 23.6c15.3 7.3 21.6 25.9 14.3 41.2z"/></svg>`
};

// Configuración de Favoritos usando localStorage
let favorites = JSON.parse(localStorage.getItem("ab_andaluz_favorites")) || [];

// Referencias a elementos del DOM
const welcomeScreen = document.getElementById("welcome-screen");
const menuScreen = document.getElementById("menu-screen");
const categoriesGrid = document.getElementById("categories-grid");
const itemsContainer = document.getElementById("items-container");
const searchInput = document.getElementById("search-input");
const categoryTabs = document.getElementById("category-tabs");
const backBtn = document.getElementById("back-btn");
const tabHome = document.getElementById("tab-home");
const tabSearch = document.getElementById("tab-search");
const tabFavorites = document.getElementById("tab-favorites");
const tabInfo = document.getElementById("tab-info");
const infoModal = document.getElementById("info-modal");
const closeModal = document.getElementById("close-modal");
const headerTitle = document.getElementById("header-title");
const searchBarContainer = document.getElementById("search-bar-container");

let currentActiveCategory = null;
let showingFavorites = false;

// Inicialización de la Aplicación
function init() {
  renderCategoriesGrid();
  renderCategoryTabs();
  setupEventListeners();
  checkUrlParams();
}

// Renderiza el Grid de Categorías en la pantalla de inicio
function renderCategoriesGrid() {
  categoriesGrid.innerHTML = "";
  Object.keys(CATEGORY_NAMES).forEach(catKey => {
    const card = document.createElement("div");
    card.className = "category-card ripple";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("id", `grid-cat-${catKey}`);
    
    // Obtenemos los ítems de esta categoría para contar cuántos hay
    const count = MENU_DATA.filter(item => item.category === catKey).length;

    card.innerHTML = `
      <div class="category-icon-wrapper">
        ${CATEGORY_ICONS[catKey] || ""}
      </div>
      <h3 class="category-card-title">${CATEGORY_NAMES[catKey]}</h3>
      <span class="category-card-count">${count} variedades</span>
    `;

    card.addEventListener("click", () => {
      openCategory(catKey);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCategory(catKey);
      }
    });

    categoriesGrid.appendChild(card);
  });
}

// Renderiza los tabs de categorías superiores (desplazamiento horizontal)
function renderCategoryTabs() {
  categoryTabs.innerHTML = "";
  Object.keys(CATEGORY_NAMES).forEach(catKey => {
    const tab = document.createElement("button");
    tab.className = "category-tab";
    tab.id = `tab-cat-${catKey}`;
    tab.innerText = CATEGORY_NAMES[catKey];
    tab.addEventListener("click", () => {
      openCategory(catKey);
    });
    categoryTabs.appendChild(tab);
  });
}

// Configura los Event Listeners de la UI
function setupEventListeners() {
  // Botón de Volver
  backBtn.addEventListener("click", goBackToWelcome);

  // Input de búsqueda
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    filterMenu(query);
  });

  // Taps de barra inferior
  tabHome.addEventListener("click", () => {
    goBackToWelcome();
  });

  tabSearch.addEventListener("click", () => {
    if (welcomeScreen.classList.contains("active")) {
      openCategory("tapas"); // abre por defecto
    }
    showingFavorites = false;
    tabFavorites.classList.remove("active");
    tabHome.classList.remove("active");
    tabSearch.classList.add("active");
    
    // Enfocar buscador
    searchBarContainer.classList.add("highlight-search");
    searchInput.focus();
    setTimeout(() => {
      searchBarContainer.classList.remove("highlight-search");
    }, 1000);
  });

  tabFavorites.addEventListener("click", () => {
    showFavoritesList();
  });

  tabInfo.addEventListener("click", () => {
    infoModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Evita scroll
  });

  closeModal.addEventListener("click", () => {
    infoModal.classList.remove("active");
    document.body.style.overflow = "";
  });

  // Cerrar modal al pulsar fuera de su contenido
  infoModal.addEventListener("click", (e) => {
    if (e.target === infoModal) {
      infoModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

// Navegar a una categoría específica
function openCategory(categoryKey) {
  currentActiveCategory = categoryKey;
  showingFavorites = false;

  // Ajustar clases activas
  welcomeScreen.classList.remove("active");
  menuScreen.classList.add("active");

  tabHome.classList.remove("active");
  tabFavorites.classList.remove("active");
  tabSearch.classList.remove("active");

  headerTitle.innerText = CATEGORY_NAMES[categoryKey];

  // Activa el tab superior correspondiente
  document.querySelectorAll(".category-tab").forEach(tab => {
    tab.classList.remove("active");
  });
  const activeTab = document.getElementById(`tab-cat-${categoryKey}`);
  if (activeTab) {
    activeTab.classList.add("active");
    activeTab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  // Limpiar buscador al cambiar de categoría
  searchInput.value = "";

  // Renderizar ítems
  renderItems(MENU_DATA.filter(item => item.category === categoryKey));
  
  // Guardar en la URL para recargas
  window.history.pushState({ category: categoryKey }, "", `?section=${categoryKey}`);
}

// Volver a la pantalla de bienvenida
function goBackToWelcome() {
  welcomeScreen.classList.add("active");
  menuScreen.classList.remove("active");

  tabHome.classList.add("active");
  tabFavorites.classList.remove("active");
  tabSearch.classList.remove("active");

  currentActiveCategory = null;
  showingFavorites = false;

  window.history.pushState({}, "", window.location.pathname);
}

// Renderiza la lista de platos en el contenedor principal
function renderItems(itemsList, customEmptyMessage = "No se encontraron platos.") {
  itemsContainer.innerHTML = "";

  if (itemsList.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-state">
        <i class="far fa-sad-tear empty-icon"></i>
        <p>${customEmptyMessage}</p>
      </div>
    `;
    return;
  }

  itemsList.forEach((item, index) => {
    const isFav = favorites.includes(item.id);
    const itemCard = document.createElement("div");
    itemCard.className = "item-card";
    itemCard.style.animationDelay = `${index * 0.05}s`;

    // Procesamiento dinámico de precios
    let priceHTML = "";
    if (item.prices.unica) {
      priceHTML = `<span class="price-val">${item.prices.unica}</span>`;
    } else if (item.prices.pequeno && item.prices.grande) {
      priceHTML = `
        <div class="price-sizes">
          <div class="price-size-row"><span class="price-label">PEQUEÑO</span> <span class="price-val">${item.prices.pequeno}</span></div>
          <div class="price-size-row"><span class="price-label">GRANDE</span> <span class="price-val">${item.prices.grande}</span></div>
        </div>
      `;
    } else if (item.prices.mediano && item.prices.grande) {
      priceHTML = `
        <div class="price-sizes">
          <div class="price-size-row"><span class="price-label">MEDIANO</span> <span class="price-val">${item.prices.mediano}</span></div>
          <div class="price-size-row"><span class="price-label">GRANDE</span> <span class="price-val">${item.prices.grande}</span></div>
        </div>
      `;
    } else if (item.prices.pequena && item.prices.mediana) {
      priceHTML = `
        <div class="price-sizes">
          <div class="price-size-row"><span class="price-label">PEQUEÑA</span> <span class="price-val">${item.prices.pequena}</span></div>
          <div class="price-size-row"><span class="price-label">MEDIANA</span> <span class="price-val">${item.prices.mediana}</span></div>
        </div>
      `;
    } else if (item.prices.solo && item.prices.menu) {
      priceHTML = `
        <div class="price-sizes">
          <div class="price-size-row"><span class="price-label">INDIV.</span> <span class="price-val">${item.prices.solo}</span></div>
          <div class="price-size-row"><span class="price-label">MENÚ</span> <span class="price-val">${item.prices.menu}</span></div>
        </div>
      `;
    } else if (item.prices.pollo && item.prices.ternera) {
      priceHTML = `
        <div class="price-sizes">
          <div class="price-size-row"><span class="price-label">POLLO</span> <span class="price-val">${item.prices.pollo}</span></div>
          <div class="price-size-row"><span class="price-label">TERNERA</span> <span class="price-val">${item.prices.ternera}</span></div>
        </div>
      `;
    } else if (item.prices.sencillo && item.prices.menu) {
      priceHTML = `
        <div class="price-sizes">
          <div class="price-size-row"><span class="price-label">INDIV.</span> <span class="price-val">${item.prices.sencillo}</span></div>
          <div class="price-size-row"><span class="price-label">MENÚ</span> <span class="price-val">${item.prices.menu}</span></div>
        </div>
      `;
    } else if (item.prices.solo) {
      // Caso específico taco sin menú
      priceHTML = `<span class="price-val">${item.prices.solo}</span>`;
    }

    itemCard.innerHTML = `
      <div class="item-header">
        <h4 class="item-title">
          <span class="item-num">${item.id}.</span> ${item.name}
        </h4>
        <button class="fav-btn ${isFav ? 'active' : ''}" aria-label="Añadir a favoritos" data-id="${item.id}">
          <svg class="heart-icon" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
      </div>
      <p class="item-description">${item.description}</p>
      <div class="item-footer">
        ${priceHTML}
      </div>
    `;

    // Click handler para el botón de favorito
    const favButton = itemCard.querySelector(".fav-btn");
    favButton.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(item.id, favButton);
    });

    itemsContainer.appendChild(itemCard);
  });
}

// Cambiar estado de favorito de un plato
function toggleFavorite(itemId, buttonEl) {
  const index = favorites.indexOf(itemId);
  if (index > -1) {
    favorites.splice(index, 1);
    buttonEl.classList.remove("active");
    showToast("Eliminado de Favoritos");
  } else {
    favorites.push(itemId);
    buttonEl.classList.add("active");
    showToast("Añadido a Favoritos");
  }
  localStorage.setItem("ab_andaluz_favorites", JSON.stringify(favorites));

  // Si estamos en la pestaña de favoritos, re-renderizar para quitar el ítem al instante
  if (showingFavorites) {
    showFavoritesList();
  }
}

// Muestra una lista filtrada por favoritos
function showFavoritesList() {
  showingFavorites = true;
  currentActiveCategory = null;

  welcomeScreen.classList.remove("active");
  menuScreen.classList.add("active");

  tabHome.classList.remove("active");
  tabSearch.classList.remove("active");
  tabFavorites.classList.add("active");

  headerTitle.innerText = "Mis Favoritos";

  // Desactivar todos los tabs de categorías superiores
  document.querySelectorAll(".category-tab").forEach(tab => {
    tab.classList.remove("active");
  });

  searchInput.value = "";

  const favItems = MENU_DATA.filter(item => favorites.includes(item.id));
  renderItems(favItems, "Aún no has añadido ningún plato a tus favoritos. ¡Toca el corazón en cualquier plato para guardarlo!");
}

// Filtra los platos en base a la barra de búsqueda
function filterMenu(query) {
  if (!query) {
    // Si no hay query, volver al estado normal
    if (showingFavorites) {
      showFavoritesList();
    } else if (currentActiveCategory) {
      renderItems(MENU_DATA.filter(item => item.category === currentActiveCategory));
    }
    return;
  }

  const cleanQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  // Buscar en todos los platos si no estamos en una categoría, o en la categoría actual/favoritos
  let baseList = MENU_DATA;
  if (showingFavorites) {
    baseList = MENU_DATA.filter(item => favorites.includes(item.id));
  } else if (currentActiveCategory) {
    baseList = MENU_DATA.filter(item => item.category === currentActiveCategory);
  }

  const filtered = baseList.filter(item => {
    const nameMatch = item.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(cleanQuery);
    const descMatch = item.description.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(cleanQuery);
    const numMatch = item.id.toString() === cleanQuery;
    const catNameMatch = CATEGORY_NAMES[item.category].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(cleanQuery);
    
    return nameMatch || descMatch || numMatch || catNameMatch;
  });

  renderItems(filtered, `No se encontraron platos que coincidan con "${query}".`);
}

// Toast de notificación rápido
function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.className = "show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 2000);
}

// Revisa si hay parámetros de sección en la URL al cargar
function checkUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const section = urlParams.get("section");
  if (section && CATEGORY_NAMES[section]) {
    openCategory(section);
  } else {
    goBackToWelcome();
  }
}

// Manejar los botones de atrás físicos de navegación del navegador
window.addEventListener("popstate", (e) => {
  if (e.state && e.state.category) {
    openCategory(e.state.category);
  } else {
    goBackToWelcome();
  }
});

// Inicializar al cargar el DOM
document.addEventListener("DOMContentLoaded", init);
