import PropTypes from 'prop-types';
import WebtrekkReactComponent from './WebtrekkReactComponent';

class WebtrekkInitData extends WebtrekkReactComponent {
    constructor() {
        super('init');
    }
}

WebtrekkInitData.propTypes = {
    trackId: PropTypes.string,
    trackDomain: PropTypes.string,
    domain: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.instanceOf(RegExp),
        PropTypes.arrayOf(PropTypes.instanceOf(RegExp))
    ]),
    cookie: PropTypes.oneOf(['1', '3'])
};

WebtrekkInitData.defaultProps = {
    trackId: null,
    trackDomain: null,
    domain: null,
    cookie: null
};

export default WebtrekkInitData;
