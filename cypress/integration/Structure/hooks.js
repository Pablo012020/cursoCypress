// Hooks --> Mocha

/* --
1. before() --> UNA VEZ,  al inicio
2. beforeEach() --> Antes de cada test
3. TEST EXECUTION
4. afterEach() --> Despues de cada test
5. beforeEach()
6. TEST EXECUTION
7. afterEach()
8. after() --> UNA VEZ, al final
*/

describe('Demo de hooks', function(){
    before(function(){
        cy.log('Before')
    });
    beforeEach(function(){
        cy.log('Before Each')
    });
    it('should be test #1', function(){
        console.log('test #1')
    });
    it.only('should be test #2', function(){
        console.log('test #2')
    });
    it('should be test #3', function(){
        console.log('test #3')
    });
    afterEach(function(){
        cy.log('Aftar Each')
    });
    after(function(){
        cy.log('After')
    });
});