import Enzyme, {configure, shallow, mount, render} from 'enzyme';

let Adapter;

if (process.env.NEXT_VERSION === '7'
    || process.env.NEXT_VERSION === '8'
    || process.env.NEXT_VERSION === '9'
    || process.env.NEXT_VERSION === '10'
) {
    Adapter = require('enzyme-adapter-react-16');
}
else {
    Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
}

configure({adapter: new Adapter()});

export {shallow, mount, render};
export default Enzyme;
