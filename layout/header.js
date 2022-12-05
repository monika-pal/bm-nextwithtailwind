import  Link  from "next/link";
import Menu from "./Menu";
import Topbar from "./Topbar";

export default function Header(){
    
    return (<header className="bg-[#fff] shadow-normal">
        <Topbar />
        <nav className="container-none md:container lg:container mx-auto px-3">
            <div className="flex items-center justify-between py-3">
            <Link href='/'><img src='/assets/img/business_logo_dark.png' alt="logo" width="180" height="43"/></Link>
            <Menu />
            </div>
        </nav>
    </header>
    )
    
};
    