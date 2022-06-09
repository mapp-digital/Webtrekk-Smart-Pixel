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
else if (process.env.REACT_VERSION === '17') {
    Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
}
else {
    Adapter = require('@cfaester/enzyme-adapter-react-18').default;
}

configure({adapter: new Adapter()});

export {configure, shallow, mount, render};
export default Enzyme;
