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
    
    
    const[num,setNum]=useState(Number);
    var showlist=list[num];
    // eslint-disable-line
    var data=[<li key={20}>reports</li>];
    const tableClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
        const numm=e.currentTarget.value;
        const nume=+numm;
        setNum(nume);
        showlist=list[num];
    }
    // eslint-disable-line
    try {
        // eslint-disable-line
        data =tabledata.map(function(tabledata,index){
            // eslint-disable-line
            return <div key={index}><button key={index} value={index} onClick={tableClick}><li key={index}>{tabledata}</li></button></div>;
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