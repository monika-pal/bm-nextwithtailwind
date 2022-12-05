import  Link  from "next/link";

const Topbar = ()=> {
    
    return (<div className="bg-graybg">
        <div className="container-none md:container lg:container mx-auto px-3">
            <div className="flex justify-between items-center">
                <ul>
                    <li className="font-regular lg:text-base text-sm">
                        <a className="text-secondary block" href= "https://india.paperex-expo.com/Home" target="_blank" rel="noreferrer">Meet us at <span className="font-bold">Paperex</span> 2022. &#8594;</a> 
                        </li>
                </ul>
                <ul className="flex items-center">
                    <li className="px-4 lg:text-sm text-xs font-semibold text-gray">
                    <Link href='/career'>Careers</Link> 
                    </li>
                    <li className="px-4 lg:text-sm text-xs font-semibold text-gray">
                    <Link href='/about'>Events</Link>
                    </li>
                    <li className="px-3 lg:text-sm text-xs font-semibold py-1 lg:py-1 mx-1 bg-brand">
                    <Link href='/contact' className="block text-xs lg:text-sm text-white">Contact Us</Link>
                    </li>
                    <li className="px-4 text-xs lg:text-sm font-semibold text-gray">
                    <Link href='/resources'>Resources</Link>
                    </li>
                </ul>
            </div>
        </div> 
    </div>)
   

}
export default Topbar;
