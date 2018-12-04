import * as React from 'react';
import { injectable, postConstruct } from 'inversify';
import { ReactWidget } from '@theia/core/lib/browser';

@injectable()
export class <%= params.extensionPrefix %>Widget extends ReactWidget {

    static readonly ID = '<%= params.extensionPrefix %>.widget';
    static readonly LABEL = '<%= params.extensionPrefix %>';

    @postConstruct()
    protected async init(): Promise<void> {
        this.id = <%= params.extensionPrefix %>Widget.ID;
        this.title.label = <%= params.extensionPrefix %>Widget.LABEL;
        this.title.caption = <%= params.extensionPrefix %>Widget.LABEL;
        this.title.closable = true;
        this.update();
    }

    protected render(): React.ReactNode {
        return <h1 className='widget-header'>Hello World!</h1>;
    }

}