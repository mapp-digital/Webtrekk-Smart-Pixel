import Enzyme, {configure, shallow, mount, render} from 'enzyme';

let Adapter;

if (process.env.REACT_VERSION === '14') {
    Adapter = require('enzyme-adapter-react-14');
}
else if (process.env.REACT_VERSION === '15') {
    Adapter = require('enzyme-adapter-react-15');
}
else if (process.env.REACT_VERSION === '16') {
    Adapter = require('enzyme-adapter-react-16');
}
else {
    Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
}

configure({adapter: new Adapter()});

export {configure, shallow, mount, render};
export default Enzyme;
