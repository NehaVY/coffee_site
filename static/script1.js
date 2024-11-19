const recipes = {
    espresso: {
        title: "Espresso",
        text: "Brew finely-ground coffee with hot water using an espresso machine. Serve in a small cup."
    },
    americano: {
        title: "Americano",
        text: "Dilute a shot of espresso with hot water. Serve in a mug."
    },
    latte: {
        title: "Latte",
        text: "Mix one shot of espresso with steamed milk. Add milk foam on top."
    },
    brewed_coffee: {
        title: "Brewed Coffee",
        text: "Use a drip coffee maker or French press to brew ground coffee with hot water."
    },
    steeped_tea: {
        title: "Steeped Tea",
        text: "Steep a tea bag in hot water for 3-5 minutes. Serve hot."
    },
    tropical_green_tea: {
        title: "Tropical Green Tea",
        text: "Brew green tea and add a slice of pineapple or a hint of honey for a tropical flavor."
    },
    mocha_latte: {
        title: "Mocha Latte",
        text: "Mix espresso with steamed milk and chocolate syrup. Top with whipped cream."
    }
};

function showRecipe(beverage) {
    const recipeSection = document.getElementById("recipe-section");
    const recipeTitle = document.getElementById("recipe-title");
    const recipeText = document.getElementById("recipe-text");

    const recipe = recipes[beverage];
    recipeTitle.textContent = recipe.title;
    recipeText.textContent = recipe.text;

    recipeSection.style.display = "block";
}
module.exports = { showRecipe };