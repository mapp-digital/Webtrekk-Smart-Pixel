import PropTypes from 'prop-types';
import WebtrekkReactComponent from './WebtrekkReactComponent';

class WebtrekkPageData extends WebtrekkReactComponent {
    constructor() {
        super('page');
    }
}

WebtrekkPageData.propTypes = {
    name: PropTypes.string,
    search: PropTypes.string,
    numberSearchResults: PropTypes.number,
    errorMessages: PropTypes.string,
    paywall: PropTypes.bool,
    articleTitle: PropTypes.string,
    contentTags: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    length: PropTypes.string,
    daysSincePublication: PropTypes.number,
    testVariant: PropTypes.string,
    testExperiment: PropTypes.string,
    parameter: PropTypes.objectOf(PropTypes.string),
    category: PropTypes.objectOf(PropTypes.string),
    goal: PropTypes.objectOf(PropTypes.string),
    sendInstantly: PropTypes.bool
};

WebtrekkPageData.defaultProps = {
    name: null,
    search: null,
    numberSearchResults: null,
    errorMessages: null,
    paywall: null,
    articleTitle: null,
    contentTags: null,
    title: null,
    type: null,
    length: null,
    daysSincePublication: null,
    testVariant: null,
    testExperiment: null,
    parameter: null,
    category: null,
    goal: null,
    sendInstantly: false
};

export default WebtrekkPageData;
