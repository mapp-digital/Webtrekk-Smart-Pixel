import PropTypes from 'prop-types';
import WebtrekkReactComponent from './WebtrekkReactComponent';

class WebtrekkCampaignData extends WebtrekkReactComponent {
    constructor() {
        super('campaign');
    }
}

WebtrekkCampaignData.propTypes = {
    id: PropTypes.string.isRequired,
    mediaCode: PropTypes.arrayOf(PropTypes.string),
    oncePerSession: PropTypes.bool,
    parameter: PropTypes.objectOf(PropTypes.string),
    sendInstantly: PropTypes.bool
};

WebtrekkCampaignData.defaultProps = {
    id: null,
    mediaCode: null,
    oncePerSession: null,
    parameter: null,
    sendInstantly: false
};

export default WebtrekkCampaignData;
