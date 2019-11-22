import PropTypes from 'prop-types';
import WebtrekkReactComponent from './WebtrekkReactComponent';

class WebtrekkAdvancedData extends WebtrekkReactComponent {
    constructor() {
        super('advanced');
    }
}

WebtrekkAdvancedData.propTypes = {
    secureCookie: PropTypes.bool,
    optOutName: PropTypes.string,
    requestObfuscation: PropTypes.bool,
    execCDB: PropTypes.bool,
    useCDBCache: PropTypes.bool,
    useHashForDefaultPageName: PropTypes.bool,
    useParamsForDefaultPageName: PropTypes.arrayOf(PropTypes.string),
    requestQueue: PropTypes.shape({
        activated: PropTypes.bool,
        ttl: PropTypes.number,
        resendInterval: PropTypes.number,
        size: PropTypes.number
    })
};

WebtrekkAdvancedData.defaultProps = {
    secureCookie: null,
    optOutName: null,
    requestObfuscation: null,
    execCDB: null,
    useCDBCache: null,
    useHashForDefaultPageName: null,
    useParamsForDefaultPageName: null,
    requestQueue: {
        activated: null,
        ttl: null,
        resendInterval: null,
        size: null
    }
};

export default WebtrekkAdvancedData;
