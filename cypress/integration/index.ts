describe('画面', () => {
    it('タイトル', () => {
        cy.visit('/')

        cy.title()
            .should('eq', 'tttls1.3 test server')
    })

    it('リンク', () => {
        cy.visit('/')

        cy.get('a')
            .should('have.text', 'tttls1.3')
            .should('have.attr', 'href')
            .and('include', 'https://github.com/thekuwayama/tttls1.3')
    })
})
