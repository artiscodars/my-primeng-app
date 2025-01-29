# LeftMenuComponent

The `LeftMenuComponent` is a customizable component for rendering a sidebar menu using PrimeNG's `PanelMenu` component. It supports dynamic item rendering and custom styling through inputs.

## Usage

### Template

The `LeftMenuComponent` utilizes the `p-panelMenu` from PrimeNG to create a collapsible menu. The `ng-template` with the `pTemplate="item"` directive is used to customize the rendering of each menu item.

```html
<p-panelmenu [model]="items" class="w-full">
  <ng-template #item let-item>
    <a *ngIf="items.includes(item)" pRipple class="flex items-center px-2 py-2 cursor-pointer group font-bold">
      <i class="pi pi-chevron-down text-primary mr-2"></i>
      <span>{{ item.label }}</span>
    </a>

    <!-- First-level separator -->
    <div *ngIf="item.seperator" class="font-semibold py-2 cursor-text hover:bg-white">{{ item.label }}</div>

    <!-- First-level non-separator item -->
    <a *ngIf="!item.seperator && item.route" pRipple class="flex items-center px-2 py-2 cursor-pointer group">
      <i [class]="item.icon + ' text-primary group-hover:text-inherit'"></i>
      <span class="ml-2"> {{ item.label }} </span>
      <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge"></p-badge>
      <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"> {{ item.shortcut }} </span>
    </a>

    <!-- Nested levels -->
    <div *ngIf="item.seperator && item.parent" class="font-semibold py-2 cursor-text hover:bg-white">{{ item.label }}</div>
    <a *ngIf="!item.seperator && item.parent" pRipple class="flex items-center px-2 py-2 cursor-pointer group">
      <i [class]="item.icon + ' text-primary group-hover:text-inherit'"></i>
      <span class="ml-2"> {{ item.label }}. </span>
      <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge"></p-badge>
      <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"> {{ item.shortcut }} </span>
    </a>
  </ng-template>
</p-panelmenu>
```
