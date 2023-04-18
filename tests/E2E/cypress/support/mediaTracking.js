

Cypress.Commands.add("interceptPlayRequest", () => {
	cy.intercept("**/123123123123123/wt?p=*&mk=play*").as("playTrackRequest");
});

Cypress.Commands.add("interceptPauseRequest", () => {
	cy.intercept("**/123123123123123/wt?p=*&mk=pause*").as("pauseTrackRequest");
});

Cypress.Commands.add("interceptPosRequest", () => {
	cy.intercept("**/123123123123123/wt?p=*&mk=pos*").as("posTrackRequest");
});

Cypress.Commands.add("interceptSeekRequest", () => {
	cy.intercept("**/123123123123123/wt?p=*&mk=seek*").as("seekTrackRequest");
});

Cypress.Commands.add("interceptEofRequest", () => {
	cy.intercept("**/123123123123123/wt?p=*&mk=eof*").as("eofTrackRequest");
});

Cypress.Commands.add("interceptMediaRequests", () => {
	cy.interceptPlayRequest();
    cy.interceptPauseRequest();
    cy.interceptPosRequest();
    cy.interceptSeekRequest();
    cy.interceptEofRequest();
});


