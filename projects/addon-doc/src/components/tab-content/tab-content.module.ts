import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiDocCodeModule} from '../code/code.module';
import {TuiDocCopyModule} from '../copy/copy.module';
import {TuiTabContentComponent} from './tab-content.component';

@NgModule({
    imports: [CommonModule, TuiDocCodeModule, TuiDocCopyModule, ClipboardModule],
    declarations: [TuiTabContentComponent],
    exports: [TuiTabContentComponent],
})
export class TuiTabContentModule {}
