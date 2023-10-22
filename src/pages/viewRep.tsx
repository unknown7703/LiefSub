import React,{useState} from 'react';
import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import { Annotation } from "react-mark-image";
import { useGlobalList } from "../stateMan/context";
import { useGlobalTable } from "../stateMan/context";
import { useGlobalReport } from "../stateMan/context";

type ViewRepProps = {
    
};

const ViewRep:React.FC<ViewRepProps> = () => {
    const {list} =useGlobalList();
    const {tabledata}=useGlobalTable();
    const {annotation}=useGlobalReport();
    const nodata=["no data"]
    
    const[num,setNum]=useState(Number);
    var showlist=list[num];
    var data=[<li>reports</li>];
    const tableClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
        const numm=e.currentTarget.value;
        const nume=+numm;
        setNum(nume);
        showlist=list[num];
    }
    try {
        data =tabledata.map(function(tabledata,index){
            return <div><button value={index} onClick={tableClick}><li >{tabledata}</li></button></div>;
        }) 
    } catch (error) {
        return <li>no reprot</li>
    }
    
    

    return (<>
    <div className={`flex flex-col bg-white`}>
        <div className={`bg-white ml-20 text-black mt-20 mb-20 `} id='listt'>
           <ul id="repo" >
            <li className={`border `}>reports</li>
            {data}
           </ul>
        </div>
        
    
        <Annotation
          src={
            "https://img.freepik.com/premium-vector/fashion-template-man-different-poses-9-head-size-technical-drawing_683023-70.jpg"
          }
          alt="Cats"
          annotations={showlist?showlist:annotation}
          
          className={`text-black`}
          style={{}}
          //allowTouch
        />
        </div>
    </>);
}
export default ViewRep;
export const getServerSideProps = withPageAuthRequired();