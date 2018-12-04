import { ContainerModule } from 'inversify';
import { <%= params.extensionPrefix %>Widget } from './<%= params.extensionPrefix %>-widget';
import { <%= params.extensionPrefix %>Contribution } from './<%= params.extensionPrefix %>-contribution';
import { WidgetFactory, bindViewContribution, FrontendApplicationContribution } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, <%= params.extensionPrefix %>Contribution);
    bind(FrontendApplicationContribution).toService(<%= params.extensionPrefix %>Contribution);
    bind(<%= params.extensionPrefix %>Widget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: <%= params.extensionPrefix %>Widget.ID,
        createWidget: () => ctx.container.get<<%= params.extensionPrefix %>Widget>(<%= params.extensionPrefix %>Widget)
    })).inSingletonScope();
});