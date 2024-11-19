const recipes = {
    espresso: {
        title: "Espresso",
        text: `1. Preheat your espresso machine.
        \n2. Measure 18–20 grams of finely-ground coffee.
        \n3. Tamp the coffee firmly and evenly into the portafilter.
        \n4. Attach the portafilter to the machine and start brewing.
        \n5. Brew for 25–30 seconds to extract a 1–1.5 oz shot.
        \n6. Serve immediately in a small cup.`
    },
    americano: {
        title: "Americano",
        text: `1. Brew a single or double shot of espresso (1–1.5 oz).
\n2. Heat 6–8 oz of water to about 90–95°C (195–205°F).
\n3. Pour the hot water into a mug.
\n4. Slowly add the espresso shot to the hot water.
\n5. Stir gently and serve immediately.`
    },
    latte: {
        title: "Latte",
        text: `1. Brew a single or double shot of espresso (1–1.5 oz).
\n2. Steam 6–8 oz of milk to about 65°C (150°F) until frothy.
\n3. Pour the steamed milk over the espresso in a tall mug.
\n4. Add a thin layer of milk foam on top.
\n5. Optionally sprinkle cinnamon or cocoa powder for garnish.
\n6. Serve hot.`
    },
    brewed_coffee: {
        title: "Brewed Coffee",
        text: `1. Measure 2 tablespoons of ground coffee for every 6 oz of water.
\n2. Place the coffee grounds in a drip coffee maker or French press.
\n3. Heat water to 90–95°C (195–205°F).
\n4. Pour the hot water over the coffee grounds and let it brew:
   - Drip coffee maker: Follow machine instructions.
   - French press: Steep for 4 minutes, then press the plunger down.
\n5. Pour the brewed coffee into a cup and serve.`
    },
    steeped_tea: {
        title: "Steeped Tea",
        text: `1. Heat water to about 90–95°C (195–205°F).
\n2. Place a tea bag or 1 teaspoon of loose tea leaves in a cup.
\n3. Pour 6–8 oz of hot water over the tea.
\n4. Let the tea steep for 3–5 minutes.
\n5. Remove the tea bag or strain the leaves. Serve hot.`
    },
    tropical_green_tea: {
        title: "Tropical Green Tea",
        text: `1. Heat water to around 80°C (175°F).
\n2. Add 1 teaspoon of green tea leaves or a tea bag to a cup.
\n3. Pour 6 oz of hot water over the tea.
\n4. Steep the tea for 2–3 minutes and then remove the leaves or tea bag.
\n5. Add a slice of pineapple or 1 teaspoon of honey for a tropical flavor.
\n6. Serve hot.`
    },
    mocha_latte: {
        title: "Mocha Latte",
        text: `1. Brew a single or double shot of espresso (1–1.5 oz).
\n2. Steam 6–8 oz of milk to about 65°C (150°F).
\n3. Add 1–2 tablespoons of chocolate syrup to a mug.
\n4. Pour the espresso over the chocolate syrup and stir well.
\n5. Add the steamed milk to the mug and mix gently.
\n6. Top with whipped cream and sprinkle cocoa powder if desired.
\n7. Serve immediately.`
    }
};


function showRecipe(beverage) {
    const recipeSection = document.getElementById("recipe-section");
    const recipeTitle = document.getElementById("recipe-title");
    const recipeText = document.getElementById("recipe-text");

    const recipe = recipes[beverage];
    recipeTitle.textContent = recipe.title;
    recipeText.innerHTML = recipe.text.replace(/\n/g, "<br>");

    recipeSection.style.display = "block";
}
// Export the function for testing
module.exports = { showRecipe };