import {SmartPixel, SmartPixelExtension, SmartPixelExtensionProps, SmartPixelExtensionsTriggerConfig} from '../../core';

/* **********************************************
 *              EXTENSION:FASHION               *
 ********************************************** */
interface SmartPixelExtensionFashionSetConfig {
    host: string,
    namespaceId: string
}

interface SmartPixelExtensionFashionGetConfig {
    host: string,
    namespaceId: string
}

interface SmartPixelExtensionFashion extends SmartPixelExtensionProps {
    config(): SmartPixelExtensionFashionGetConfig;
    config(config: SmartPixelExtensionFashionSetConfig): void;
    trigger(config: SmartPixelExtensionsTriggerConfig): void;
    isActivated(): boolean;
    activate(): void;
    deactivate(): void;
}

export function use(): (wtSmart: SmartPixel) => void;

declare global {
    interface SmartPixelExtension {
        fashion: SmartPixelExtensionFashion
    }
}
