import {SmartPixel, SmartPixelExtension, SmartPixelExtensionProps, SmartPixelExtensionsTriggerConfig} from '../../core';

/* **********************************************
 *             EXTENSION:KAMELEOON              *
 ********************************************** */
interface SmartPixelExtensionKameleoonTrafficDeviationThreshold {
    min?: number;
    max?: number;
}

interface SmartPixelExtensionKameleoonSetConfig {
    parameterIdVariation?: number | string;
    withPersonalization?: boolean;
    useVariationInActionName?: boolean;
    trafficDeviationThreshold?: SmartPixelExtensionKameleoonTrafficDeviationThreshold;
}

interface SmartPixelExtensionKameleoonGetConfig {
    parameterIdVariation: number | string;
    withPersonalization: boolean;
    useVariationInActionName: boolean;
    trafficDeviationThreshold: SmartPixelExtensionKameleoonTrafficDeviationThreshold;
}

interface SmartPixelExtensionKameleoon extends SmartPixelExtensionProps {
    config(): SmartPixelExtensionKameleoonGetConfig;
    config(config: SmartPixelExtensionKameleoonSetConfig): void;
    trigger(config: SmartPixelExtensionsTriggerConfig): void;
    isActivated(): boolean;
    activate(): void;
    deactivate(): void;
}

export function use(): (wtSmart: SmartPixel) => void;

declare global {
    interface SmartPixelExtension {
        kameleoon: SmartPixelExtensionKameleoon
    }
}
