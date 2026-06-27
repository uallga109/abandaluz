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

// Fotos de portada de alta calidad para cada categoría
const CATEGORY_IMAGES = {
  tapas: "tapas.jpg",
  kebab_pitas: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80",
  tacos_franceses: "tacofrances.jpg",
  menu_kebab_pizza_turca: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80", // Pizza turca / Lahmacun style
  platos: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80",
  la_brasa: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80",
  menus: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  ensaladas: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80",
  pizzas: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=400&q=80",
  postres_caseros: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80"
};

// Referencias a elementos del DOM
const welcomeScreen = document.getElementById("welcome-screen");
const menuScreen = document.getElementById("menu-screen");
const categoriesGrid = document.getElementById("categories-grid");
const itemsContainer = document.getElementById("items-container");
const categoryTabs = document.getElementById("category-tabs");
const backBtn = document.getElementById("back-btn");
const infoModal = document.getElementById("info-modal");
const closeModal = document.getElementById("close-modal");
const headerTitle = document.getElementById("header-title");

let currentActiveCategory = null;

// Inicialización de la Aplicación
function init() {
  renderCategoriesGrid();
  renderCategoryTabs();
  setupEventListeners();
  checkUrlParams();
}

// Renderiza el Grid de Categorías con imágenes de fondo en la pantalla de inicio
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

    // Aplicar imagen de fondo con degradado para legibilidad del texto
    card.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.85)), url('${CATEGORY_IMAGES[catKey]}')`;

    card.innerHTML = `
      <div class="category-card-content">
        <h3 class="category-card-title">${CATEGORY_NAMES[catKey]}</h3>
        <span class="category-card-count">${count} variedades</span>
      </div>
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

  // Botón de acción en la pantalla de inicio
  const btnWelcomeInfo = document.getElementById("btn-welcome-info");

  if (btnWelcomeInfo) {
    btnWelcomeInfo.addEventListener("click", () => {
      infoModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

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

  // Ajustar clases activas
  welcomeScreen.classList.remove("active");
  menuScreen.classList.add("active");

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

  // Renderizar ítems
  renderItems(MENU_DATA.filter(item => item.category === categoryKey));
  
  // Guardar en la URL para recargas
  window.history.pushState({ category: categoryKey }, "", `?section=${categoryKey}`);
}

// Volver a la pantalla de bienvenida
function goBackToWelcome() {
  welcomeScreen.classList.add("active");
  menuScreen.classList.remove("active");

  currentActiveCategory = null;

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
      </div>
      <p class="item-description">${item.description}</p>
      <div class="item-footer">
        ${priceHTML}
      </div>
    `;

    itemsContainer.appendChild(itemCard);
  });
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
