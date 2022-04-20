describe("Demo Location", function(){
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/');
    });

    it('Should have tittle Swag Labs', function() {
        cy.title().should('eq','Swag Labs');
    });

    it('URL should be https://www.saucedemo.com/', function() {
        cy.url().should('eq','https://www.saucedemo.com/');
    });

    it('Sould use HTTPS', function() {
        cy.location('protocol').should('contains','https');
    });

    it('Sould have Hostname www.saucedemo.com', function() {
        cy.location('hostname').should('eq','www.saucedemo.com');
    });

    it('Sould redirect to /inventory.html', function() {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.location('pathname').should('eq','/inventory.html');
        cy.url().should('eq','https://www.saucedemo.com/inventory.html');
    });
});