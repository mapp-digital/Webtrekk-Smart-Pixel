import React from 'react';
import PropTypes from 'prop-types';
import WebtrekkReactComponent from './Data/WebtrekkReactComponent';
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

WebtrekkContentEngagement.propTypes = {
    selector: PropTypes.string,
    name: PropTypes.string,
    percentageStepsInAnalytics: PropTypes.number,
    sendContentEngagement: PropTypes.oneOf([0, 1, 2]),
    percentageReached: PropTypes.number,
    secondsReached: PropTypes.number,
    largeBrowserResolution: PropTypes.number,
    largeBrowserSeconds: PropTypes.number,
    mediumBrowserResolution: PropTypes.number,
    mediumBrowserSeconds: PropTypes.number,
    smallBrowserResolution: PropTypes.number,
    smallBrowserSeconds: PropTypes.number
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
