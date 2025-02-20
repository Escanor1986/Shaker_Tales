import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appSelected]',
})
export class SelectedDirective implements OnChanges {
  @Input() public appSelected: boolean = false;
  @HostBinding('style.backgroundColor') public backgroundColor?: string;
  @HostBinding('style.fontWeight') public fontWeight?: string;
  @HostBinding('style.color') public color?: string;

  ngOnChanges(): void {
    if (this.appSelected) {
      this.backgroundColor = 'var(--primary)';
      this.fontWeight = 'bold';
      this.color = 'white';
    } else {
      this.backgroundColor = 'transparent';
      this.fontWeight = 'normal';
      this.color = 'var(--text-regular)';
    }
  }

  constructor() {}
}
