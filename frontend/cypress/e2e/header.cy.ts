describe('Header', () => {
    it('should have a header', () => {
        cy.visit('/');
        cy.get('header')
            .should('be.visible');
    });

    it('sign up click', () => {
        cy.visit('/');
        cy.contains('Register')
            .should('not.exist');

        cy.contains('Sign up')
            .realMouseDown({ button: 'left' })
            .wait(500)
            .should('have.attr', 'style')
            .should('contain', 'transform: scale(0.95)');

        cy.contains('Sign up')
            .click();

        cy.contains('Register')
            .should('be.visible');
    });

    it('sign in click', () => {
        cy.visit('/');
        cy.contains('Login')
            .should('not.exist');

        cy.contains('Sign in')
            .realMouseDown({ button: 'left' })
            .wait(500)
            .should('have.attr', 'style')
            .should('contain', 'transform: scale(0.95)');

        cy.contains('Sign in')
            .click();

        cy.contains('Login')
            .should('be.visible');
    });

    it('sign up hover', () => {
        cy.visit('/');
        cy.contains('Sign up')
            .realHover()
            .wait(500)
            .should('have.attr', 'style')
            .should('contain', 'transform: scale(1.05)');
    });

    it('sign in hover', () => {
        cy.visit('/');
        cy.contains('Sign in')
            .realHover()
            .wait(500)
            .should('have.attr', 'style')
            .should('contain', 'transform: scale(1.05)');
    });

    it('settings hover', () => {
        cy.visit('/');
        cy.get('a[href="/?form=settings"]>div')
            .realHover()
            .wait(500)
            .should('have.attr', 'style')
            .should('contain', 'transform: rotate(30deg)');
    });

    it('nav items click', () => {
        cy.visit('/');

        cy.get('nav a:first-child')
            .realMouseDown({ button: 'left' })
            .wait(500)
            .should('have.attr', 'style')
            .should('contain', 'transform: scale(0.95)');
    });

    it('nav items hover', () => {
        cy.visit('/');
        cy.get('nav a:first-child')
            .realHover()
            .wait(500)
            .should('have.attr', 'style')
            .should('contain', 'transform: scale(1.05)');

        cy.get('nav a:first-child')
            .realMouseDown({ button: 'left' })
            .wait(500)
            .should('have.attr', 'style')
            .should('contain', 'transform: scale(0.95)');
    });
});
