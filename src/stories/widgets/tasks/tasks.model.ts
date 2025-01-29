export interface TaskItem {
  title: string; // The label of the menu item
  date?: string; // Optional: For expandable/collapsible menus
  status?: string; // Optional: Nested menu items
}

export const Tasks: TaskItem[] = [
  {
    title: 'Darba rīki',
    date: '2021-09-01',
    status: 'In Progress',
  },
  {
    title: 'Rēķini',
    date: '2021-09-01',
    status: 'In Progress',
  },
  {
    title: 'Esmu iepazinies',
    date: '2021-09-01',
    status: 'In Progress',
  },
  {
    title: 'Darbinieki',
    date: '2021-09-01',
    status: 'In Progress',
  },
  {
    title: 'Materiālie resursi',
    date: '2021-09-01',
    status: 'In Progress',
  },
  {
    title: 'Krājumu norakstīšana',
    date: '2021-09-01',
    status: 'In Progress',
  },

  {
    title: 'Iziet',
    date: '2021-09-01',
    status: 'In Progress',
  },
];
