describe('<c-hello-binding />', () => {
    it('outputs "Hello, World!" as default text', () => {
        browser.url(URL);
        const element = $('<lwc-hello-binding>');
        expect(element.getText()).toContain('Hello, World!');
    });

    it('updates greeting on input change', () => {
        browser.url(URL);
        const element = $('<lwc-hello-binding>');
        const input = element.$('<lightning-input>').shadow$('input');

        input.clearValue('');
        input.setValue('meep');

        // querying by tag like this seems to bypass shadow boundaries?
        const output = element.$('<p>');
        expect(output.getText()).toBe('Hello, meep!');
    });
});
