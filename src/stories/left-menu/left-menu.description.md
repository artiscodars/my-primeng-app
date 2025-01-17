# LeftMenuComponent

The `LeftMenuComponent` is a customizable component for rendering a sidebar menu using PrimeNG's `PanelMenu` component. It supports dynamic item rendering and custom styling through inputs.

## Usage

### Template

The `LeftMenuComponent` utilizes the `p-panelMenu` from PrimeNG to create a collapsible menu. The `ng-template` with the `pTemplate="item"` directive is used to customize the rendering of each menu item.

```html
<p-panelMenu [model]="items" [styleClass]="className">
  <ng-template pTemplate="item" let-item>
    <a pRipple class="flex align-items-center px-3 py-2 cursor-pointer">
      <i [class]="item.icon"></i>
      <span class="ml-2">
        {{ item.label }}
      </span>
      <span
        *ngIf="item.shortcut"
        class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1"
      >
        {{ item.shortcut }}
      </span>
    </a>
  </ng-template>
</p-panelMenu>
```