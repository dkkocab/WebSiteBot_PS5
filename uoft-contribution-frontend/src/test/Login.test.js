import React from 'react';
import { render } from '@testing-library/react';
import Login from '../components/Login';
import App from "../components/App";

import add from '../components/Test';

import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';



// describe is test suite, it is test case
describe('test add function', () => {
    it('1 + 1 = 2', () => {
        const result = add(1,1);
        expect(result).toBe(2);
    })
});

describe('Login Form', () => {
    it('should render a top level div', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<Login />);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
    });

    // it('should render 3 Link', () => {
    //     const renderer = new ShallowRenderer();
    //     renderer.render(<Header />);
    //     const result = renderer.getRenderOutput();
    //     const childrenLink = result.props.children.filter(c => c.type === Link);
    //     expect(childrenLink.length).toBe(3);
    // });
});


// let container = null;
// beforeEach(() => {
//     // setup a DOM element as a render target
//     container = document.createElement("div");
//     document.body.appendChild(container);
// });
//
// afterEach(() => {
//     // cleanup on exiting
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });
//
//
// describe('test login', function() {
//
//     it('should ...', function() {
//         const { getByText } = render(<Login />);
//         const linkElement = getByText(//i);
//         expect(linkElement).toBeInTheDocument();
//     });
// });
//
//
// it("renders with or without a name", () => {
//     act(() => {
//         render(<Login />, container);
//     });
//     expect(container.textContent).toBe("Sign In");
//
//     act(() => {
//         render(<Login name="Jenny" />, container);
//     });
//     expect(container.textContent).toBe("Jenny");
//
//     act(() => {
//         render(<Login name="Jenny" />, container);
//     });
//     expect(container.textContent).toBe("Jenny");
// });