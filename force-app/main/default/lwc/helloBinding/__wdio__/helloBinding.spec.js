describe('<c-hello-binding />', () => {
    // it('outputs "Hello, World!" as default text', () => {
    //     browser.url(URL);
    //     const element = $('<lwc-hello-binding>');
    //     expect(element.getText()).toContain('Hello, World!');
    // });

    it('updates greeting on input change', () => {
        browser.url(URL);
        const element = $('<lwc-hello-binding>');
        const card = element.$('<lightning-card>');
        console.log('card: ', card.getText());
        const lightningInput = card.$('<lightning-input>');
        console.log('lightningInput: ', lightningInput);
        expect(lightningInput.getText()).toContain('Name');

        const input = lightningInput.shadow$('input');
        input.setValue('meep');
        browser.debug();
        console.log('element: ', element.getText());

        const output = element.$('p');
        expect(output.getText()).toContain('zzz');
    });
});
