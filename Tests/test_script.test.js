/**
 * @jest-environment jsdom
 */

const { showRecipe } = require('../static/script.js');

// Mock the DOM elements
beforeEach(() => {
    document.body.innerHTML = `
        <div id="recipe-section" style="display:none;">
            <h2 id="recipe-title"></h2>
            <p id="recipe-text"></p>
        </div>`;
});

test('showRecipe displays the correct recipe', () => {
    const beverage = 'espresso';
    const mockRecipes = {
        espresso: {
            title: "Espresso",
            text: `1. Preheat your espresso machine.
        \n2. Measure 18–20 grams of finely-ground coffee.
        \n3. Tamp the coffee firmly and evenly into the portafilter.
        \n4. Attach the portafilter to the machine and start brewing.
        \n5. Brew for 25–30 seconds to extract a 1–1.5 oz shot.
        \n6. Serve immediately in a small cup.`
        },
    };

    global.recipes = mockRecipes; // Mock the `recipes` object globally

    showRecipe(beverage);

    const title = document.getElementById('recipe-title').textContent;
    const text = document.getElementById('recipe-text').innerHTML;
    const sectionStyle = document.getElementById('recipe-section').style.display;

    expect(title).toBe(mockRecipes[beverage].title);
    expect(text).toBe(mockRecipes[beverage].text.replace(/\n/g, "<br>")); // Match transformed text
    expect(sectionStyle).toBe('block');
});
