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
    sendViaSDK: PropTypes.bool,
    sendViaServer: PropTypes.shape({
        activated: PropTypes.bool,
        serverDomain: PropTypes.string,
        serverPath: PropTypes.string,
        droppedRequests: PropTypes.number,
        blacklist: PropTypes.array
    }),
    useHashForDefaultPageName: PropTypes.bool,
    useParamsForDefaultPageName: PropTypes.arrayOf(PropTypes.string),
    requestQueue: PropTypes.shape({
        activated: PropTypes.bool,
        ttl: PropTypes.number,
        resendInterval: PropTypes.number,
        size: PropTypes.number
    }),
    userIdentification: PropTypes.shape({
        enableOptOut: PropTypes.bool,
        optOutCookieName: PropTypes.string,
        suppressParameter: PropTypes.arrayOf(PropTypes.string)
    })
};

WebtrekkAdvancedData.defaultProps = {
    secureCookie: null,
    optOutName: null,
    requestObfuscation: null,
    execCDB: null,
    useCDBCache: null,
    sendViaSDK: null,
    sendViaServer: {
        activated: null,
        serverDomain: null,
        serverPath: null,
        droppedRequests: null,
        blacklist: null
    },
    useHashForDefaultPageName: null,
    useParamsForDefaultPageName: null,
    requestQueue: {
        activated: null,
        ttl: null,
        resendInterval: null,
        size: null
    },
    userIdentification: {
        enableOptOut: null,
        optOutCookieName: null,
        suppressParameter: null
    }
};

export default WebtrekkAdvancedData;
