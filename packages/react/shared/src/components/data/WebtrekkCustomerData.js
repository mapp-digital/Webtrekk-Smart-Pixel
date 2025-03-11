import PropTypes from 'prop-types';
import WebtrekkReactComponent from './WebtrekkReactComponent';

class WebtrekkCustomerData extends WebtrekkReactComponent {
    constructor() {
        super('customer');
    }
}

WebtrekkCustomerData.propTypes = {
    id: PropTypes.string,
    email: PropTypes.string,
    emailRID: PropTypes.string,
    emailOptin: PropTypes.bool,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    telephone: PropTypes.string,
    gender: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    birthday: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string,
    postalCode: PropTypes.string,
    street: PropTypes.string,
    streetNumber: PropTypes.string,
    validation: PropTypes.bool,
    registrationEmail: PropTypes.string,
    registrationGroupId: PropTypes.string,
    registrationMode: PropTypes.string,
    registrationFirstName: PropTypes.string,
    registrationLastName: PropTypes.string,
    registrationGender: PropTypes.string,
    registrationTitle: PropTypes.string,
    registrationOptin: PropTypes.bool,
    category: PropTypes.objectOf(PropTypes.string),
    sendInstantly: PropTypes.bool
};

WebtrekkCustomerData.defaultProps = {
    id: null,
    email: null,
    emailRID: null,
    emailOptin: null,
    firstName: null,
    lastName: null,
    telephone: null,
    gender: null,
    birthday: null,
    country: null,
    city: null,
    postalCode: null,
    street: null,
    streetNumber: null,
    validation: null,
    registrationEmail: null,
    registrationGroupId: null,
    registrationMode: null,
    registrationFirstName: null,
    registrationLastName: null,
    registrationGender: null,
    registrationTitle: null,
    registrationOptin: null,
    category: null,
    sendInstantly: false
};

export default WebtrekkCustomerData;
