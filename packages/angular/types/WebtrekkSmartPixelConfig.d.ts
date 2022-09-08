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
export declare class DefaultConfig implements WebtrekkSmartPixelConfig {
    trackId: string;
    trackDomain: string;
    activateAutoTracking: boolean;
    activateActions: boolean;
    activateTeaser: boolean;
    activateProductList: boolean;
    activateContentEngagement: boolean;
}
