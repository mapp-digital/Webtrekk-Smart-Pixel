import PropTypes from 'prop-types';
import WebtrekkReactComponent from './WebtrekkReactComponent';

class WebtrekkSessionData extends WebtrekkReactComponent {
    constructor() {
        super('session');
    }
}

WebtrekkSessionData.propTypes = {
    loginStatus: PropTypes.string,
    parameter: PropTypes.objectOf(PropTypes.string),
    sendInstantly: PropTypes.bool
};

WebtrekkSessionData.defaultProps = {
    loginStatus: null,
    parameter: null,
    sendInstantly: false
};

export default WebtrekkSessionData;
