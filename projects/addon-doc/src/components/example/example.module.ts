import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiTabsModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDocCopyModule} from '../copy/copy.module';
import {TuiTabContentModule} from '../tab-content/tab-content.module';
import {TuiDocExampleComponent} from './example.component';
import {TuiDocExampleGetTabsPipe} from './example-get-tabs.pipe';

@NgModule({
    imports: [
        CommonModule,
        TuiTabsModule,
        TuiButtonModule,
        TuiDocCopyModule,
        TuiTabContentModule,
        PolymorpheusModule,
    ],
    declarations: [TuiDocExampleComponent, TuiDocExampleGetTabsPipe],
    exports: [TuiDocExampleComponent, TuiDocExampleGetTabsPipe],
})
export class TuiDocExampleModule {}
