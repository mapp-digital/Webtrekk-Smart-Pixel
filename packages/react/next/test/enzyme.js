import Enzyme, {configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// if (process.env.NEXT_VERSION === '7') {
//    Adapter = require('enzyme-adapter-react-14');
// }
// else if (process.env.NEXT_VERSION === '8') {
//    Adapter = require('enzyme-adapter-react-15');
// }
// else {
//    Adapter = require('enzyme-adapter-react-16');
// }

configure({adapter: new Adapter()});

export {shallow, mount, render};
export default Enzyme;
