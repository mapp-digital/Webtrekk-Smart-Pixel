import React from 'react';
import PropTypes from 'prop-types';
import WebtrekkReactComponent from './Data/WebtrekkReactComponent';
import {createRef} from './../polyfillCreateRef';

class WebtrekkTeaser extends WebtrekkReactComponent {
    constructor() {
        super('teaser_tracking');
        this.elementRef = createRef();
    }

    componentDidMount() {
        this.addTeaserElement();
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

WebtrekkTeaser.propTypes = {
    selector: PropTypes.string,
    name: PropTypes.string.isRequired,
    rank: PropTypes.string,
    content: PropTypes.string,
    variant: PropTypes.string,
    seen: PropTypes.bool,
    type: PropTypes.oneOf(['view', 'click', 'product']),
    goal: PropTypes.oneOf(['order', 'goal', 'both']),
    value: PropTypes.string
};

WebtrekkTeaser.defaultProps = {
    selector: null,
    name: null,
    rank: null,
    content: null,
    variant: null,
    seen: null,
    type: null,
    goal: null,
    value: null
};

export default WebtrekkTeaser;
