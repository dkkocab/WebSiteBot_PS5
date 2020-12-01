import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';
import ShallowRenderer from "react-test-renderer/shallow";
import Header from "../components/Header";
import Login from "../components/Login";
import Main from "../components/Main";
import Footer from "../components/Footer";

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// By Isamu Poy
// for this page, we focus on testing whether the page is going to be rendered successfully
// because this page contains many elements, I felt it would be efficient to only check the 
// generation of the entire page. 

it('renders learn react link', () => {
  shallow(<App />);
});


// Following TEST CASES is written by Hong//

// the following code is to test whether the main page of web has been generate or render successfully.

// describe statement is an optional method, which is for grouping any number of it or test statements.
// it or test statement is to pass a function to this method, and the test runner would execute that function as a block of tests.
// expect statement is condition checking that the test needs to pass. It compares the received parameter to the matcher.
describe('App render', () => {
  it('should render a top level div', () => {
    //shallowRenderer is a “place” to render the component you’re testing, and from which you can extract the component’s output.
    // it only renders a single level deep
    // test components isolated from how their children are implemented.
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    console.log(result.type);
    console.log(result.props.children);
  });

  it("renders without crashing", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
  });


  describe('child Header', () => {
    it("App render with Header components", () => {
      const renderer = new ShallowRenderer();
      renderer.render(<App />);
      const test = renderer.getRenderOutput();
      console.log(test.props.children)
      const childrenLink = test.props.children.filter(c => c.type === Header);
      expect(childrenLink.length).toBe(1);
    })

    // test a child components, whether the default value is false
    it("App render with Header initial value", () => {
      const renderer = new ShallowRenderer();
      renderer.render(<App />);
      const test = renderer.getRenderOutput();

      const childrenLink = test.props.children.filter(c => c.type === Header);
      expect(childrenLink[0].props.isLoggedIn).toBe(false)
    })

  })


  it("App render with Login components", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const test = renderer.getRenderOutput();
    const childrenLink = test.props.children.filter(c => c.type === Login);
    expect(childrenLink.length).toBe(1);
  })

  it("App render with Main components", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const test = renderer.getRenderOutput();
    const childrenLink = test.props.children.filter(c => c.type === Main);
    expect(childrenLink.length).toBe(1);
  })

  it("App render with Footer components", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const test = renderer.getRenderOutput();
    const childrenLink = test.props.children.filter(c => c.type === Footer);
    expect(childrenLink.length).toBe(1);
  })
})
