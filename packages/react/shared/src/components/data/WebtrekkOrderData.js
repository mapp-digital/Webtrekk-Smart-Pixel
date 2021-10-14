import PropTypes from 'prop-types';
import WebtrekkReactComponent from './WebtrekkReactComponent';

class WebtrekkOrderData extends WebtrekkReactComponent {
    constructor() {
        super('order');
    }
}

const PropTypesOfTypesNumberOrString = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
]);

WebtrekkOrderData.propTypes = {
    value: PropTypesOfTypesNumberOrString,
    id: PropTypes.string,
    currency: PropTypes.string,
    couponValue: PropTypesOfTypesNumberOrString,
    paymentMethod: PropTypes.string,
    shippingService: PropTypes.string,
    shippingSpeed: PropTypes.string,
    shippingCosts: PropTypesOfTypesNumberOrString,
    grossMargin: PropTypesOfTypesNumberOrString,
    orderStatus: PropTypes.string,
    parameter: PropTypes.objectOf(PropTypes.string),
    sendInstantly: PropTypes.bool
};

WebtrekkOrderData.defaultProps = {
    value: null,
    id: null,
    currency: null,
    couponValue: null,
    paymentMethod: null,
    shippingService: null,
    shippingSpeed: null,
    shippingCosts: null,
    grossMargin: null,
    orderStatus: null,
    parameter: null,
    sendInstantly: false
};

export default WebtrekkOrderData;
