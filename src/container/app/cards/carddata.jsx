import face1 from '../../../assets/images/faces/1.jpg';
import face8 from '../../../assets/images/faces/8.jpg';
import face14 from '../../../assets/images/faces/14.jpg';
import face13 from '../../../assets/images/faces/13.jpg';
import face16 from '../../../assets/images/faces/16.jpg';
import face2 from '../../../assets/images/faces/2.jpg';
import face4 from '../../../assets/images/faces/4.jpg';
import face6 from '../../../assets/images/faces/6.jpg';
import face10 from '../../../assets/images/faces/10.jpg';
import face9 from '../../../assets/images/faces/9.jpg';
import face7 from '../../../assets/images/faces/7.jpg';
import face15 from '../../../assets/images/faces/15.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face11 from '../../../assets/images/faces/11.jpg';
import face12 from '../../../assets/images/faces/12.jpg';
import face5 from '../../../assets/images/faces/5.jpg';

//Background Colored Cards
export const Backgroundcolorcards = [
    { id: 1, bgColor: "primary", imgSrc: face11, name: "Adam Smith", status: "Finished by today", text: "fixed-white" },
    { id: 2, bgColor: "secondary", imgSrc: face12, name: "Elisha Corner", status: "Completed 24 days back", text: "fixed-white" },
    { id: 3, bgColor: "warning", imgSrc: face1, name: "Sarah Alina", status: "Completed today", text: "fixed-white" },
    { id: 4, bgColor: "info", imgSrc: face8, name: "Monica Karen", status: "Pending from 4 days", text: "fixed-white" },
    { id: 5, bgColor: "success", imgSrc: face5, name: "Samantha Sid", status: "In leave for 1 month", text: "fixed-white" },
    { id: 6, bgColor: "danger", imgSrc: face14, name: "Sebastien Steyn", status: "Completed by Tomorrow", text: "fixed-white" },
    { id: 7, bgColor: "light", imgSrc: face13, name: "Jacob Smith", status: "Finished by 24, Nov", text: "text-muted" },
    { id: 8, bgColor: "dark", imgSrc: face16, name: "Pope Adam", status: "Completed on 24, May", text: "white" }
]

//Colored Border Cards
export const Coloredborder = [
    {
        id: 1,
        borderColor: "primary",
        title: "Home Page Design",
        badges: [
            { bgColor: "primary-transparent", text: "Framework" },
            { bgColor: "secondary-transparent", text: "Angular" },
            { bgColor: "info-transparent", text: "Php" },
        ],
        avatars: [face2, face8, face2],
    },
    {
        id: 2,
        borderColor: "secondary",
        title: "Landing Page Design",
        badges: [
            { bgColor: "danger-transparent", text: "Laravel" },
            { bgColor: "teal-transparent", text: "Codeignitor" },
            { bgColor: "success-transparent", text: "Php" },
        ],
        avatars: [face4, face6]
    },
    {
        id: 3,
        borderColor: "warning",
        title: "Update New Project",
        badges: [
            { bgColor: "warning-transparent", text: "Html" },
            { bgColor: "secondary-transparent", text: "Bootstrap" },
            { bgColor: "info-transparent", text: "React" },
        ],
        avatars: [face1, face12, face10, face16]
    },
    {
        id: 4,
        borderColor: "info",
        title: "New Project Discussion",
        badges: [
            { bgColor: "info-transparent", text: "React" },
            { bgColor: "primary-transparent", text: "Typescript" },
        ],
        avatars: [face3, face14, face11]
    },
    {
        id: 5,
        borderColor: "danger",
        title: "Recent Projects Testing",
        badges: [
            { bgColor: "primary-transparent", text: "Ui" },
            { bgColor: "secondary-transparent", text: "Angular" },
            { bgColor: "info-transparent", text: "Java" },
        ],
        avatars: [face15],
    },
    {
        id: 6,
        borderColor: "success",
        title: "About Us Page Redesign",
        badges: [
            { bgColor: "danger-transparent", text: "Html" },
            { bgColor: "warning-transparent", text: "Symphony" },
            { bgColor: "success-transparent", text: "Php" },
        ],
        avatars: [face6, face9]
    },
    {
        id: 7,
        borderColor: "default",
        title: "New Employees",
        badges: [
            { bgColor: "warning-transparent", text: "Html" },
            { bgColor: "info-transparent", text: "Cake Php" },
            { bgColor: "success-transparent", text: "React" },
        ],
        avatars: [face5, face6, face7]
    },
    {
        id: 8,
        borderColor: "dark",
        title: "Terminated Employees",
        badges: [
            { bgColor: "primary-transparent", text: "Angular" },
        ],
        avatars: [face9, face11, face12, face15]
    },
]