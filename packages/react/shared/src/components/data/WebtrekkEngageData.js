import PropTypes from 'prop-types';
import WebtrekkReactComponent from './WebtrekkReactComponent';

class WebtrekkEngageData extends WebtrekkReactComponent {
    constructor() {
        super('engage');
    }
}

const PropTypesOfTypesNumberOrString = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
]);

WebtrekkEngageData.propTypes = {
    attributes: PropTypes.objectOf(PropTypes.string),
    eventName: PropTypes.string,
    eventId: PropTypesOfTypesNumberOrString,
    sendInstantly: PropTypes.bool
};

WebtrekkEngageData.defaultProps = {
    attributes: null,
    eventName: null,
    eventId: null,
    sendInstantly: false
};

export default WebtrekkEngageData;
