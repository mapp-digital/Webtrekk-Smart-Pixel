import PropTypes from 'prop-types';
import WebtrekkReactComponent from './WebtrekkReactComponent';

class WebtrekkInitData extends WebtrekkReactComponent {
    constructor() {
        super('init');
    }
}

WebtrekkInitData.propTypes = {
    trackId: PropTypes.string.isRequired,
    trackDomain: PropTypes.string.isRequired,
    domain: PropTypes.arrayOf(PropTypes.string),
    cookie: PropTypes.oneOf(['1', '3'])
};

WebtrekkInitData.defaultProps = {
    trackId: null,
    trackDomain: null,
    domain: null,
    cookie: null
};

export default WebtrekkInitData;
