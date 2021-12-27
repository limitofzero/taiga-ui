import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';
import {tuiFadeIn} from '@taiga-ui/core';

@Component({
    selector: 'tui-tab-content',
    templateUrl: './tab-content.template.html',
    styleUrls: ['./tab-content.template.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeIn],
})
export class TuiTabContentComponent {
    @Input() code: string = '';
    @Input() isPreview = false;

    @HostBinding('@.disabled')
    disableAnimation = this.isCypress;

    constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}
}
