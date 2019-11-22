import React from 'react';
import webtrekkSmartPixelReact from './../../WebtrekkSmartPixelReact';

class WebtrekkReactComponent extends React.Component {
    /**
     * @param {string} type
     */
    constructor(type) {
        super();
        this.type = type;
    }

    /**
     * @param {string} type
     * @param {object} props
     */
    addConfigurationData(type = this.type, props = this.props) {
        webtrekkSmartPixelReact[type](props);
    }

    /**
     * @param {string} type
     * @param {object} props
     */
    addTrackingData(type = this.type, props = this.props) {
        webtrekkSmartPixelReact[type](props);
    }

    /**
     * @param {object} props
     */
    addPageTrackingData(props = this.props) {
        webtrekkSmartPixelReact.page(props.name, props);
    }

    /**
     * @param {object} props
     */
    addCustomerTrackingData(props = this.props) {
        webtrekkSmartPixelReact.customer(props.id, props, props.validation);
    }

    /**
     * @param {object} props
     */
    addProductTrackingData(props = this.props) {
        webtrekkSmartPixelReact.product(props.action, props);
    }

    /**
     * @param {string} extension
     * @param {string} action
     * @param {object} config
     */
    addExtension(extension, action = 'activate', config = {}) {
        webtrekkSmartPixelReact.extension(extension, action, config);
    }

    /**
     * @param {object} ref
     * @param {object} props
     */
    addContentEngagementElement(ref = this.elementRef, props = this.props) {
        webtrekkSmartPixelReact.call(function(pix) {
            pix.extension.content_engagement.add({
                selector: ((props.selector) ? props.selector : ref.current),
                name: props.name,
                config: props
            });
        });
    }

    /**
     * @param {object} ref
     * @param {object} props
     */
    addProductListElement(ref = this.elementRef, props = this.props) {
        webtrekkSmartPixelReact.call(function(pix) {
            pix.extension.product_list_tracking.add({
                selector: ((props.selector) ? props.selector : ref.current),
                data: props
            });
        });
    }

    /**
     * @param {object} ref
     * @param {object} props
     */
    addTeaserElement(ref = this.elementRef, props = this.props) {
        webtrekkSmartPixelReact.call(function(pix) {
            pix.extension.teaser_tracking.add({
                selector: ((props.selector) ? props.selector : ref.current),
                data: props,
                conversion: props
            });
        });
    }

    /**
     *
     */
    trackPageView() {
        webtrekkSmartPixelReact.trackPage();
    }

    /**
     *
     */
    /*
    trackAction() {
        webtrekkSmartPixelReact.trackAction();
    }
    */

    /**
     * @override
     */
    componentDidMount() {
        if (this.type === 'init' || this.type === 'advanced') {
            this.addConfigurationData();
        }
        else if (this.type === 'page') {
            this.addPageTrackingData();
        }
        else if (this.type === 'customer') {
            this.addCustomerTrackingData();
        }
        else if (this.type === 'product') {
            this.addProductTrackingData();
        }
        else {
            this.addTrackingData();
        }

        if (this.props && this.props.sendInstantly) {
            webtrekkSmartPixelReact.track();
        }
    }

    /**
     * @override
     */
    componentDidUpdate() {
        this.componentDidMount();
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

export default WebtrekkReactComponent;
