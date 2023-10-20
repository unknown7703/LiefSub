import React, { useState } from "react";
import { Annotation, IAnnotation } from "react-mark-image";
//import bodyTemplate from "@/assets/bodyTemplate.png"
type createRepProps = {};

const createRep: React.FC<createRepProps> = () => {
  const [annotations, setAnnotations] = useState<IAnnotation[]>([]);
  const [repName, setRepName] = useState("");
  const handleSubmit = () => {
    console.log(annotations);
    console.log(repName);
    setRepName(" ");
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
            id="first_name"
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
          annotations={annotations}
          onAnnotationsUpdate={setAnnotations}
          className={`text-black`}
          style={{}}
          //allowTouch
        />
      </div>
    </div>
  );
};
export default createRep;
