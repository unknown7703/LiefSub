import React from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from "next/link";
type navbarProps = {
    
};

const Navbar:React.FC<navbarProps> = () => {
    const {user,error,isLoading}=useUser();
    if(user)
    {
    return (
        <div className={`flex flex-row bg-slate-200 text-black py-5 justify-end drop-shadow-md`}>
            <Link href="viewRep"> <button className={`px-3 py-1 mr-3 bg-slate-400 rounded-lg`}>View Report</button></Link>
            <Link href="createRep"><button className={`px-3 py-1 mr-3 bg-slate-400 rounded-lg`}>Create Report</button></Link>
           
                <Link href="/api/auth/logout"><button className={`px-3 py-1 mr-3 bg-slate-400 rounded-lg`} >Logout</button></Link>
            
                
            
            
            </div>
    );
    }
    else{
        return (
            <div className={`flex flex-row bg-slate-200 text-black py-5 justify-end drop-shadow-md`}>
                <Link href="viewRep"> <button className={`px-3 py-1 mr-3 bg-slate-400 rounded-lg`}>View Report</button></Link>
                <Link href="createRep"><button className={`px-3 py-1 mr-3 bg-slate-400 rounded-lg`}>Create Report</button></Link>
               
                <Link href="/api/auth/login"><button className={`px-3 py-1 mr-3 bg-slate-400 rounded-lg`} >Login</button></Link>
                
                    
                
                
                </div>
        );
    }
}
export default Navbar;