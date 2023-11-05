describe(`E2E Test`, () => {
  it(`Types a name, selects from dropdown, and checks history log`, () => {
    // a dropdown for selecting choices, and a button to submit.

    // Visit the page where the form is located
    cy.visit(`https://it3049c-lively-fa23.github.io/rock-paper-scissors-BurntBrownBoi/`);

    // Type your name into the input field
    const yourName = `Moatiz`;
    cy.get(`input[name="username"]`).type(yourName);

    // Click the submit button
    cy.get(`button[id="start-game-button"]`).click();
    
    // Select a choice from the dropdown
    cy.get(`select[name="user-selection"]`).select(`rock`, `paper`, `scissors`);

    // Click the submit button
    cy.get(`button[id="go-button"]`).click();

    // Wait for the history log to update
    cy.get(`p[id="game-history"]`).should(`contain`, yourName);

    const expectedTriesCount = 0;
    cy.get(`p[id="game-history"] li`).should(`have.length`, expectedTriesCount);

  });
});
