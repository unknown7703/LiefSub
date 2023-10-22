import React, { useState } from "react";
import { Annotation, IAnnotation } from "react-mark-image";
import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import { useGlobalReport } from "../stateMan/context";
import { useGlobalList } from "../stateMan/context";
import { useGlobalTable } from "../stateMan/context";
//import bodyTemplate from "@/assets/bodyTemplate.png"
type CreateRepProps = {};

const CreateRep: React.FC<CreateRepProps> = () => {
  const {annotation,setAnnotation} = useGlobalReport();
  const{list,setList}=useGlobalList();
  const {tabledata,setTable}=useGlobalTable();
  const [repName, setRepName] = useState("");
  const addList=()=>
  {
    setList((prevState)=>[...prevState,annotation])
  }
  const addTable=()=>
  {
    setTable((prevState)=>[...prevState,repName]);
    console.log(tabledata);
  }
  const handleSubmit = () => {
    //console.log(annotation);
    //console.log(repName);
    addList();
    addTable();
    
    setRepName("");
    setAnnotation([]);
    // const input=document.getElementById('reportname');
    // if(input)
    // {
    //   input.value=''
    // }
  };
  const handleName = (e: React.FormEvent<HTMLInputElement>) => {
    setRepName(e.currentTarget.value);
  };
  return (
    <div className={`bg-white text-black`}>
      <div className={`flex flex-row items-center`}>
        <button
          className={`bg-slate-500 text-white ml-20 mt-5 mb-5 px-3 py-1 rounded-lg`}
          onClick={handleSubmit}
        >
          submit
        </button>
        <div>
          <input
            type="text"
            id="reportname"
            onChange={handleName}
            className=" ml-10 bg-slate-500 border border-gray-300 text-white  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Report Name"
            required
          />
        </div>
      </div>
      <div>
        <Annotation
          src={
            "https://img.freepik.com/premium-vector/fashion-template-man-different-poses-9-head-size-technical-drawing_683023-70.jpg"
          }
          alt="Cats"
          annotations={annotation}
          onAnnotationsUpdate={setAnnotation}
          className={`text-black`}
          
          //allowTouch
        />
      </div>
    </div>
  );
};
export default CreateRep;
export const getServerSideProps = withPageAuthRequired();