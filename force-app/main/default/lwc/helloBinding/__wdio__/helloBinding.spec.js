describe('<example-app /> tests',() => {
    it('should match the h1 text(Hello LWC!) when click in the button', () => {
        browser.url(URL);
        const button = $('button');
        button.click();
        expect($('h1').getText()).toBe('Hello LWC!');
    }); 
});