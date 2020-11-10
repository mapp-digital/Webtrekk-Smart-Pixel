import React from 'react';
import PropTypes from 'prop-types';

import WebtrekkSmartPixelReact from '../../../shared/src/WebtrekkSmartPixelReact';

class WebtrekkAutoTracking extends React.Component {
    /**
     * @param {string} extension
     * @param {string} action
     */
    addExtension(extension, action = 'activate') {
        WebtrekkSmartPixelReact.extension(extension, action);
    }

    /**
     * @param {number} timeout
     */
    actionsAfterRouting(timeout) {
        window.setTimeout(() => {
            if (this.props.activateAutoTracking) {
                WebtrekkSmartPixelReact.trackPage();
            }

            if (this.props.activateActions) {
                this.addExtension('action', 'reload');
            }
        }, timeout);
    }

    /**
     * @override
     */
    componentDidMount() {
        WebtrekkSmartPixelReact.init(this.props);

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

        if (this.props.activateAutoTracking || this.props.activateActions) {
            this.actionsAfterRouting(5);

            if (this.props.router !== null) {
                this.props.router.events.on('routeChangeComplete', () => {
                    this.actionsAfterRouting(500);
                });
            }
        }
    }

    /**
     * @override
     */
    componentDidUpdate() {
        // do nothing
    }

    /**
     * @override
     *
     * @returns {null}
     */
    render() {
        return null;
    }
}

WebtrekkAutoTracking.propTypes = {
    trackId: PropTypes.string.isRequired,
    trackDomain: PropTypes.string.isRequired,
    router: PropTypes.any,
    activateAutoTracking: PropTypes.bool,
    activateActions: PropTypes.bool,
    activateTeaser: PropTypes.bool,
    activateProductList: PropTypes.bool,
    activateContentEngagement: PropTypes.bool
};

WebtrekkAutoTracking.defaultProps = {
    trackId: null,
    trackDomain: null,
    router: null,
    activateAutoTracking: true,
    activateActions: false,
    activateTeaser: false,
    activateProductList: false,
    activateContentEngagement: false
};

export default WebtrekkAutoTracking;
