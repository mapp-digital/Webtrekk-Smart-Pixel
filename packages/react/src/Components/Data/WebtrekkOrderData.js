import PropTypes from 'prop-types';
import WebtrekkReactComponent from './WebtrekkReactComponent';

class WebtrekkOrderData extends WebtrekkReactComponent {
    constructor() {
        super('order');
    }
}

WebtrekkOrderData.propTypes = {
    value: PropTypes.number.isRequired,
    id: PropTypes.string,
    currency: PropTypes.string,
    couponValue: PropTypes.number,
    paymentMethod: PropTypes.string,
    shippingService: PropTypes.string,
    shippingSpeed: PropTypes.string,
    shippingCosts: PropTypes.number,
    grossMargin: PropTypes.number,
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
