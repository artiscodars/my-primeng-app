export interface TaskItem {
  title: string; // The label of the menu item
  date?: string; // Optional: For expandable/collapsible menus
  status?: string; // Optional: Nested menu items
}

export const Tasks: TaskItem[] = [
  {
    title: 'Darba rīku izveide',
    date: '30.01.2025',
    status: 'Notiek',
  },
  {
    title: 'Rēķinu sagatavošana',
    date: '30.01.2025',
    status: 'Notiek',
  },
  {
    title: 'Izveidot atvaļinājumu grafiku',
    date: '10.02.2025',
    status: 'Gaida',
  },
  {
    title: 'Darbinieku intervijas',
    date: '15.02.2025',
    status: 'Gaida',
  },
  {
    title: 'Materiālo resursu inventūra',
    date: '17.02.2025',
    status: 'Gaida',
  },
];
