import { Fragment, useEffect, useRef, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getMenuItems } from '../sidebar/sidemenu/sidemenu';
import { connect } from "react-redux";
import { ThemeChanger } from "../../../redux/action";
import authService from '../../../services/authService';
import logo1 from '../../../assets/img/logo.png'
import logo2 from '../../../assets/images/brand-logos/toggle-logo.png'
import logo3 from '../../../assets/images/brand-logos/desktop-dark.png'
import logo4 from '../../../assets/images/brand-logos/toggle-dark.png'
import face6 from "../../../../src/assets/images/faces/face6.png";
import store from '../../../redux/store';

const Header = ({ local_varaiable, ThemeChanger }) => {

    ///****fullscreeen */
    const [fullScreen, setFullScreen] = useState(false);

    const toggleFullScreen = () => {
        const elem = document.documentElement;

        if (!document.fullscreenElement) {
            elem.requestFullscreen().then(() => setFullScreen(true));
        } else {
            document.exitFullscreen().then(() => setFullScreen(false));
        }
    };

    //Search functionality
    const [show1, setShow1] = useState(false);
    const [showa, setShowa] = useState(false);
    const [InputValue, setInputValue] = useState("");
    const [show2, setShow2] = useState(false);
    const [searchcolor, setsearchcolor] = useState("text-dark");
    const [searchval, setsearchval] = useState("Type something");
    const [NavData, setNavData] = useState([]);

    const searchResultRef = useRef(null);

    const myfunction = (inputValue) => {
        if (searchResultRef.current) {
            searchResultRef.current.classList.remove("d-none");
        }

        const i = [];
        const allElement2 = [];
        getMenuItems().forEach((mainLevel) => {
            if (mainLevel.children) {
                setShowa(true);
                mainLevel.children.forEach((subLevel) => {
                    i.push(subLevel);
                    if (subLevel.children) {
                        subLevel.children.forEach((subLevel1) => {
                            i.push(subLevel1);
                            if (subLevel1.children) {
                                subLevel1.children.forEach((subLevel2) => {
                                    i.push(subLevel2);
                                });
                            }
                        });
                    }
                });
            }
        });

        for (const allElement of i) {
            if (allElement.title.toLowerCase().includes(inputValue.toLowerCase())) {
                if (allElement.title.toLowerCase().startsWith(inputValue.toLowerCase())) {
                    setShow2(true);

                    // Check if the element has a path and doesn't already exist in allElement2 before pushing
                    if (allElement.path && !allElement2.some((el) => el.title === allElement.title)) {
                        allElement2.push(allElement);
                    }
                }
            }
        }

        if (!allElement2.length || inputValue === "") {
            if (inputValue === "") {
                setShow2(false);
                setsearchval("Type something");
                setsearchcolor("text-dark");
            }
            if (!allElement2.length) {
                setShow2(false);
                setsearchcolor("text-danger");
                setsearchval("There is no component with this name");
            }
        }

        setNavData(allElement2);
    };

	const SwitcherClass = (selector) => document.getElementsByClassName(selector);

    const Switchericon = () => {
        const offcanvasEnd = SwitcherClass("offcanvas-end")[0];
        const switcherBackdrop = SwitcherClass("switcher-backdrop")[0];

        offcanvasEnd?.classList.toggle("show");
        offcanvasEnd.style.insetInlineEnd = "0px";

        if (switcherBackdrop?.classList.contains('d-none')) {
            switcherBackdrop.classList.add("d-block");
            switcherBackdrop.classList.remove("d-none");
        }
    };

    //Dark Model
    const ToggleDark = () => {

        ThemeChanger({
            ...local_varaiable,
            "dataThemeMode": local_varaiable.dataThemeMode == 'dark' ? 'light' : 'dark',
            "dataHeaderStyles": local_varaiable.dataThemeMode == 'gradient' ? 'dark' : 'gradient',
            "dataMenuStyles": local_varaiable.dataThemeMode == 'dark' ? 'light' : 'dark',

        });
        const theme = store.getState();

        if (theme.dataThemeMode != 'dark') {

            ThemeChanger({
                ...theme,
                "bodyBg1": '',
                "bodyBg2": '',
                "darkBg": '',
                "inputBorder": '',
            });
            localStorage.removeItem("aziradarktheme");
            localStorage.removeItem("darkBgRGB1");
            localStorage.removeItem("darkBgRGB2");
            localStorage.removeItem("darkBgRGB3");
            localStorage.removeItem("darkBgRGB4");
            localStorage.removeItem("aziraMenu");
            localStorage.removeItem("aziraHeader");
        }
        else {
            localStorage.setItem("aziradarktheme", "dark");
            localStorage.removeItem("aziralighttheme");
            localStorage.removeItem("aziraHeader");
            localStorage.removeItem("aziraMenu");

        }

    };

    function menuClose() {
        const theme = store.getState();
        ThemeChanger({ ...theme, "toggled": "close" });
    }

    const overlayRef = useRef(null);

    const toggleSidebar = () => {
        const theme = store.getState();
        const sidemenuType = theme.dataNavLayout;
        if (window.innerWidth >= 992) {
            if (sidemenuType === 'vertical') {
                const verticalStyle = theme.dataVerticalStyle;
                const navStyle = theme.dataNavStyle;
                switch (verticalStyle) {
                    // closed
                    case "closed":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "close-menu-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "close-menu-close" });
                        }
                        break;
                    // icon-overlay
                    case "overlay":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "icon-overlay-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            if (window.innerWidth >= 992) {
                                ThemeChanger({ ...theme, "toggled": "icon-overlay-close" });
                            }
                        }
                        break;
                    // icon-text
                    case "icontext":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "icon-text-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-text-close" });
                        }
                        break;
                    // doublemenu
                    case "doublemenu":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "double-menu-open") {
                            ThemeChanger({ ...theme, "toggled": "double-menu-close" });
                        } else {
                            if (theme.activeMenuItem) {
                                const activeIndex = theme.menuItems.findIndex(item => item.id === theme.activeMenuItem);

                                if (activeIndex !== -1 && theme.menuItems[activeIndex].next) {
                                    ThemeChanger({
                                        ...theme,
                                        "toggled": "double-menu-open",
                                        activeMenuItem: theme.menuItems[activeIndex].next.id,
                                    });
                                }
                                else {
                                    ThemeChanger({ ...theme, "toggled": "double-menu-close" });
                                }
                            }
                        }

                        break;
                    // detached
                    case "detached":
                        if (theme.toggled === "detached-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "detached-close" });
                        }
                        break;
                    // default
                    case "default":
                        ThemeChanger({ ...theme, "toggled": "" });

                }
                switch (navStyle) {
                    case "menu-click":
                        if (theme.toggled === "menu-click-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        }
                        else {
                            ThemeChanger({ ...theme, "toggled": "menu-click-closed" });
                        }
                        break;
                    // icon-overlay
                    case "menu-hover":
                        if (theme.toggled === "menu-hover-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "menu-hover-closed" });

                        }
                        break;
                    case "icon-click":
                        if (theme.toggled === "icon-click-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-click-closed" });

                        }
                        break;
                    case "icon-hover":
                        if (theme.toggled === "icon-hover-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-hover-closed" });

                        }
                        break;
                }
            }
        }
        else {
            if (theme.toggled === "close") {
                ThemeChanger({ ...theme, "toggled": "open" });

                setTimeout(() => {
                    if (theme.toggled == "open") {
                        if (overlayRef.current) {
                            overlayRef.current.classList.remove("active");
                        }

                        if (overlayRef.current) {
                            overlayRef.current.classList.add("active");
                            overlayRef.current.addEventListener("click", () => {
                                if (overlayRef.current) {
                                    overlayRef.current.classList.remove("active");
                                    menuClose();
                                }
                            });
                        }
                    }

                    window.addEventListener("resize", () => {
                        if (window.screen.width >= 992) {
                            if (overlayRef.current) {
                                overlayRef.current.classList.remove("active");
                            }
                        }
                    });
                }, 100);
            } else {
                ThemeChanger({ ...theme, "toggled": "close" });
            }
        }
    };

    //Time
    const [time, setTime] = useState(new Date());

    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };
    //Date
    const [date, setDate] = useState(new Date());

    const getOrdinalSuffix = (day) => {
        if (day >= 11 && day <= 13) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    const formatDate = (date) => {
        const weekdayOptions = { weekday: 'long' };
        const day = date.getDate();
        const monthOptions = { month: 'long' };
        const year = date.getFullYear();

        const weekday = date.toLocaleDateString(undefined, weekdayOptions);
        const month = date.toLocaleDateString(undefined, monthOptions);
        const suffix = getOrdinalSuffix(day);

        return `${weekday}, ${month} ${day}${suffix} ${year}`;
    };

    const handleScroll = () => {
        if (window.scrollY > 30) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        const intervalId1 = setInterval(() => {
            setDate(new Date());
        }, 1000 * 60 * 60 * 24); 
    
        const intervalId = setInterval(() => {
            setTime(new Date()); 
        }, 1000);
    
        const clickHandler = (event) => {
            if (searchResultRef.current && !searchResultRef.current.contains(event.target)) {
                searchResultRef.current.classList.add("d-none");
            }
        };
    
        document.addEventListener("click", clickHandler);
		window.addEventListener("scroll", handleScroll);
    
        return () => {
            document.removeEventListener("click", clickHandler);
		   window.removeEventListener("scroll", handleScroll);
            clearInterval(intervalId);
            clearInterval(intervalId1);
        };
    }, []);

    

    // for search modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const headerRef = useRef(null);
	const [isSticky, setIsSticky] = useState(false);


    // Estados para usuario
    const [currentUser, setCurrentUser] = useState(null);

    // Cargar información del usuario al montar el componente
    useEffect(() => {
        const user = authService.getUser();
        setCurrentUser(user);
    }, []);

    // Función para manejar logout
    const handleLogout = () => {
        authService.logout();
    };

    return (
        <Fragment>
            <header ref={headerRef} className={`app-header ${isSticky ? "sticky-pin" : ""}`}>
                <div className="main-header-container container-fluid">
                    <div className="header-content-left">
                        <div className="header-element">
                            <div className="horizontal-logo">
                                <Link to={`${import.meta.env.BASE_URL}dashboard`} className="header-logo">
                                    <img src={logo1} alt="logo" className="desktop-logo" />
                                    <img src={logo2} alt="logo" className="toggle-logo" />
                                    <img src={logo3} alt="logo" className="desktop-dark" />
                                    <img src={logo4} alt="logo" className="toggle-dark" />
                                </Link>
                            </div>
                        </div>
                        <div className="header-element">
                            <Link aria-label="Hide Sidebar" onClick={() => toggleSidebar()}
                                className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                                data-bs-toggle="sidebar" to="#"><span><i className="fe fe-align-left header-link-icon border-0"></i>
                                </span>
                            </Link>
                        </div>
                        


                    </div>
                    <div className="header-content-right">
                      
                        
                        <div className="header-element header-fullscreen">
                            <Link onClick={toggleFullScreen} to="#" className="header-link">
                                {fullScreen ? (
                                    <i className="fe fe-minimize header-link-icon full-screen-close "></i>
                                ) : (

                                    <i className="fe fe-maximize header-link-icon  full-screen-open"></i>
                                )}
                            </Link>
                        </div>
                        <Dropdown className="header-element mainuserProfile">
                            {/* <!-- Start::header-link|dropdown-toggle --> */}
                            <Dropdown.Toggle as='a' className="header-link " id="mainHeaderProfile"
                                data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <div className="d-flex align-items-center">
                                    <div className="d-sm-flex wd-100p lh-0">
                                        <div className="avatar avatar-md"><img alt="avatar" className="rounded-circle"
                                            src={face6} /></div>
                                        <div className="ms-2 my-auto d-none d-xl-flex">
                                            <h6 className=" font-weight-semibold mb-0 fs-13 user-name d-sm-block d-none">
                                                {currentUser ? `${currentUser.firstName || ''} ${currentUser.lastName || ''}`.trim() || currentUser.username : 'Usuario'}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </Dropdown.Toggle>
                            {/* <!-- End::header-link|dropdown-toggle --> */}
                            <Dropdown.Menu className="main-header-dropdown  pt-0 border-0 header-profile-dropdown dropdown-menu-end dropdown-menu-arrow"
                                aria-labelledby="mainHeaderProfile" align='end'>
                                <div className="p-3 menu-header-content text-fixed-white rounded-top text-center">
                                    <div className="">
                                        <div className="avatar avatar-xl rounded-circle">
                                            <img alt="" className="rounded-circle" src={face6} />
                                        </div>
                                        <p className="text-fixed-white fs-18 fw-semibold mb-0">
                                            {currentUser ? `${currentUser.firstName || ''} ${currentUser.lastName || ''}`.trim() || currentUser.username : 'Usuario'}
                                        </p>
                                        <span className="fs-13 text-fixed-white">
                                            {currentUser?.isAdministrator ? 'Administrador' : 'Usuario'}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <hr className="dropdown-divider" />
                                </div>
                                <div>

                                    <button className='dropdown-item' onClick={handleLogout} style={{border: 'none', background: 'none', textAlign: 'left', width: '100%'}}>
                                        <i className="fa fa-sign-out-alt me-1"></i> Cerrar Sesión
                                    </button>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                       
                       
                        
                    </div>
                </div>

            </header>

        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    local_varaiable: state
});
export default connect(mapStateToProps, { ThemeChanger })(Header);
