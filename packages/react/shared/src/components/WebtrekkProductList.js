import React from 'react';
import PropTypes from 'prop-types';
import WebtrekkReactComponent from './data/WebtrekkReactComponent';
import {createRef} from './../polyfillCreateRef';

class WebtrekkProductList extends WebtrekkReactComponent {
    constructor() {
        super('product_list_tracking');
        this.elementRef = createRef();
    }

    componentDidMount() {
        this.addProductListElement();
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

WebtrekkProductList.propTypes = {
    selector: PropTypes.string,
    id: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    cost: PropTypes.number,
    quantity: PropTypes.number,
    variant: PropTypes.string,
    soldOut: PropTypes.bool,
    category: PropTypes.objectOf(PropTypes.string),
    parameter: PropTypes.objectOf(PropTypes.string)
};

WebtrekkProductList.defaultProps = {
    selector: null,
    id: null,
    position: null,
    cost: null,
    quantity: null,
    variant: null,
    soldOut: null,
    category: null,
    parameter: null
};

export default WebtrekkProductList;
