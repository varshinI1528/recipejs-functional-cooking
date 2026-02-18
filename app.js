const recipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    time: 25,
    difficulty: "easy",
    description: "Quick pasta tossed in creamy garlic sauce.",
    category: "pasta"
  },
  {
    id: 2,
    title: "Chicken Curry",
    time: 60,
    difficulty: "medium",
    description: "Classic spiced chicken curry with rich gravy.",
    category: "curry"
  },
  {
    id: 3,
    title: "Avocado Salad",
    time: 15,
    difficulty: "easy",
    description: "Fresh avocado salad with lemon dressing.",
    category: "salad"
  },
  {
    id: 4,
    title: "Beef Wellington",
    time: 90,
    difficulty: "hard",
    description: "Tender beef wrapped in pastry and baked.",
    category: "meat"
  },
  {
    id: 5,
    title: "Vegetable Stir Fry",
    time: 30,
    difficulty: "medium",
    description: "Colorful veggies tossed in savory sauce.",
    category: "vegetarian"
  },
  {
    id: 6,
    title: "Homemade Pizza",
    time: 75,
    difficulty: "hard",
    description: "From-scratch dough with classic toppings.",
    category: "pizza"
  },
  {
    id: 7,
    title: "Tomato Soup",
    time: 35,
    difficulty: "easy",
    description: "Comforting tomato soup with herbs.",
    category: "soup"
  },
  {
    id: 8,
    title: "Pad Thai",
    time: 45,
    difficulty: "medium",
    description: "Thai noodles with peanuts and lime.",
    category: "noodles"
  }
];

// DOM Selection

const recipeContainer = document.querySelector("#recipe-container");

// Create Recipe Card

const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>

      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">
          ${recipe.difficulty}
        </span>
      </div>

      <p>${recipe.description}</p>
    </div>
  `;
};

// Render Recipes

const renderRecipes = (recipesArray) => {
  const cards = recipesArray
    .map(recipe => createRecipeCard(recipe))
    .join("");

  recipeContainer.innerHTML = cards;
};

// Initialize App

renderRecipes(recipes);
