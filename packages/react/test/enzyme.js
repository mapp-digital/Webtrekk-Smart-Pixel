import Enzyme, { configure, shallow, mount, render } from 'enzyme';

let Adapter;

if (process.env.REACT_VERSION === '14') {
    Adapter = require('enzyme-adapter-react-14');
}
else if (process.env.REACT_VERSION === '15') {
    Adapter = require('enzyme-adapter-react-15');
}
else {
    Adapter = require('enzyme-adapter-react-16');
}

configure({ adapter: new Adapter() });

export { shallow, mount, render };
export default Enzyme;
