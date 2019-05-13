import { createElement } from 'lwc';
import Hello from 'c/hello';

describe('c-hello', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        jest.clearAllMocks();
    });

    it('displays greeting', () => {
        const mockGeolocation = {
            getCurrentPosition: jest.fn().mockImplementation(success =>
                Promise.resolve(
                    success({
                        coords: {
                            latitude: 10,
                            longitude: 10
                        }
                    })
                )
            )
        };

        navigator.geolocation = mockGeolocation;

        // Create element
        const element = createElement('c-hello', {
            is: Hello
        });
        document.body.appendChild(element);

        // Verify displayed greeting
        const div = element.shadowRoot.querySelector('div');
        expect(div.textContent).toBe('Hello, World!');
    });

    it('foo', () => {
        const element = createElement('c-hello', {
            is: Hello
        });
        document.body.appendChild(element);
        expect(1).toBe(1);
    });
});
