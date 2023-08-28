import PropTypes from 'prop-types';
import WebtrekkReactComponent from './WebtrekkReactComponent';

class WebtrekkProductData extends WebtrekkReactComponent {
    constructor() {
        super('product');
    }
}

const PropTypesOfTypesNumberOrString = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
]);

WebtrekkProductData.propTypes = {
    id: PropTypes.string.isRequired,
    action: PropTypes.oneOf([
        'list', 'view', 'basket', 'addToCart', 'deleteFromCart',
        'checkout', 'confirmation', 'addToWishlist', 'deleteFromWishlist'
    ]).isRequired,
    cost: PropTypesOfTypesNumberOrString,
    quantity: PropTypesOfTypesNumberOrString,
    variant: PropTypes.string,
    soldOut: PropTypes.bool,
    parameter: PropTypes.objectOf(PropTypes.string),
    category: PropTypes.objectOf(PropTypes.string),
    sendInstantly: PropTypes.bool
};

WebtrekkProductData.defaultProps = {
    id: null,
    action: null,
    cost: null,
    quantity: null,
    variant: null,
    soldOut: null,
    parameter: null,
    category: null,
    sendInstantly: false
};

export default WebtrekkProductData;
