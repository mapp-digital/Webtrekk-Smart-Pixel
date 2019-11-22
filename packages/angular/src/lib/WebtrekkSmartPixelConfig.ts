export interface WebtrekkSmartPixelConfig {
    trackId?: string;
    trackDomain?: string;
    activateAutoTracking?: boolean;
    activateActions?: boolean;
    activateTeaser?: boolean;
    activateProductList?: boolean;
    activateContentEngagement?: boolean;
}

export interface WebtrekkSmartPixelRouterlessConfig {
    trackId?: string;
    trackDomain?: string;
}

export class DefaultConfig implements WebtrekkSmartPixelConfig {
    trackId = '';
    trackDomain = '';
    activateAutoTracking = true;
    activateActions = false;
    activateTeaser = false;
    activateProductList = false;
    activateContentEngagement = false;
}
