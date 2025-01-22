export interface TableData {
  darbaLaiks: string; // The label of the menu item
  partraukums?: string; // Optional: For expandable/collapsible menus
  darbaVieta?: string; // Optional: Nested menu items
}

export const TableData: TableData[] = [
  {
    darbaLaiks: '8:00 - 17:00 (8h 15min)',
    partraukums: 'Pusdienlaiks',
    darbaVieta: 'Ofiss',
  },
  {
    darbaLaiks: '18:00 - 23:00 (4h 45min)',
    partraukums: '15min',
    darbaVieta: 'Noliktava',
  },
];

export interface TableData2 {
  amats: string; // The label of the menu item
  kompetence?: string; // Optional: For expandable/collapsible menus
  kompetencuSkaits?: string; // Optional: Nested menu items
  darbniekuSkaits?: string; // Optional: Nested menu items
}

export const TableData2 = [
  {
    amats: 'Biroja administrators',
    kompetence: 'Māk rakstīt | Sertificēts revidents',
    kompetencuSkaits: '2',
    darbniekuSkaits: 'min: 1 / max: 1 / opt: 1',
  },
];

export interface Product {
  id: number;
  code: string;
  name: string;
  slots: string[];
  badgeName: string;
  badgeSeverity: string;
  inventoryStatus: string;
  days: number[];
  dates?: string[];
}

export const Products = [
  {
    id: 1,
    code: 'f230fh0g3',
    name: 'Darba dienas',
    slots: ['8:00 - 17:00 (8h 15min)', '18:00 - 23:00 (4h 45min)'],
    badgeName: 'Parasts',
    badgeSeverity: 'info',
    inventoryStatus: 'Standarta',
    days: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    code: 'f230fh0g3',
    name: 'Citas foršas darba dienas',
    slots: ['8:00 - 17:00 (8h 15min)', '18:00 - 23:00 (4h 45min)'],
    badgeName: 'Ideāls',
    badgeSeverity: 'success',
    inventoryStatus: 'Nestandarta',
    days: [1, 4, 5],
    dates: ['12.12.2024', '12.12.2024'],
  },
  {
    id: 3,
    code: 'f230fh0g3',
    name: 'Brīvdienas',
    slots: ['8:00 - 17:00 (8h 15min)', '18:00 - 23:00 (4h 45min)'],
    badgeName: 'Nestandarta',
    badgeSeverity: 'warning',
    inventoryStatus: 'Standarta',
    days: [1, 5],
    dates: ['12.12.2024'],
  },
];

export interface TimePlanning {
  employeeName: string;
  jobTitle: string;
  planningHours: number;
  totalHours: number;
  daysOfMonth: {
    day: string;
    date: string;
    hours: number;
  }[];
}

export const TimePlanning = [
  {
    employeeName: 'Anita Jēgermane',
    jobTitle: 'Biroja administrators',
    planningHours: 12,
    totalHours: 121,
    daysOfMonth: [
      { day: 'P', date: '1', hours: 8 },
      { day: 'O', date: '2', hours: 7 },
      { day: 'T', date: '3', hours: 8 },
      { day: 'C', date: '4', hours: 6 },
      { day: 'P', date: '5', hours: 7 },
      { day: 'O', date: '6', hours: 8 },
      { day: 'T', date: '7', hours: 7 },
      { day: 'C', date: '8', hours: 6 },
      { day: 'P', date: '9', hours: 7 },
      { day: 'O', date: '10', hours: 8 },
      { day: 'T', date: '11', hours: 7 },
      { day: 'C', date: '12', hours: 6 },
      { day: 'P', date: '13', hours: 7 },
      { day: 'O', date: '14', hours: 8 },
      { day: 'T', date: '15', hours: 7 },
      { day: 'C', date: '16', hours: 6 },
      { day: 'P', date: '17', hours: 7 },
      { day: 'O', date: '18', hours: 8 },
      { day: 'T', date: '19', hours: 7 },
      { day: 'C', date: '20', hours: 6 },
      { day: 'P', date: '21', hours: 7 },
      { day: 'O', date: '22', hours: 8 },
      { day: 'T', date: '23', hours: 7 },
      { day: 'C', date: '24', hours: 6 },
      { day: 'P', date: '25', hours: 7 },
      { day: 'O', date: '26', hours: 8 },
      { day: 'T', date: '27', hours: 7 },
      { day: 'C', date: '28', hours: 6 },
      { day: 'P', date: '29', hours: 7 },
      { day: 'O', date: '30', hours: 8 },
      { day: 'T', date: '31', hours: 7 },
    ],
  },
  {
    employeeName: 'Jānis Bērziņš',
    jobTitle: 'Projektu vadītājs',
    planningHours: 10,
    totalHours: 110,
    daysOfMonth: [
      { day: 'P', date: '1', hours: 9 },
      { day: 'O', date: '2', hours: 8 },
      { day: 'T', date: '3', hours: 9 },
      { day: 'C', date: '4', hours: 6 },
      { day: 'P', date: '5', hours: 8 },
      { day: 'O', date: '6', hours: 9 },
      { day: 'T', date: '7', hours: 8 },
      { day: 'C', date: '8', hours: 6 },
      { day: 'P', date: '9', hours: 8 },
      { day: 'O', date: '10', hours: 9 },
      { day: 'T', date: '11', hours: 8 },
      { day: 'C', date: '12', hours: 6 },
      { day: 'P', date: '13', hours: 8 },
      { day: 'O', date: '14', hours: 9 },
      { day: 'T', date: '15', hours: 8 },
      { day: 'C', date: '16', hours: 6 },
      { day: 'P', date: '17', hours: 8 },
      { day: 'O', date: '18', hours: 9 },
      { day: 'T', date: '19', hours: 8 },
      { day: 'C', date: '20', hours: 6 },
      { day: 'P', date: '21', hours: 8 },
      { day: 'O', date: '22', hours: 9 },
      { day: 'T', date: '23', hours: 8 },
      { day: 'C', date: '24', hours: 6 },
      { day: 'P', date: '25', hours: 8 },
      { day: 'O', date: '26', hours: 9 },
      { day: 'T', date: '27', hours: 8 },
      { day: 'C', date: '28', hours: 6 },
      { day: 'P', date: '29', hours: 8 },
      { day: 'O', date: '30', hours: 9 },
      { day: 'T', date: '31', hours: 8 },
    ],
  },
  {
    employeeName: 'Laura Kalniņa',
    jobTitle: 'Programmētājs',
    planningHours: 9,
    totalHours: 100,
    daysOfMonth: [
      { day: 'P', date: '1', hours: 6 },
      { day: 'O', date: '2', hours: 5 },
      { day: 'T', date: '3', hours: 7 },
      { day: 'C', date: '4', hours: 8 },
      { day: 'P', date: '5', hours: 7 },
      { day: 'O', date: '6', hours: 6 },
      { day: 'T', date: '7', hours: 7 },
      { day: 'C', date: '8', hours: 8 },
      { day: 'P', date: '9', hours: 7 },
      { day: 'O', date: '10', hours: 6 },
      { day: 'T', date: '11', hours: 7 },
      { day: 'C', date: '12', hours: 8 },
      { day: 'P', date: '13', hours: 7 },
      { day: 'O', date: '14', hours: 6 },
      { day: 'T', date: '15', hours: 7 },
      { day: 'C', date: '16', hours: 8 },
      { day: 'P', date: '17', hours: 7 },
      { day: 'O', date: '18', hours: 6 },
      { day: 'T', date: '19', hours: 7 },
      { day: 'C', date: '20', hours: 8 },
      { day: 'P', date: '21', hours: 7 },
      { day: 'O', date: '22', hours: 6 },
      { day: 'T', date: '23', hours: 7 },
      { day: 'C', date: '24', hours: 8 },
      { day: 'P', date: '25', hours: 7 },
      { day: 'O', date: '26', hours: 6 },
      { day: 'T', date: '27', hours: 7 },
      { day: 'C', date: '28', hours: 8 },
      { day: 'P', date: '29', hours: 7 },
      { day: 'O', date: '30', hours: 6 },
      { day: 'T', date: '31', hours: 7 },
    ],
  },
];
