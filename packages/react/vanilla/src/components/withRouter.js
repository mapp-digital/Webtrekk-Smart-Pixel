import React from 'react';
import * as reactRouterDom from 'react-router-dom';

const polyfillWithRouter = reactRouterDom.withRouter || function(Component) {
    const ComponentWithRouterProp = (props) => {
        const location = reactRouterDom.useLocation();
        const navigate = reactRouterDom.useNavigate();
        const params = reactRouterDom.useParams();
        const history = reactRouterDom.useNavigationType();

        return (
            <Component
                history={{action: history}}
                router={{location, navigate, params}}
                {...props}
            />
        );
    };

    ComponentWithRouterProp.WrappedComponent = Component;

    return ComponentWithRouterProp;
};

export const withRouter = polyfillWithRouter;
