import {WAIT_BEFORE_SCREENSHOT} from './utils';

describe("Editor's color picker", () => {
    beforeEach(() => {
        cy.viewport(1400, 720);
        cy.goToDemoPage('components/color-picker');
        cy.hideHeader();
    });

    it('opened color picker', () => {
        cy.get('#dropdown').findByAutomationId('tui-doc-example').as('wrapper');
        cy.get('@wrapper')
            .scrollIntoView()
            .findByAutomationId('color-picker__button')
            .click();

        cy.get('@wrapper')
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot('1-open-color-picker');
    });
});
