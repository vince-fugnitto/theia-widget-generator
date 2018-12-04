import { injectable } from 'inversify';
import { <%= params.extensionPrefix %>Widget } from './<%= params.extensionPrefix %>-widget';
import { AbstractViewContribution } from '@theia/core/lib/browser';
import { CommandRegistry, MenuModelRegistry } from '@theia/core/lib/common';

export const <%= params.extensionPrefix %>Command = {
    id: '<%= params.extensionPrefix %>.command',
};

@injectable()
export class <%= params.extensionPrefix %>Contribution extends AbstractViewContribution<<%= params.extensionPrefix %>Widget> {

    constructor() {
        super({
            widgetId: <%= params.extensionPrefix %>Widget.ID,
            widgetName: <%= params.extensionPrefix %>Widget.LABEL,
            defaultWidgetOptions: {
                area: 'main',
            },
            toggleCommandId: <%= params.extensionPrefix %>Command.id,
        });
    }

    registerCommands(registry: CommandRegistry): void {
        super.registerCommands(registry);
    }

    registerMenus(menus: MenuModelRegistry): void {
        super.registerMenus(menus);
    }

}