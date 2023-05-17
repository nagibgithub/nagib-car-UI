import { fa1, faBagShopping, faSearch, faShoppingBag, faShoppingBasket, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";

const Header = () => {

    const navBar = [
        { id: 1, title: 'Home', path: '/' },
        { id: 2, title: 'About', path: '/about' },
        { id: 3, title: 'Services', path: '/services' },
        { id: 4, title: 'Blog', path: '/blog' },
        { id: 5, title: 'Contact', path: '/contact' }
    ];

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-orange-200 rounded-box w-52">
                        {
                            navBar.map(pd => <li><Link key={pd.id} to={pd.path}>{pd.title}</Link></li>)
                        }
                        {/* <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li> */}
                    </ul>
                </div>
                <Link to={'/'}><img src="https://raw.githubusercontent.com/nagibgithub/nagib-car-resources/main/assets/logo.svg" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex">{navBar.map(nav => <li key={nav.id} className="py-5"><NavLink to={nav.path} className={({ isActive, isPending }) => isActive ? "navActive" : isPending ? "navPending" : "navInactive"} >{nav.title}</NavLink></li>)}</ul>
            </div>
            <div className="navbar-end">
                <BsHandbag className="text-xl cursor-pointer text-orange-500 mr-2" />
                <FontAwesomeIcon className="text-xl cursor-pointer text-orange-500 ml-2 mr-4" icon={faSearch} />
                <button className="btn border-2 bg-white hover:bg-orange-500 hover:border-orange-500 hover:text-white border-orange-500 px-4 py-2 rounded-md text-orange-500 font-semibold">Appointment</button>
            </div>
        </div>

        // <nav className="flex justify-between container mx-auto items-center my-2">
        //     <img src="https://raw.githubusercontent.com/nagibgithub/nagib-car-resources/main/assets/logo.svg" alt="" />
        //     <ul className="flex">{navBar.map(nav => <li key={nav.id} className="py-5"><NavLink to={nav.path} className={({ isActive, isPending }) => isActive ? "navActive" : isPending ? "navPending" : "navInactive"} >{nav.title}</NavLink></li>)}</ul>
        //     <div className="flex justify-between items-center">
        //         <BsHandbag className="text-xl text-orange-500 mr-2" />
        //         <FontAwesomeIcon className="text-xl text-orange-500 ml-2 mr-4" icon={faSearch} />
        //         <button className="btn border-2 bg-white hover:bg-orange-500 hover:border-orange-500 hover:text-white border-orange-500 px-4 py-2 rounded-md text-orange-500 font-semibold">Appointment</button>
        //     </div>
        // </nav>
    );
};

export default Header;