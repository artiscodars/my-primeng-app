export interface MenuItem {
  label: string; // The label of the menu item
  expanded?: boolean; // Optional: For expandable/collapsible menus
  items?: MenuItem[]; // Optional: Nested menu items
  icon?: string; // Optional: Icon associated with the menu item
  route?: string; // Optional: Route for navigation
  seperator?: boolean; // Optional: Separator for grouping
}

export const Menu: MenuItem[] = [
  {
    label: 'Mana darba vieta',
    expanded: true,
    items: [
      {
        label: 'Alga',
        items: [],
        icon: 'pi pi-objects-column',
        route: '',
      },
      {
        label: 'Atvaļinājumi',
        icon: '',
        items: [],
        route: '',
      },
      {
        label: 'Mācību pieteikumi',
        items: [],
        icon: '',
        route: '',
      },
      {
        label: 'Izdevumi',
        icon: '',
        items: [],
        route: '',
      },
      {
        label: 'Komandējumi',
        icon: '',
        items: [],
        route: '',
      },
      {
        label: 'Noderīgi',
        seperator: true,
      },
      {
        label: 'Atskaites',
        icon: '',
        items: [],
        route: '',
      },
      {
        label: 'Meklēt kolēģi',
        items: [],
        icon: '',
        route: '',
      },
      {
        label: 'Prombūtnes kalendārs',
        items: [],
        icon: '',
        route: '',
      },
      {
        label: 'Ārējās saites',
        items: [],
        icon: '',
        route: '',
      },
    ],
  },
  {
    label: 'Darba rīki',
    expanded: false,
    items: [
      {
        label: 'Rēķini',
        icon: '',
        items: [],
        route: '',
      },
      {
        label: 'Esmu iepazinies',
        items: [],
        icon: '',
        route: '',
      },
      {
        label: 'Darbinieki',
        items: [],
        icon: '',
        route: '',
      },
      {
        label: 'Materiālie resursi',
        items: [],
        icon: '',
        route: '',
      },
      {
        label: 'Krājumu norakstīšana',
        icon: '',
        items: [],
        route: '',
      },
      {
        label: 'Darba laika uzskaite',
        icon: '',
        items: [],
        route: '',
      },
      {
        label: 'Darba laika plānošana',
        icon: '',
        items: [],
        route: '',
      },
      {
        label: 'Darba plūsmas',
        icon: '',
        items: [],
        route: '',
      },
    ],
  },
  {
    label: 'Administrēšana',
    expanded: false,
    items: [
      {
        label: 'Sistēma un uzstādījumi',
        seperator: true,
      },
      {
        label: 'Lietotāju pārvaldība',
        icon: '',
        items: [],
        route: '',
      },
      {
        label: 'Licences pārvaldība',
        icon: '',
        items: [],
        route: '',
      },
      {
        label: 'Moduļi',
        icon: '',
        items: [],
        route: '',
      },
      {
        label: 'Darba laika plānošana',
        icon: '',
        items: [],
        route: '',
      },
      {
        label: 'Pārvaldība',
        seperator: true,
      },

      {
        label: 'Organizācijas',
        icon: '',
        items: [],
        route: '',
      },
      {
        label: 'Serviss',
        icon: '',
        items: [],
        route: '',
      },
    ],
  },
];

export const Menu2 = [
  {
    label: 'Mans Numo',
    expanded: false,
    items: [],
  },
  {
    label: 'Vadība',
    expanded: false,
    items: [
      {
        label: 'Darbvirsma',
        items: [],
        icon: 'pi pi-objects-column',
        route: '',
      },
      {
        label: 'Virsgrāmata',
        items: [],
        icon: 'pi pi-book',
        route: '',
      },
    ],
  },
  {
    label: ' Pro Numo',
    expanded: true,
    items: [
      {
        label: 'Darbvirsma',
        items: [],
        icon: 'pi pi-objects-column',
        route: '',
      },
      {
        label: 'Virsgrāmata',
        items: [],
        icon: 'pi pi-book',
        route: '',
      },
      {
        label: 'Kase',
        items: [],
        icon: 'pi pi-money-bill',
        route: '',
      },
      {
        label: 'Banka',
        items: [],
        icon: 'pi pi-building-columns',
        route: '',
      },
      {
        label: 'Noliktava',
        icon: 'pi pi-warehouse',
        items: [],
        route: '',
      },
      {
        label: 'LoĢistika',
        icon: 'pi pi-directions',
        items: [],
        route: '',
      },
      {
        label: 'Kases sistēmas',
        icon: 'pi pi-briefcase',
        items: [],
        route: '',
      },
      {
        label: 'Realizācija',
        icon: 'pi pi-cloud-upload',
        items: [],
        route: '',
      },
      {
        label: 'Debitoru novērtēšana',
        icon: 'pi pi-wallet',
        items: [],
        route: '',
      },
      {
        label: 'Pamatlīdzekļi',
        icon: 'pi pi-ticket',
        items: [],
        route: '',
      },
      {
        label: 'PL un inventāra inventarizācija',
        icon: 'pi pi-warehouse',
        items: [],
        route: '',
      },
      {
        label: 'Algas',
        icon: 'pi pi-credit-card',
        items: [],
        route: '',
      },
      {
        label: 'Darba laika plānošana',
        icon: 'pi pi-calendar',
        items: [],
        route: '',
      },
      {
        label: 'Avansa norēkini',
        icon: 'pi pi-receipt',
        items: [],
        route: '',
      },
      {
        label: 'Komandējumi',
        icon: 'pi pi-directions-alt',
        items: [],
        route: '',
      },
      {
        label: 'Nākamo periodu ieņēmumi/izdevumi',
        icon: 'pi pi-money-bill',
        items: [],
      },
      {
        label: 'Vadības grāmatvedība',
        icon: 'pi pi-briefcase',
        items: [],
        route: '',
      },
      {
        label: 'Līgumi',
        icon: 'pi pi-chart-bar',
        items: [],
        route: '',
      },
    ],
  },
];
export const UserMenuItems = [
  {
    label: 'Profile',
    route: '',
  },
  {
    label: 'Settings',
    route: '',
  },
  {
    label: 'Logout',
    route: '',
  },
];
