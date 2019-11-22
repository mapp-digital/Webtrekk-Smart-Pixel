import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import WebtrekkReactComponent from './Data/WebtrekkReactComponent';

class WebtrekkAutoTracking extends WebtrekkReactComponent {
    constructor() {
        super('auto');
    }

    componentDidMount() {
        this.addConfigurationData('init');

        if (this.props.activateActions) {
            this.addExtension('action');
        }

        if (this.props.activateTeaser) {
            this.addExtension('teaser_tracking');
        }

        if (this.props.activateProductList) {
            this.addExtension('product_list_tracking');
        }

        if (this.props.activateContentEngagement) {
            this.addExtension('content_engagement');
        }

        if (this.props.activateAutoTracking) {
            this.trackPageView();
        }
    }

    componentDidUpdate({history}) {
        if (this.props.activateAutoTracking || this.props.activateActions) {
            if (history.action === 'PUSH' || history.action === 'POP') {
                window.setTimeout(() => {
                    if (this.props.activateAutoTracking) {
                        this.trackPageView();
                    }

                    if (this.props.activateActions) {
                        this.addExtension('action', 'reload');
                    }
                }, 500);
            }
        }
    }
}

WebtrekkAutoTracking.propTypes = {
    trackId: PropTypes.string.isRequired,
    trackDomain: PropTypes.string.isRequired,
    activateAutoTracking: PropTypes.bool,
    activateActions: PropTypes.bool,
    activateTeaser: PropTypes.bool,
    activateProductList: PropTypes.bool,
    activateContentEngagement: PropTypes.bool
};

WebtrekkAutoTracking.defaultProps = {
    trackId: null,
    trackDomain: null,
    activateAutoTracking: true,
    activateActions: false,
    activateTeaser: false,
    activateProductList: false,
    activateContentEngagement: false
};

export default withRouter(WebtrekkAutoTracking);
