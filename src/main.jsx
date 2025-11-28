import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './pages/App.jsx';
import './index.scss'
import Login from './auth/login.jsx';
import Auth from './auth/auth.jsx';
import ForgotPassword from './auth/ForgotPassword.jsx';
import NewPassword from './auth/NewPassword.jsx';
import PasswordUpdated from './auth/PasswordUpdated.jsx';
import VerifyEmail from './auth/VerifyEmail.jsx';
import FirstPasswordChange from './auth/FirstPasswordChange.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Calendario from './container/calendario/calendario.jsx';
import PreguntasFrecuentes from './container/fine_tunning/preguntas_frecuentes/preguntas-frecuentes.jsx';
import Productos from './container/fine_tunning/productos/productos.jsx';
import Medios from './container/fine_tunning/medios/medios.jsx';
import Bots from './container/bots/bots.jsx';
import NuevoBot from './container/bots/nuevo-bot.jsx';
import { NewCampaigns } from './container/automatizacion/campaingn/NewCampaign/NewCampaign.jsx';
import { ListCampaigns } from './container/automatizacion/campaingn/ListCampaigns/ListCampaigns.jsx';
import WhatsAppAudiovisuales from './container/automatizacion/campaingn/NewCampaign/WhatsAppAudiovisuales.jsx';
import WhatsAppEncuestas from './container/automatizacion/campaingn/NewCampaign/WhatsAppEncuestas.jsx';
import WhatsAppLlamadas from './container/automatizacion/campaingn/NewCampaign/WhatsAppLlamadas.jsx';
import { GestorCitas } from './container/automatizacion/gestor-citas/gestor-citas.jsx';
import WhatsAppNuevoRecordatorio from './container/automatizacion/gestor-citas/WhatsAppNuevoRecordatorio.jsx';
import LlamadasNuevoRecordatorio from './container/automatizacion/gestor-citas/LlamadasNuevoRecordatorio.jsx';
import { BaseDatos } from './container/base-datos/base-datos.jsx';

import FirebaseSignup from './firebase/signup.jsx';
import Aboutus from './container/pages/aboutUs/aboutUs.jsx';
import Accordionscollapse from './container/advanced-ui/accordionscollapse/accordionscollapse.jsx';
import Carousels from './container/advanced-ui/carousel/carousel.jsx';
import Modalscloses from './container/advanced-ui/modalscloses/modalscloses.jsx';
import Navbars from './container/advanced-ui/navbar/navbar.jsx';
import Offcanva from './container/advanced-ui/offcanvas/offcanvas.jsx';
import Placeholders from './container/advanced-ui/placeholders/placeholders.jsx';
import Chat from './container/app/mail/chat/chat.jsx';
import Readmail from './container/app/mail/readmail/readmail.jsx';
import Leafletmaps from './container/app/maps/leaflet/leaflet.jsx';
import Vectormaps from './container/app/maps/vector/vector.jsx';
import Notifications from './container/app/notifications/notifications.jsx';
import Treeview from './container/app/treeview/treeview.jsx';
import Widgetnotifications from './container/app/widgetnotifications/widgetnotifications.jsx';
import Widgets from './container/app/widgets/widgets.jsx';
import Forgotpassword from './container/custompages/forgotpassword/forgotpassword.jsx';
import Lockscreen from './container/custompages/lockscreen/lockscreen.jsx';
import Resetpassword from './container/custompages/resetpassword/resetpassword.jsx';
import Avatars from './container/elements/avatars/avatars.jsx';
import Badges from './container/elements/badge/badge.jsx';
import Objectfit from './container/elements/objectfit/objectfit.jsx';
import Dropdowns from './container/elements/dropdowns/dropdowns.jsx';
import Imagesfigures from './container/elements/imagesfigures/imagesfigures.jsx';
import Listgroup from './container/elements/listgroup/listgroup.jsx';
import Navtabs from './container/elements/navstabs/navstabs.jsx';
import Paginations from './container/elements/pagination/pagination.jsx';
import Popovers from './container/elements/popovers/popovers.jsx';
import Progress from './container/elements/progress/progress.jsx';
import Spinners from './container/elements/spinners/spinners.jsx';
import Toasts from './container/elements/toasts/toasts.jsx';
import Tooltips from './container/elements/tooltips/tooltips.jsx';
import Typography from './container/elements/typography/typography.jsx';
import Icons from './container/icons/icons.jsx';
import Sweetalerts from './container/advanced-ui/sweetalerts/sweetalerts.jsx';
import Ratings from './container/advanced-ui/ratings/ratings.jsx';
import Inputs from './container/forms/formelements/inputs/inputs.jsx';
import Checksradios from './container/forms/formelements/checksradios/checksradios.jsx';
import Inputgroup from './container/forms/formelements/inputgroup/inputgroup.jsx';
import Formselect from './container/forms/formelements/formselect/formselect.jsx';
import Rangeslider from './container/forms/formelements/rangeslider/rangeslider.jsx';
import Fileuploads from './container/forms/formelements/fileuploads/fileuploads.jsx';
import Datetimepicker from './container/forms/formelements/datetimepickers/datetimepickers.jsx';
import Floatinglabel from './container/forms/floatinglabels/floatinglabels.jsx';
import Formlayouts from './container/forms/formslayout/formslayout.jsx';
import Validation from './container/forms/validation/validation.jsx';
import Select2 from './container/forms/select2/select2.jsx';
import Blog from './container/pages/blogpages/blog/blog.jsx';
import Blogdetails from './container/pages/blogpages/blogdetails/blogdetails.jsx';
import Blogedit from './container/pages/blogpages/blogedit/blogedit.jsx';
import Profile from './container/pages/profile/profile.jsx';
import Eiditprofile from './container/pages/eiditprofile/eiditprofile.jsx';
import Setting from './container/pages/setting/setting.jsx';
import Invoice from './container/pages/invoice/invoice.jsx';
import Pricing from './container/pages/pricing/pricing.jsx';
import Gallery from './container/pages/gallery/gallery.jsx';
import Todotask from './container/pages/todotask/todotask.jsx';
import Faqs from './container/pages/faqs/faqs.jsx';
import Emptypages from './container/pages/emptypages/emptypages.jsx';
import Tables from './container/pages/tables/tables/tables.jsx';
import Gridjstables from './container/pages/tables/gridjstables/gridjstables.jsx';
import Datatables from './container/pages/tables/datatables/datatables.jsx';
import Products from './container/ecommerce/products/products.jsx';
import Productdetails from './container/ecommerce/productdetails/productdetails.jsx';
import Cart from './container/ecommerce/cart/cart.jsx';
import Checkout from '../src/container/ecommerce/checkout/checkout.jsx';
import Wishlist from './container/ecommerce/wishlist/wishlist.jsx';

import Underconstruction from './container/custompages/underconstruction/underconstruction.jsx';
import Error500 from './container/custompages/error500/error500.jsx';
import Error404 from './container/custompages/error404/error404.jsx';

import Conversaciones from './container/bandeja/conversaciones/conversaciones.jsx';
import Signinbasic from './container/custompages/signin/signin.jsx';
import Signupbasic from './container/custompages/signup/signup.jsx';
import Dashboard from './container/dashboard/dashboard.jsx';
import Resumen from './container/dashboard/resumen.jsx';
import Automatizacion from './container/dashboard/automatizacion.jsx';
import SpeechAnalytics from './container/charts/speech-analytics/speech-analytics.jsx';
import AsistenteIA from './container/asistente-ia/asistente/asistente.jsx';
import Filemangerlist from './container/app/filemanager/filemangerlist/filemangerlist.jsx';
import Filemanger from './container/app/filemanager/filemanger/filemanger.jsx';
import Draggablecards from './container/app/draggable-cards/draggable-cards.jsx';
import Contacts from './container/app/contacts/contacts.jsx';
import Cards from './container/app/cards/cards.jsx';
import Userlist from './container/advanced-ui/userlist/userlist.jsx';
import Timeline from './container/advanced-ui/timeline/timeline.jsx';
import Mail from './container/app/mail/mail/mail.jsx';
import Swiperjs from './container/advanced-ui/swiperjs/swiperjs.jsx';
import Mailcompose from './container/app/mail/mailcompose/mailcompose.jsx';
import Mailsettings from './container/app/mail/mailsettings/mailsettings.jsx';
import Filemangerdetails from './container/app/filemanager/filemangerdetails/filemangerdetails.jsx';
import Fullcalendar from './container/app/fullCalendar/full-calendar.jsx';
import Authenticationlayout from './pages/authenticationlayout.jsx';
import Buttons from './container/elements/buttons/buttons.jsx';
import Breadcrumbs from './container/elements/breadcumbs/breadcumbs.jsx';
import Alerts from './container/elements/alerts/alerts.jsx';
import Buttongroup from './container/elements/buttongroup/buttongroup.jsx';
import Editor from './container/forms/formeidtors/editor/editor.jsx';
import Inputmaskses from './container/forms/formelements/inputmasks/inputmasks.jsx';
import UserManagement from './components/usuarios/UserManagement.jsx';
import UserConfig from './components/usuarios/UserConfig.jsx';
import QRScanner from './components/bandeja-mensajes/QRScanner.jsx';

import InformacionNegocio from './container/fine_tunning/informacion_negocio/informacion-negocio.jsx';
import Tiendas from './container/fine_tunning/tiendas/tiendas.jsx';
import MensajesRecuperacion from './container/automatizacion/mensajes-recuperacion/mensajes-recuperacion.jsx';
import WhatsAppMensajeRecuperacion from './container/automatizacion/mensajes-recuperacion/WhatsAppMensajeRecuperacion.jsx';
import LlamadasMensajesRecuperacion from './container/automatizacion/mensajes-recuperacion/LlamadasMensajesRecuperacion.jsx';

window.global = window; // Polyfill for global

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />}>
          <Route index element={<Login />} />
          <Route path={`${import.meta.env.BASE_URL}login`} element={<Login />} />
          <Route path={`${import.meta.env.BASE_URL}signup`} element={<FirebaseSignup />} />
          <Route path={`${import.meta.env.BASE_URL}ForgotPassword`} element={<ForgotPassword />} />
          <Route path={`${import.meta.env.BASE_URL}VerifyEmail`} element={<VerifyEmail />} />
          <Route path={"/reset-password"} element={<NewPassword />} />
          <Route path={`${import.meta.env.BASE_URL}PasswordUpdated`} element={<PasswordUpdated />} />
          <Route path={`${import.meta.env.BASE_URL}first-password-change`} element={<FirstPasswordChange />} />
        </Route>
        <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
          <Route path={`${import.meta.env.BASE_URL}dashboard`} element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}dashboard/resumen`} element={<ProtectedRoute><Resumen /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}dashboard/automatizacion`} element={<ProtectedRoute><Automatizacion /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}dashboard/automatizacion/campaigns`} element={<ProtectedRoute><ListCampaigns /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}dashboard/automatizacion/campaigns/new`} element={<ProtectedRoute><NewCampaigns /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}dashboard/automatizacion/campaigns/new/audiovisuales`} element={<ProtectedRoute><WhatsAppAudiovisuales /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}dashboard/automatizacion/campaigns/new/encuestas`} element={<ProtectedRoute><WhatsAppEncuestas /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}dashboard/automatizacion/campaigns/new/llamadas`} element={<ProtectedRoute><WhatsAppLlamadas /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}dashboard/automatizacion/gestor-citas`} element={<ProtectedRoute><GestorCitas /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}dashboard/speech-analytics`} element={<ProtectedRoute><SpeechAnalytics /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}base-datos`} element={<ProtectedRoute><BaseDatos /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}base-datos/new`} element={<ProtectedRoute><BaseDatos /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}fine-tunning/informacion-negocio`} element={<ProtectedRoute><InformacionNegocio /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}fine-tunning/preguntas-frecuentes`} element={<ProtectedRoute><PreguntasFrecuentes /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}fine-tunning/productos`} element={<ProtectedRoute><Productos /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}fine-tunning/tiendas`} element={<ProtectedRoute><Tiendas /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}fine-tunning/medios`} element={<ProtectedRoute><Medios /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}bots`} element={<ProtectedRoute><Bots /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}bots/nuevo`} element={<ProtectedRoute><NuevoBot /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}bandeja-mensajes/conversaciones`} element={<ProtectedRoute><Conversaciones /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}bandeja-mensajes/qr-scanner`} element={<ProtectedRoute><QRScanner /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}calendario`} element={<ProtectedRoute><Calendario /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}automatizacion/campaigns`} element={<ProtectedRoute><ListCampaigns /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}automatizacion/campaigns/new`} element={<ProtectedRoute><NewCampaigns /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}automatizacion/gestor-citas`} element={<ProtectedRoute><GestorCitas /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}automatizacion/gestor-citas/nuevo/whatsapp`} element={<ProtectedRoute><WhatsAppNuevoRecordatorio /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}automatizacion/gestor-citas/nuevo/llamadas`} element={<ProtectedRoute><LlamadasNuevoRecordatorio /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}automatizacion/mensajes-recuperacion`} element={<ProtectedRoute><MensajesRecuperacion /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}automatizacion/mensajes-recuperacion/nuevo/whatsapp`} element={<ProtectedRoute><WhatsAppMensajeRecuperacion /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}automatizacion/mensajes-recuperacion/nuevo/llamadas`} element={<ProtectedRoute><LlamadasMensajesRecuperacion /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/cards`} element={<ProtectedRoute><Cards /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/draggable-cards`} element={<ProtectedRoute><Draggablecards /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/full-calendar`} element={<ProtectedRoute><Fullcalendar /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/notification`} element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/widget-notification`} element={<ProtectedRoute><Widgetnotifications /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/treeview`} element={<ProtectedRoute><Treeview /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/widgets`} element={<ProtectedRoute><Widgets /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/contacts`} element={<ProtectedRoute><Contacts /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/mail/mail`} element={<ProtectedRoute><Mail /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/mail/mail-compose`} element={<ProtectedRoute><Mailcompose /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/mail/read-mail`} element={<ProtectedRoute><Readmail /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/mail/mailsetting`} element={<ProtectedRoute><Mailsettings /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/mail/chat`} element={<ProtectedRoute><Chat /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/maps/leafletmaps`} element={<ProtectedRoute><Leafletmaps /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/maps/vectormap`} element={<ProtectedRoute><Vectormaps /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/filemanager/filemanager`} element={<ProtectedRoute><Filemanger /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerlist`} element={<ProtectedRoute><Filemangerlist /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`} element={<ProtectedRoute><Filemangerdetails /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}icons`} element={<ProtectedRoute><Icons /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/alerts`} element={<ProtectedRoute><Alerts /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/avatars`} element={<ProtectedRoute><Avatars /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/breadcrumbs`} element={<ProtectedRoute><Breadcrumbs /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/buttons`} element={<ProtectedRoute><Buttons /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/buttongroup`} element={<ProtectedRoute><Buttongroup /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/badge`} element={<ProtectedRoute><Badges /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/dropdowns`} element={<ProtectedRoute><Dropdowns /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/imagesfigures`} element={<ProtectedRoute><Imagesfigures /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/listgroup`} element={<ProtectedRoute><Listgroup /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/navtabs`} element={<ProtectedRoute><Navtabs /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/pagination`} element={<ProtectedRoute><Paginations /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/popovers`} element={<ProtectedRoute><Popovers /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/progress`} element={<ProtectedRoute><Progress /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/spinners`} element={<ProtectedRoute><Spinners /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/objectfit`} element={<ProtectedRoute><Objectfit /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/typography`} element={<ProtectedRoute><Typography /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/tooltips`} element={<ProtectedRoute><Tooltips /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}elements/toasts`} element={<ProtectedRoute><Toasts /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/accordionscollapse`} element={<ProtectedRoute><Accordionscollapse /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/carousel`} element={<ProtectedRoute><Carousels /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/modalcloses`} element={<ProtectedRoute><Modalscloses /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/timeline`} element={<ProtectedRoute><Timeline /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/sweetalerts`} element={<ProtectedRoute><Sweetalerts /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/rating`} element={<ProtectedRoute><Ratings /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/userlist`} element={<ProtectedRoute><Userlist /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/navbar`} element={<ProtectedRoute><Navbars /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/offcanvas`} element={<ProtectedRoute><Offcanva /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/placeholders`} element={<ProtectedRoute><Placeholders /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}advancedui/swiperjs`} element={<ProtectedRoute><Swiperjs /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formelements/inputs`} element={<ProtectedRoute><Inputs /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formelements/checksradio`} element={<ProtectedRoute><Checksradios /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formelements/inputgroup`} element={<ProtectedRoute><Inputgroup /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formelements/formselect`} element={<ProtectedRoute><Formselect /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formelements/rangeslider`} element={<ProtectedRoute><Rangeslider /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formelements/inputmasks`} element={<ProtectedRoute><Inputmaskses /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formelements/fileuploads`} element={<ProtectedRoute><Fileuploads /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formelements/datetimepicker`} element={<ProtectedRoute><Datetimepicker /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}forms/formlayout`} element={<ProtectedRoute><Formlayouts /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}forms/floatinglabels`} element={<ProtectedRoute><Floatinglabel /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}forms/form_eidtors/editor`} element={<ProtectedRoute><Editor /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}forms/validation`} element={<ProtectedRoute><Validation /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}forms/select2`} element={<ProtectedRoute><Select2 /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/blogpages/blog`} element={<ProtectedRoute><Blog /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/blogpages/blogdetails`} element={<ProtectedRoute><Blogdetails /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/blogpages/blogedit`} element={<ProtectedRoute><Blogedit /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/profile`} element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/editprofile`} element={<ProtectedRoute><Eiditprofile /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/aboutus`} element={<ProtectedRoute><Aboutus /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/setting`} element={<ProtectedRoute><Setting /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/invoice`} element={<ProtectedRoute><Invoice /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/pricing`} element={<ProtectedRoute><Pricing /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/gallery`} element={<ProtectedRoute><Gallery /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/todotask`} element={<ProtectedRoute><Todotask /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/faq's`} element={<ProtectedRoute><Faqs /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/emptypages`} element={<ProtectedRoute><Emptypages /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/tables/tables`} element={<ProtectedRoute><Tables /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/tables/gridjstables`} element={<ProtectedRoute><Gridjstables /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/tables/datatables`} element={<ProtectedRoute><Datatables /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}ecommerce/products`} element={<ProtectedRoute><Products /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}ecommerce/productsdetails`} element={<ProtectedRoute><Productdetails /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}ecommerce/cart`} element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}ecommerce/checkout`} element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}ecommerce/wishlist`} element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/emptypages`} element={<ProtectedRoute><Emptypages /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/tables/tables`} element={<ProtectedRoute><Tables /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/tables/gridjstables`} element={<ProtectedRoute><Gridjstables /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}pages/tables/datatables`} element={<ProtectedRoute><Datatables /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}ecommerce/products`} element={<ProtectedRoute><Products /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}ecommerce/productsdetails`} element={<ProtectedRoute><Productdetails /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}ecommerce/cart`} element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}ecommerce/checkout`} element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}automatizacion/mensajes-recuperacion`} element={<ProtectedRoute><MensajesRecuperacion /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}automatizacion/mensajes-recuperacion/nuevo/whatsapp`} element={<ProtectedRoute><WhatsAppMensajeRecuperacion /></ProtectedRoute>} />
        </Route>
      </Routes>
      <Routes>
        <Route path={`${import.meta.env.BASE_URL}`} element={<Authenticationlayout />}>
          <Route path={`${import.meta.env.BASE_URL}custompages/sign-in`} element={<Signinbasic />} />
          <Route path={`${import.meta.env.BASE_URL}custompages/sign-up`} element={<Signupbasic />} />
          <Route path={`${import.meta.env.BASE_URL}custompages/forgotpassword`} element={<Forgotpassword />} />
          <Route path={`${import.meta.env.BASE_URL}custompages/resetpassword`} element={<Resetpassword />} />
          <Route path={`${import.meta.env.BASE_URL}custompages/lockscreen`} element={<Lockscreen />} />
          <Route path={`${import.meta.env.BASE_URL}custompages/underconstruction`} element={<Underconstruction />} />
          <Route path={`${import.meta.env.BASE_URL}custompages/error-404`} element={<Error404 />} />
          <Route path={`${import.meta.env.BASE_URL}custompages/error-500`} element={<Error500 />} />
        </Route>

        <Route path={`${import.meta.env.BASE_URL}`} element={<App />} >
          <Route path={`${import.meta.env.BASE_URL}asistente-ia/asistente`} element={<ProtectedRoute><AsistenteIA /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}usuarios`} element={<ProtectedRoute><UserManagement /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}usuarios/usuarios`} element={<ProtectedRoute><UserManagement /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}usuarios/nuevo`} element={<ProtectedRoute><UserConfig /></ProtectedRoute>} />
          <Route path={`${import.meta.env.BASE_URL}usuarios/tenant/:tenantId/editar`} element={<ProtectedRoute><UserConfig /></ProtectedRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.Fragment>
);