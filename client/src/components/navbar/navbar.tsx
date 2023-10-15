import React from "react";
import Link from "next/link";
type navbarProps = {
    
};

const Navbar:React.FC<navbarProps> = () => {
    
    return (
        <div className={`flex flex-row bg-slate-200 text-black py-5 justify-end drop-shadow-md`}>
            <Link href="viewRep"> <button className={`px-3 py-1 mr-3 bg-slate-400`}>View Report</button></Link>
            <Link href="createRep"><button className={`px-3 py-1 mr-3 bg-slate-400`}>Create Report</button></Link>
            <Link href="/login"><button className={`px-3 py-1 mr-3 bg-slate-400`} >Login</button></Link>
            </div>
    );
}
export default Navbar;