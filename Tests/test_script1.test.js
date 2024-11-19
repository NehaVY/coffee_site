/**
 * @jest-environment jsdom
 */

const { showRecipe } = require('../static/script1.js'); // Adjust the path if necessary

// Mock the DOM elements
beforeEach(() => {
    document.body.innerHTML = `
        <div id="recipe-section" style="display:none;">
            <h2 id="recipe-title"></h2>
            <p id="recipe-text"></p>
        </div>`;
});

test('showRecipe displays the correct recipe', () => {
    const beverage = 'americano';
    const mockRecipes = {
        americano: {
            title: "Americano",
            text: "Dilute a shot of espresso with hot water. Serve in a mug."
        },
    };

    global.recipes = mockRecipes; // Mock the `recipes` object globally

    showRecipe(beverage);

    const title = document.getElementById('recipe-title').textContent;
    const text = document.getElementById('recipe-text').textContent;
    const sectionStyle = document.getElementById('recipe-section').style.display;

    expect(title).toBe(mockRecipes[beverage].title);
    expect(text).toBe(mockRecipes[beverage].text);
    expect(sectionStyle).toBe('block');
});
