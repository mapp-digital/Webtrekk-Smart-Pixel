import PropTypes from 'prop-types';
import WebtrekkReactComponent from './WebtrekkReactComponent';

class WebtrekkAdvancedData extends WebtrekkReactComponent {
    constructor() {
        super('advanced');
    }
}

const PropTypesOfTypesNumberOrString = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
]);

WebtrekkAdvancedData.propTypes = {
    forceOldEverId: PropTypes.bool,
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
        droppedRequests: PropTypesOfTypesNumberOrString,
        blacklist: PropTypes.array
    }),
    useHashForDefaultPageName: PropTypes.bool,
    useParamsForDefaultPageName: PropTypes.arrayOf(PropTypes.string),
    requestQueue: PropTypes.shape({
        activated: PropTypes.bool,
        ttl: PropTypesOfTypesNumberOrString,
        resendInterval: PropTypesOfTypesNumberOrString,
        size: PropTypesOfTypesNumberOrString,
        retries: PropTypesOfTypesNumberOrString,
        retriesOption: PropTypesOfTypesNumberOrString
    }),
    requestLimit: PropTypes.shape({
        activated: PropTypes.bool,
        amount: PropTypesOfTypesNumberOrString,
        duration: PropTypesOfTypesNumberOrString
    }),
    userIdentification: PropTypes.shape({
        enableOptOut: PropTypes.bool,
        enableAnonymousFunction: PropTypes.bool,
        anonymousOptIn: PropTypes.bool,
        optOutCookieName: PropTypes.string,
        anonymousCookieName: PropTypes.string,
        suppressParameter: PropTypes.arrayOf(PropTypes.string),
        temporarySessionId: PropTypes.string,
        saveTemporarySessionId: PropTypes.bool
    })
};

WebtrekkAdvancedData.defaultProps = {
    forceOldEverId: null,
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
    requestLimit: {
        activated: null,
        amount: null,
        duration: null
    },
    userIdentification: {
        enableOptOut: null,
        enableAnonymousFunction: null,
        anonymousOptIn: null,
        optOutCookieName: null,
        anonymousCookieName: null,
        suppressParameter: null,
        temporarySessionId: null,
        saveTemporarySessionId: null
    }
};

export default WebtrekkAdvancedData;
