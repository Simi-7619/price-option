import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [openIcon, setOpenIcon] = useState(false)
    const routersData = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/portfolio", name: "Portfolio" }
    ];

    const ClickFunction = () => setOpenIcon(!openIcon);

    return (
        <nav>
            {/* <div  className="text-2xl text-red-500"  onClick={ClickFunction}>
               {openIcon===false ? <HiMenuAlt1 className="lg:hidden text-green-600"/>: <IoMdClose/>}
            </div>

            <ul className={`lg:flex mt-12 lg:static absolute ${openIcon? 'top-2 ':'top-12' }`}>
                {
                    routersData.map(routerData => <li className="mx-6 hover:bg-green-500 hover:rounded-lg font-medium text-lg p-2" key={routerData.id}><a href={routerData.path}>{routerData.name}</a></li>)
                }
            </ul> */}
            <div className="text-2xl" onClick={ClickFunction}>
                {openIcon === false? <HiMenuAlt1 className="lg:hidden text-green-500"/>:<IoMdClose className="lg:hidden text-red-500"/>}
            </div>
            <ul className={`lg:flex mt-12 bg-green-500 lg:text-green-500 lg:bg-white text-white font-semibold duration-500 absolute lg:static ${openIcon ? 'top-8':'-top-60'}`}>
                {
                    routersData.map(router=> <li className="mx-6 my-2 hover:text-red-500" key={router.id}><a href={router.path}></a>{router.name}</li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;