import {SmartPixel, SmartPixelExtension, SmartPixelExtensionProps, SmartPixelExtensionsTriggerConfig} from '../../core';

/* **********************************************
 *             EXTENSION:KAMELEOON              *
 ********************************************** */
interface SmartPixelExtensionEngageSetConfig {

}

interface SmartPixelExtensionEngageGetConfig {

}

interface SmartPixelExtensionEngage extends SmartPixelExtensionProps {
    config(): SmartPixelExtensionEngageGetConfig;
    config(config: SmartPixelExtensionEngageSetConfig): void;
    trigger(config: SmartPixelExtensionsTriggerConfig): void;
    isActivated(): boolean;
    activate(): void;
    deactivate(): void;
}

export function use(): (wtSmart: SmartPixel) => void;

declare global {
    interface SmartPixelExtension {
        Engage: SmartPixelExtensionEngage
    }
}
