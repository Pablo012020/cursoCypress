describe('Sesión de Retry-Ability', function(){

//Hook beforeEach
    beforeEach(function(){
        cy.visit('http://localhost:8888/#/'); // comando

        cy.get('.new-todo') // comando -> Obtener uno o mas elementos del DOM
        .type('todo-A{enter}') // comando -> escribir
        .type('todo-B{enter}') // comando -> escribir
    })

    it('Debe crear dos items', () => {
        cy.get('.todo-list li', {timeout:20000}) // comando
        .should('have.length',2) // Assertion
    });

    it('Debe contener el texto indicado', () => {
        cy.get('.todo-list li', {timeout:20000}) // comando
        .should('have.length',2) // Assertion
        .and($li => {
            expect($li.get(0).textContent, 'first-item').to.eq('todo-A')
            expect($li.get(1).textContent, 'second-item').to.eq('todo-B')
        })
    });

})