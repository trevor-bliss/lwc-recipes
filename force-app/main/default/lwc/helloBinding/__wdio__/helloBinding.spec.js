describe('<example-app /> tests', () => {
    it('should match the h1 text(Hello LWC!) when click in the button', () => {
        browser.url(URL);
        const element = $('.foo');
        console.log(element.getText());
        expect(element.getText()).toBe('Hello LWC!');
    });
});
