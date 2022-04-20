let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let divide = (a,b) => a/b;
let multiply = (a,b) => a*b;

// Describe o context
describe('Unit testing for our dummy aplication',() => {
    context('Math with Positive numbers', () => {
        // It  - Specify
        it('Should add Positive numbers', () => {
            expect(add(1,2)).to.eq(3);
        });
        it('Should subtract Positive numbers', () => {
            expect(subtract(4,2)).to.eq(2);
        });
        it('Should divide Positive numbers', () => {
            expect(divide(4,2)).to.eq(2);
        });
        it('Should multiply Positive numbers', () => {
            expect(multiply(4,2)).to.eq(8);
        });
    });
    describe('Math with Decimal numbers', () => {
        it('Should add Decimal numbers', () => {
            expect(add(2.2,2.2)).to.eq(4.4);
        });
        it('Should subtract Decimal numbers', () => {
            expect(subtract(4.4,2.2)).to.eq(2.2);
        });
    });
});