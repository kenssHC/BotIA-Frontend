import { FiUsers } from 'react-icons/fi';
import authService from '../../../../services/authService';

// Función para obtener los elementos del menú basados en el usuario actual
export const getMenuItems = () => {
  const currentUser = authService.getUser();
  
  // Debug: Mostrar información del usuario actual
  console.log('🔍 getMenuItems - Usuario actual:', currentUser);
  console.log('🔍 getMenuItems - isSuperAdmin:', currentUser?.isSuperAdmin);
  
  const baseMenuItems = [
     
      {
        path: `${import.meta.env.BASE_URL}asistente-ia`,
        icon: <i className="ri-bard-line"></i>,
        type: "sub",
        Name: "",
        active: false,
        selected: false,
        badge: "",
        badgetxt: "",
        class: "",
        title: "Asistente IA",
        children: [
          {
            path: `${import.meta.env.BASE_URL}asistente-ia/asistente`,
            title: "Asistente IA",
            type: "link",
            active: false,
            selected: false,
          }
        ],
      },
      {
        path: `${import.meta.env.BASE_URL}bandeja-mensajes/qr-scanner`,
        icon: <i className="fe fe-mail"></i>,
        type: "sub",
        Name: "",
        active: false,
        selected: false,
        badge: "",
        badgetxt: "",
        class: "",
        title: "QR scanner",
         children: [
          //  {
          //    path: `${import.meta.env.BASE_URL}bandeja-mensajes`,
          //    title: "General",
          //    type: "link",
          //    active: false,
          //    selected: false,
          //  },
          //  {
          //    path: `${import.meta.env.BASE_URL}bandeja-mensajes/conversaciones`,
          //    title: "Conversaciones",
          //    type: "link",
          //    active: false,
          //    selected: false,
          //  },
           {
             path: `${import.meta.env.BASE_URL}bandeja-mensajes/qr-scanner`,
             title: "QR Scanner",
             type: "link",
             active: false,
             selected: false,
           },
         ]
      }
  ];

  // Solo agregar el menú de usuarios si el usuario es super admin
  if (currentUser?.isSuperAdmin) {
    console.log('✅ Usuario es super admin - Agregando menú de usuarios');
    baseMenuItems.push({
      path: `${import.meta.env.BASE_URL}usuarios`,
      icon: <FiUsers />,
      type: "sub",
      Name: "",
      active: false,
      selected: false,
      badge: "",
      badgetxt: "",
      class: "",
      title: "Usuarios",
      children: [
        {
          path: `${import.meta.env.BASE_URL}usuarios/usuarios`,
          title: "Usuarios",
          type: "link",
          active: false,
          selected: false,
        }
      ],
    });
  } else {
    console.log('❌ Usuario NO es super admin - No se agrega menú de usuarios');
  }

  return baseMenuItems;
};

// Removemos el export estático - ahora usamos getMenuItems() dinámicamente
// export const MenuItems = getMenuItems();

      // // Apps
      //  {
      //    icon: <i className="fe fe-box"></i>,
      //    type: "sub",
      //    Name: "",
      //    active: false,
      //    selected: false,
      //    badge: "",
      //    badgetxt: "",
      //    class: "",
      //    title: "Apps",
      //    children: [
      //      {
      //        path: `${import.meta.env.BASE_URL}apps/cards`,
      //        title: "Cards",
      //        type: "link",
      //        active: false,
      //        selected: false,
      //      },
      //      {
      //        path: `${import.meta.env.BASE_URL}apps/draggable-cards`,
      //        title: "Draggable Cards",
      //        type: "link",
      //        active: false,
      //        selected: false,
      //      },
      //      {
      //        path: `${import.meta.env.BASE_URL}apps/full-calendar`,
      //        title: "Full Calendar",
      //        type: "link",
      //        active: false,
      //        selected: false,
      //      },
      //      {
      //        path: `${import.meta.env.BASE_URL}apps/contacts`,
      //        title: "Contacts",
      //        type: "link",
      //        active: false,
      //        selected: false,
      //      },
      //      {
      //        path: `${import.meta.env.BASE_URL}apps/notification`,
      //        title: "Notification",
      //        type: "link",
      //        active: false,
      //        selected: false,
      //      },
      //      {
      //        path: `${import.meta.env.BASE_URL}apps/widget-notification`,
      //        title: "Widget Notification",
      //        type: "link",
      //        active: false,
      //        selected: false,
      //      },
      //      {
      //        path: `${import.meta.env.BASE_URL}apps/treeview`,
      //        title: "Treeview",
      //        type: "link",
      //        active: false,
      //        selected: false,
      //      },
      //      {
      //        path: `${import.meta.env.BASE_URL}apps/widgets`,
      //        title: "Widgets",
      //        type: "link",
      //        active: false,
      //        selected: false,
      //      },
      //      {
      //        type: "sub",
      //        Name: "",
      //        active: false,
      //        selected: false,
      //        class: "",
      //        title: "Mail",
      //        children: [
      //          {
      //            path: `${import.meta.env.BASE_URL}apps/mail/mail`,
      //            title: "Mail",
      //            type: "link",
      //            active: false,
      //            selected: false,
      //          },
      //          {
      //            path: `${import.meta.env.BASE_URL}apps/mail/mail-compose`,
      //            title: "Mail Compose",
      //            type: "link",
      //            active: false,
      //            selected: false,
      //          },
      //          {
      //            path: `${import.meta.env.BASE_URL}apps/mail/read-mail`,
      //            title: "Read Mail",
      //            type: "link",
      //            active: false,
      //            selected: false,
      //          },
      //          {
      //            path: `${import.meta.env.BASE_URL}apps/mail/mailsetting`,
      //            title: "Mail-Setting",
      //            type: "link",
      //            active: false,
      //            selected: false,
      //          },
      //          {
      //            path: `${import.meta.env.BASE_URL}apps/mail/chat`,
      //            title: "Chat",
      //            type: "link",
      //            active: false,
      //            selected: false,
      //          },
      //        ],
      //      },
      //      {
      //        type: "sub",
      //        Name: "",
      //        active: false,
      //        selected: false,
      //        class: "",
      //        title: "Maps",
      //        children: [
      //          {
      //            path: `${import.meta.env.BASE_URL}apps/maps/leafletmaps`,
      //            title: "Leaflet Maps",
      //            type: "link",
      //            active: false,
      //            selected: false,
      //          },
      //          {
      //            path: `${import.meta.env.BASE_URL}apps/maps/vectormap`,
      //            title: "Vector Map",
      //            type: "link",
      //            active: false,
      //            selected: false,
      //          },
      //        ],
      //      },
      //      {
      //        type: "sub",
      //        Name: "",
      //        active: false,
      //        selected: false,
      //        class: "",
      //        title: "File Manager",
      //        children: [
      //          {
      //            path: `${import.meta.env.BASE_URL}apps/filemanager/filemanager`,
      //            title: "File Manger",
      //            type: "link",
      //            active: false,
      //            selected: false,
      //          },
      //          {
      //            path: `${import.meta.env.BASE_URL}apps/filemanager/filemanagerlist`,
      //            title: "Filemanager List",
      //            type: "link",
      //            active: false,
      //            selected: false,
      //          },
      //          {
      //            path: `${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`,
      //            title: "Filemanager Details",
      //            type: "link",
      //            active: false,
      //            selected: false,
      //          },
      //        ],
      //      },
      //    ],
      //  },
      // // Icons
      // {
      //   path: `${import.meta.env.BASE_URL}icons`,
      //   icon: <i className="fe fe-award"></i>,
      //   type: "link",
      //   selected: false,
      //   active: false,
      //   title: "Icons",
      // },

      // // Elements
      // {
      //   icon: <i className="fe fe-layers"></i>,
      //   type: "sub",
      //   Name: "",
      //   active: false,
      //   selected: false,
      //   badge: "",
      //   badgetxt: "",
      //   class: "",
      //   title: "Elements ",
      //   children: [
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/alerts`,
      //       title: "Alerts",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/avatars`,
      //       title: "Avatars",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/breadcrumbs`,
      //       title: "Breadcrumbs",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/buttons`,
      //       title: "Buttons",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/buttongroup`,
      //       title: "Button Group",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/badge`,
      //       title: "Badge",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/dropdowns`,
      //       title: "Dropdowns",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/imagesfigures`,
      //       title: "Images & Figures",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/listgroup`,
      //       title: "Listgroup",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/navtabs`,
      //       title: "Navs & Tabs",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/pagination`,
      //       title: "Pagination",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/popovers`,
      //       title: "Popovers",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/progress`,
      //       title: "Progress",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/spinners`,
      //       title: "Spinners",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/objectfit`,
      //       title: "Object Fit",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/typography`,
      //       title: "Typography",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/tooltips`,
      //       title: "Tooltips",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}elements/toasts`,
      //       title: "Toasts",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     }
      //   ],
      // },
      // // Advance UI
      // {
      //   icon: <i className="fe fe-package"></i>,
      //   type: "sub",
      //   Name: "",
      //   active: false,
      //   selected: false,
      //   badge: "",
      //   badgetxt: "",
      //   class: "",
      //   title: "Advanced Ui",
      //   children: [
      //     {
      //       path: `${import.meta.env.BASE_URL}advancedui/accordionscollapse`,
      //       title: "Accordions & Collapse",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}advancedui/carousel`,
      //       title: "Carousel",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}advancedui/modalcloses`,
      //       title: "Modal & Closes",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}advancedui/timeline`,
      //       title: "Timeline",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}advancedui/sweetalerts`,
      //       title: "Sweet Alert",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}advancedui/rating`,
      //       title: "Rating",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}advancedui/userlist`,
      //       title: "Userlist",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}advancedui/navbar`,
      //       title: "Navbar",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}advancedui/offcanvas`,
      //       title: "Offcanvas",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}advancedui/placeholders`,
      //       title: "Placeholders",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     // {
      //     //   path: `${import.meta.env.BASE_URL}advancedui/scrollspy`,
      //     //   title: "Scrollspy",
      //     //   type: "link",
      //     //   active: false,
      //     //   selected: false,
      //     // },
      //     {
      //       path: `${import.meta.env.BASE_URL}advancedui/swiperjs`,
      //       title: "Swiper Js",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },

      //   ],
      // },
      // // Forms
      // {
      //   icon: <i className="fe fe-file"></i>,
      //   type: "sub",
      //   Name: "",
      //   active: false,
      //   selected: false,
      //   badge: "",
      //   badgetxt: "",
      //   class: "",
      //   title: "Forms",
      //   children: [

      //     {
      //       type: "sub",
      //       Name: "",
      //       active: false,
      //       selected: false,
      //       class: "",
      //       title: "Form Elements",
      //       children: [
      //         {
      //           path: `${import.meta.env.BASE_URL}forms/formelements/inputs`,
      //           title: "Inputs",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}forms/formelements/checksradio`,
      //           title: "Checkout & Radios",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}forms/formelements/inputgroup`,
      //           title: "Input Group",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}forms/formelements/formselect`,
      //           title: "Form Select",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}forms/formelements/rangeslider`,
      //           title: "Range Slider",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}forms/formelements/inputmasks`,
      //           title: "Input Masks",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}forms/formelements/fileuploads`,
      //           title: "File Uploads",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}forms/formelements/datetimepicker`,
      //           title: "Date & TimePicker",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //       ],
      //     },

      //     {
      //       path: `${import.meta.env.BASE_URL}forms/floatinglabels`,
      //       title: "Floating Labels",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}forms/formlayout`,
      //       title: "Forms Layout",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       type: "sub",
      //       Name: "",
      //       active: false,
      //       selected: false,
      //       class: "",
      //       title: "Form Editor",
      //       children: [
      //         {
      //           path: `${import.meta.env.BASE_URL}forms/form_eidtors/editor`,
      //           title: "Editor",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //       ]
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}forms/validation`,
      //       title: "Validation",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}forms/select2`,
      //       title: "Select2",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     }

      //   ],
      // },

      // // Charts
      // {
      //   icon: <i className="fe fe-bar-chart-2"></i>,
      //   type: "sub",
      //   Name: "",
      //   active: false,
      //   selected: false,
      //   badge: "",
      //   badgetxt: "",
      //   class: "",
      //   title: "Charts",
      //   children: [

      //     {
      //       type: "sub",
      //       Name: "",
      //       active: false,
      //       selected: false,
      //       class: "",
      //       title: "Apex Charts",
      //       children: [
      //         {
      //           path: `${import.meta.env.BASE_URL}charts/apexcharts/linecharts`,
      //           title: "Line Charts",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}charts/apexcharts/areacharts`,
      //           title: "Area Charts",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}charts/apexcharts/columncharts`,
      //           title: "Column Charts",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}charts/apexcharts/barcharts`,
      //           title: "Bar Charts",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}charts/apexcharts/mixedcharts`,
      //           title: "Mixed Charts",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}charts/apexcharts/rangeareacharts`,
      //           title: "Range Area Charts",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}charts/apexcharts/timelinecharts`,
      //           title: "Timeline Charts",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}charts/apexcharts/candlestickcharts`,
      //           title: "CandleStick Charts",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}charts/apexcharts/boxplotcharts`,
      //           title: "BoxPlot Charts",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}charts/apexcharts/bubblecharts`,
      //           title: "Bubble Charts",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}charts/apexcharts/scattercharts`,
      //           title: "Scatter Charts",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}charts/apexcharts/heatmapcharts`,
      //           title: "Heatmap Charts",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}charts/apexcharts/treemapcharts`,
      //           title: "Treemap Charts",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}charts/apexcharts/piecharts`,
      //           title: "Pie Charts",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}charts/apexcharts/radialbarcharts`,
      //           title: "Radialbar Charts",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}charts/apexcharts/radarcharts`,
      //           title: "Radar Charts",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}charts/apexcharts/polarareacharts`,
      //           title: "Polararea Charts",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //       ],
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}charts/chartjscharts`,
      //       title: "ChartJs Charts",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}charts/echartcharts`,
      //       title: "Echart Charts",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     }
      //   ],
      // },

      // // Pages
      // {
      //   icon: <i className="fe fe-compass"></i>,
      //   type: "sub",
      //   Name: "",
      //   active: false,
      //   selected: false,
      //   badge: "",
      //   badgetxt: "",
      //   class: "",
      //   title: "Pages",
      //   children: [

      //     {
      //       type: "sub",
      //       Name: "",
      //       active: false,
      //       selected: false,
      //       class: "",
      //       title: "Blog Pages",
      //       children: [
      //         {
      //           path: `${import.meta.env.BASE_URL}pages/blogpages/blog`,
      //           title: "Blog",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}pages/blogpages/blogdetails`,
      //           title: "Blog Details",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}pages/blogpages/blogedit`,
      //           title: "Blog Edit",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //       ],
      //     },

      //     {
      //       path: `${import.meta.env.BASE_URL}pages/profile`,
      //       title: "Profile",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}pages/editprofile`,
      //       title: "Edit Profile",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },

      //     {
      //       path: `${import.meta.env.BASE_URL}pages/aboutus`,
      //       title: "About Us",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}pages/setting`,
      //       title: "Settings",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}pages/invoice`,
      //       title: "Invoice",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}pages/pricing`,
      //       title: "Pricing",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}pages/gallery`,
      //       title: "Gallery",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}pages/todotask`,
      //       title: "Todo Task",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}pages/faq's`,
      //       title: "Faqs",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },

      //     {
      //       path: `${import.meta.env.BASE_URL}pages/emptypages`,
      //       title: "Empty Page",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       type: "sub",
      //       Name: "",
      //       active: false,
      //       selected: false,
      //       class: "",
      //       title: "Tables",
      //       children: [
      //         {
      //           path: `${import.meta.env.BASE_URL}pages/tables/tables`,
      //           title: "Tables",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}pages/tables/gridjstables`,
      //           title: "Grid Js Tables",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //         {
      //           path: `${import.meta.env.BASE_URL}pages/tables/datatables`,
      //           title: "Data Tables",
      //           type: "link",
      //           active: false,
      //           selected: false,
      //         },
      //       ]
      //     },




      //   ],
      // },
      // {
      //   icon:<i className="fe fe-grid"></i>,
      //   type: 'sub', active: false, selected: false, title: 'Sub Menu', children: [
      //     { path: "", type: 'empty', active: false, selected: false, dirchange: false, title: 'Sub Menu-1' },
      //     {
      //       title: "Sub Menu-2", type: "sub", dirchange: false, selected: false, active: false, children: [
      //         { path: "", type: 'empty', active: false, dirchange: false, selected: false, title: 'Sub Menu-2-1' },
      //         {
      //           title: "Sub Menu-2-2", type: "sub", dirchange: false, selected: false, active: false, children: [
      //             { path: "", type: 'empty', active: false, dirchange: false, selected: false, title: 'Sub Menu-2-2-1' },
      //             { path: "", type: 'empty', active: false, dirchange: false, selected: false, title: 'Sub Menu-2-2-2' }
      //           ]
      //         },
      //       ]
      //     },
      //   ]
      // },
      // // Ecommerce
      // {
      //   icon: <i className="fe fe-shopping-cart"></i>,
      //   type: "sub",
      //   Name: "",
      //   active: false,
      //   selected: false,
      //   badge: "",
      //   badgetxt: "",
      //   class: "",
      //   title: "Ecommerce ",
      //   children: [
      //     {
      //       path: `${import.meta.env.BASE_URL}ecommerce/products`,
      //       title: "Products",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}ecommerce/productsdetails`,
      //       title: "Product Details",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}ecommerce/cart`,
      //       title: "Cart",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}ecommerce/checkout`,
      //       title: "Checkout",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}ecommerce/wishlist`,
      //       title: "Wishlist",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },

      //   ],
      // },

      // // Utilities
      // {
      //   icon: <i className="fe fe-codepen"></i>,
      //   type: "sub",
      //   Name: "",
      //   active: false,
      //   selected: false,
      //   badge: "",
      //   badgetxt: "",
      //   class: "",
      //   title: "Utilities ",
      //   children: [
      //     {
      //       path: `${import.meta.env.BASE_URL}utilities/borders`,
      //       title: "Borders",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}utilities/breakpoints`,
      //       title: "Breakpoints",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}utilities/colors`,
      //       title: "Colors",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}utilities/columns`,
      //       title: "Columns",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}utilities/flex`,
      //       title: "Flex",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}utilities/gutters`,
      //       title: "Gutters",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}utilities/helpers`,
      //       title: "Helpers",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}utilities/positions`,
      //       title: "Position",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}utilities/additionalcontent`,
      //       title: "Additional Content",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },


      //   ],
      // },

      // // Customs Pages
      // {
      //   icon: <i className="fe fe-aperture"></i>,
      //   type: "sub",
      //   Name: "",
      //   active: false,
      //   selected: false,
      //   badge: "",
      //   badgetxt: "",
      //   class: "",
      //   title: "Customs Pages ",
      //   children: [
      //     {
      //       path: `${import.meta.env.BASE_URL}custompages/sign-in`,
      //       title: "Sign In",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}custompages/sign-up`,
      //       title: "Sign Up",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}custompages/forgotpassword`,
      //       title: "Forgot Password",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}custompages/resetpassword`,
      //       title: "Reset Password",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}custompages/lockscreen`,
      //       title: "Lockscreen",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}custompages/underconstruction`,
      //       title: "Under Construction",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}custompages/error-404`,
      //       title: "404 Error",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}custompages/error-500`,
      //       title: "500 Error",
      //       type: "link",
      //       active: false,
      //       selected: false,
      //     }
      //   ],
      // },


    // ],
  // },
