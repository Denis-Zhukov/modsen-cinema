describe('Trailer', () => {
    it('video exists', () => {
        cy.visit('/');
        cy.get('video + button')
            .scrollIntoView()
            .should('be.visible');
    });

    it('video play', () => {
        cy.visit('/');

        cy.get('video')
            .scrollIntoView();

        cy.get('video + button')
            .realClick();

        cy.get('video + button')
            .should('not.exist');

        cy.get('video')
            .scrollIntoView()
            .should('exist');
    });
});
