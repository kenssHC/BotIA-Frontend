import face1 from "../../../../assets/images/faces/1.jpg";
import face2 from "../../../../assets/images/faces/2.jpg";
import face3 from "../../../../assets/images/faces/3.jpg";
import face5 from "../../../../assets/images/faces/5.jpg";
import face6 from "../../../../assets/images/faces/6.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import face11 from "../../../../assets/images/faces/11.jpg";
import face12 from "../../../../assets/images/faces/12.jpg";
import face13 from "../../../../assets/images/faces/13.jpg";
import face14 from "../../../../assets/images/faces/14.jpg";
import face15 from "../../../../assets/images/faces/15.jpg";


export const BasicTable = [
  { id: 1, name: "Mark", createdOn: "21,Dec 2021", number: "+1234-12340", status: "Completed", statusColor: "primary" },
  { id: 2, name: "Monika", createdOn: "29,April 2022", number: "+1523-12459", status: "Failed", statusColor: "warning" },
  { id: 3, name: "Madina", createdOn: "30,Nov 2022", number: "+1982-16234", status: "Successful", statusColor: "success" },
  { id: 4, name: "Bhamako", createdOn: "18,Mar 2022", number: "+1526-10729", status: "Pending", statusColor: "secondary" },
]
export const TableWithoutBorders = [
  { id: 1, name: "Harshrath", transactionId: "#5182-3467", created: "24 May 2022", status: "Fixed", statusColor: "primary" },
  { id: 2, name: "Zozo Hadid", transactionId: "	#5182-3412", created: "02 July 2022", status: "In Progress", statusColor: "warning" },
  { id: 3, name: "Martiana", transactionId: "#5182-3423", created: "15 April 2022", status: "Completed", statusColor: "success" },
  { id: 4, name: "Alex Carey", transactionId: "#5182-3456", created: "17 March 2022", status: "Pending", statusColor: "danger" },
]
export const TableGroupDivideres = [
  { id: 1, product: "Smart Watch", seller: "	Slowtrack.inc", salePercentage: "24.23%", arrow: 'up', color: "success", quantitySold: "250/1786" },
  { id: 2, product: "White Sneakers", seller: "	American & Co.inc", salePercentage: "12.45%", arrow: 'down', color: "danger", quantitySold: "123/985" },
  { id: 3, product: "Baseball Bat", seller: "Sports Company", salePercentage: "06.64%", arrow: 'up', color: "success", quantitySold: "124/232" },
  { id: 4, product: "Black Hoodie", seller: "Renonds Fabrics", salePercentage: "14.42%", arrow: 'up', color: "success", quantitySold: "192/2456" },
]
export const HoverableRows = [
  {
    id: 1, src: face1, name: "Joanna Smith", email: "joannasmith14@gmail.com", category: "Fashion", categoryColor: "primary",
    teem: [{ img1: face1 }, { img1: face2 }, { img1: face14 }, { img1: face13 },],
    status: 40, statusColor: "primary"
  },
  {
    id: 2, src: face2, name: "Kara Kova", email: "milesakara@gmail.com", category: "Clothing", categoryColor: "warning",
    teem: [{ img1: face1 }, { img1: face2 }, { img1: face14 }, { img1: face13 }, { img1: face14 }, { img1: face11 }, { img1: face1 }],
    status: 30, statusColor: "primary"
  },
  {
    id: 3, src: face3, name: "Donald Trimb", email: "donaldo21@gmail.com", category: "Electronics", categoryColor: "danger",
    teem: [{ img1: face1 }, { img1: face2 }, { img1: face14 }, { img1: face13 }, { img1: face14 }, { img1: face11 },],
    status: 10, statusColor: "primary"
  },
  {
    id: 4, src: face5, name: "Justin Gaethje", email: "justingae@gmail.com", category: "Sports", categoryColor: "danger",
    teem: [{ img1: face1 }, { img1: face2 }, { img1: face14 }, { img1: face1 },],
    status: 80, statusColor: "primary"
  },
]

export const TableWithCaption = [
  { id: 1, country: "United States", medalsWon: "2012", noOfAthletes: "1823" },
  { id: 2, country: "United Kingdom", medalsWon: "1012", noOfAthletes: "	992" },
  { id: 3, country: "Germany", medalsWon: "914", noOfAthletes: "875" },
]
export const TableWithTopCaption = [
  { id: 1, name: "Microsoft", revenue: "$170 billion", country: "United States" },
  { id: 2, name: "HP", revenue: "$70 billion", country: "United States" },
  { id: 3, name: "IBM", revenue: "$60 billion", country: "United States" },
]
export const ActiveTables = [
  { id: 1, name: "Mark", createdOn: "21,Dec 2021", number: "+1234-12340", status: "Completed", statusColor: "primary" },
  { id: 2, name: "Monika", createdOn: "29,April 2022", number: "+1523-12459", status: "Failed", statusColor: "warning" },
  { id: 3, name: "Madina", createdOn: "30,Nov 2022", number: "+1982-16234", status: "Successful", statusColor: "success" },
  { id: 4, name: "Bhamako", createdOn: "18,Mar 2022", number: "+1526-10729", status: "Pending", statusColor: "secondary" },
]


export const AlwaysResponsive = [
  { id: 1, src: face1, teemHead: "Mayor Kelly", category: "Manufacturer", role: "Team Lead", color: "primary", gmail: "mayorkrlly@gmail.com", team: [{ img1: face1 }, { img1: face2 }, { img1: face14 }, { img1: face5 },], moreImg: "+4", workProgress: 50, revenue: "$10,984.29", progressColor: "primary" },
  { id: 2, src: face5, teemHead: "Andrew Garfield", category: "Managing Director", role: "Director", color: "warning", gmail: "andrewgarfield@gmail.com", team: [{ img1: face6 }, { img1: face14 }, { img1: face15 },], moreImg: "+10", workProgress: 90, revenue: "$1.4billion", progressColor: "primary" },
  { id: 3, src: face15, teemHead: "Simon Cowel", category: "Service Manager", role: "Manager", color: "success", gmail: "simoncowel234@gmail.com", team: [{ img1: face1 }, { img1: face5 }], moreImg: "+4", workProgress: 40, revenue: "$7,123.21", progressColor: "primary" },
  { id: 4, src: face3, teemHead: "Mirinda Hers", category: "Recruiter", role: "Employee", color: "danger", gmail: "mirindahers@gmail.com", team: [{ img1: face5 }, { img1: face10 }, { img1: face11 }], moreImg: "+8", workProgress: 20, revenue: "$2,325.45", progressColor: "primary" },
]
export const Table1data = [
  { id: 1, src: face13, name: 'Sukuro Kim', mail: 'kimosukuro@gmail.com', color: 'success-transparent ', class: '', text: 'Active', class1: 'online' },
  { id: 2, src: face6, name: 'Hasimna', mail: 'hasimna2132@gmail.com', color: 'light', class: 'text-default', text: 'Inactive', class1: 'offline' },
  { id: 3, src: face15, name: 'Azimo Khan', mail: 'azimokhan421@gmail.com', color: 'success-transparent ', class: '', text: 'Active', class1: 'online' },
  { id: 4, src: face5, name: 'Samantha Julia', mail: '	julianasams143@gmail.com', color: 'success-transparent ', class: '', text: 'Active', class1: 'online' }
];


export const Table2data = [
  { id: 1, src: face3, order: '#0007', date: '26-04-2022', name: 'Mayor Kelly', },
  { id: 2, src: face6, order: '#0008', date: '	15-02-2022', name: 'Wicky Kross', },
  { id: 3, src: face1, order: '#0009', date: '23-05-2022', name: 'Julia Cam', }
];

export const Table3data = [
  { id: 1, src: face10, order: '#0011', date: '07-01-2022', name: 'Helsenky', },
  { id: 2, src: face14, order: '#0012', date: '18-05-2022', name: 'Brodus', },
  { id: 3, src: face12, order: '#0013', date: '19-03-2022', name: 'Chikka Alen', }
];

export const Table4data = [
  { id: 1, src: face13, order: '#0014', date: '21-02-2022', name: 'Sukuro Kim', },
  { id: 2, src: face11, order: '#0018', date: '26-03-2022', name: 'Alex Carey', },
  { id: 3, src: face2, order: '#0020', date: '14-03-2022', name: 'Pamila Anderson', }
];

export const Table5data = [
  { id: 1, order: '2022R-01', date: '27-010-2022', name: 'Moracco' },
  { id: 2, order: '2022R-02', date: '28-10-2022', name: 'Thornton' },
  { id: 3, order: '2022R-03', date: '22-10-2022', name: 'Larry Bird' },
  { id: 4, order: '2022R-04', date: '29-09-2022', name: 'Erica Sean' }
];

export const Table6data = [
  { id: 1, text1: 'Mark', text2: 'Otto', text3: '@mdo' },
  { id: 2, text1: 'Jacob', text2: 'Thornton', text3: '@fat' },
  { id: 3, text1: 'Larry the Bird', text2: 'Thornton', text3: '@twitter' }
];

export const Table7data = [
  { id: 1, src: face15, name: 'Mark Cruise', mail: 'markcruise24@gmail.com', date: 'Jul 26,2022', text1: 'IN-2032', text2: 'Paid', color: 'success-transparent', class: '', icon: 'check-fill' },
  { id: 2, src: face12, name: 'Charanjeep', mail: 'charanjeep@gmail.in', date: 'Mar 14,2022', text1: 'IN-2022', text2: 'Paid', color: 'success-transparent', class: '', icon: 'check-fill' },
  { id: 3, src: face5, name: 'Samantha Julie', mail: 'julie453@gmail.com', date: 'Feb 1,2022', text1: 'IN-2014', text2: 'Cancelled', color: 'danger-transparent', class: '', icon: 'close-fill' },
  { id: 4, src: face11, name: 'Simon Cohen', mail: 'simon@gmail.com', date: 'Apr 24,2022', text1: 'IN-2036', text2: '	Refunded', color: 'light', class: 'text-default', icon: 'reply-line' }
];

export const Table8data = [
  { id: 1, name: 'Harshrath', date: '24 May 2022', text: '	#5182-3467' },
  { id: 2, name: 'Zozo Hadid', date: '02 July 2022', text: '#5182-3412' },
  { id: 3, name: 'Martiana', date: '15 April 2022', text: '#5182-3423' },
  { id: 4, name: 'Alex Carey', date: '17 March 2022', text: '#5182-3456' }
];

export const Table9data = [
  { id: 1, name: 'Harshrath', date: '24 May 2022', text: '	#5182-3467', btn: 'Pending', color: 'primary-light' },
  { id: 2, name: 'Zozo Hadid', date: '02 July 2022', text: '#5182-3412', btn: 'Pending', color: 'primary-light' },
  { id: 3, name: 'Martiana', date: '15 April 2022', text: '#5182-3423', btn: 'Rejected', color: 'danger-light' },
  { id: 4, name: 'Alex Carey', date: '17 March 2022', text: '#5182-3456', btn: 'Processed', color: 'success-light' }
];

export const Table10data = [
  { id: 1, text1: '01', text2: 'Manchester', text3: '232', text4: '42%' },
  { id: 2, text1: '02', text2: 'Barcelona', text3: '175', text4: '58%' },
  { id: 3, text1: '03', text2: 'Portugal', text3: '126', text4: '32%' }
];

export const Table11data = [
  { id: '1', name: 'Zelensky', date: '25-Apr-2021', text: 'Paid', class: 'success-transparent' },
  { id: '2', name: 'Kim Jong', date: '29-April-2022', text: 'Pending', class: 'danger-transparent' },
  { id: '3', name: 'Obana', date: '30-Nov-2022', text: 'Paid', class: 'success-transparent' },
  { id: '4', name: 'Sean Paul', date: '01-Jan-2022', text: 'Paid', class: 'success-transparent' },
  { id: '5', name: 'Karizma', date: '14-Feb-2022', text: 'Pending', class: 'danger-transparent' }
];

export const Table12data = [
  { id: 1, text: 'Default', color: 'primary-transparent', quantity: '22', price: '$2,012', class1: '', class2: '', name: 'Rita Book' },
  { id: 2, text: 'Primary', color: 'primary', quantity: '22', price: '$4,254', class1: 'table-primary', class2: '', name: 'Rhoda Report' },
  { id: 3, text: 'Secondary', color: 'secondary', quantity: '26', price: '$1,234', class1: 'table-secondary', class2: '', name: 'Rita Book' },
  { id: 4, text: 'Success', color: 'success', quantity: '42', price: '$2,623', class1: 'table-success', class2: '', name: 'Anne Teak' },
  { id: 5, text: 'Danger', color: 'danger', quantity: '52', price: '$32,132', class1: 'table-danger', class2: '', name: 'Dee End' },
  { id: 6, text: 'Warning', color: 'warning', quantity: '10', price: '$1,434', class1: 'table-warning', class2: '', name: 'Lee Nonmi' },
  { id: 7, text: 'Info', color: 'info', quantity: '63', price: '$1,854', class1: 'table-info', class2: '', name: 'Lynne Gwistic' },
  { id: 8, text: 'Light', color: 'light', quantity: '05', price: '$823', class1: 'table-light', class2: 'text-dark', name: 'Fran Tick' },
  { id: 9, text: 'Dark', color: 'dark', quantity: '35', price: '$1,832', class1: 'table-dark', class2: 'text-light', name: 'Polly Pipe' }
];

export const Table13data = [
  { id: 1, text1: 'This cell inherits', text2: ' from the table', text3: 'This cell inherits ', text4: 'from the table', class1: '', class2: '', code1: 'vertical-align: middle;', code2: 'vertical-align: middle;' },
  { id: 2, text1: 'This cell inherits', text2: 'from the table row', text3: 'This cell inherits ', text4: 'from the table row', class1: 'align-bottom', class2: '', code1: 'vertical-align: bottom;', code2: 'vertical-align: bottom;' },
  { id: 3, text1: 'This cell inherits', text2: ' from the table', text3: 'This cell is aligned to the top.', text4: '', class1: '', class2: 'align-top', code1: 'vertical-align: middle;', code2: '' },
];
