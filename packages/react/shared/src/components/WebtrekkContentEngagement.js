import React from 'react';
import PropTypes from 'prop-types';
import WebtrekkReactComponent from './data/WebtrekkReactComponent';
import {createRef} from './../polyfillCreateRef';

class WebtrekkContentEngagement extends WebtrekkReactComponent {
    constructor() {
        super('content_engagement');
        this.elementRef = createRef();
    }

    componentDidMount() {
        this.addContentEngagementElement();
    }

    componentDidUpdate() {
        this.componentDidMount();
    }

    render() {
        const children = React.Children.map(this.props.children, (element) => {
            return React.cloneElement(element, {
                ref: this.elementRef
            });
        });

        return children[0];
    }
}

const PropTypesOfTypesNumberOrString = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
]);

WebtrekkContentEngagement.propTypes = {
    selector: PropTypes.string,
    name: PropTypes.string.isRequired,
    percentageStepsInAnalytics: PropTypesOfTypesNumberOrString,
    sendContentEngagement: PropTypes.oneOf([0, 1, 2, '0', '1', '2']),
    percentageReached: PropTypesOfTypesNumberOrString,
    secondsReached: PropTypesOfTypesNumberOrString,
    largeBrowserResolution: PropTypesOfTypesNumberOrString,
    largeBrowserSeconds: PropTypesOfTypesNumberOrString,
    mediumBrowserResolution: PropTypesOfTypesNumberOrString,
    mediumBrowserSeconds: PropTypesOfTypesNumberOrString,
    smallBrowserResolution: PropTypesOfTypesNumberOrString,
    smallBrowserSeconds: PropTypesOfTypesNumberOrString
};

WebtrekkContentEngagement.defaultProps = {
    selector: null,
    name: null,
    percentageStepsInAnalytics: null,
    sendContentEngagement: null,
    percentageReached: null,
    secondsReached: null,
    largeBrowserResolution: null,
    largeBrowserSeconds: null,
    mediumBrowserResolution: null,
    mediumBrowserSeconds: null,
    smallBrowserResolution: null,
    smallBrowserSeconds: null
};

export default WebtrekkContentEngagement;
