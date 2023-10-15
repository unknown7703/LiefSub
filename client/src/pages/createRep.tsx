import React, { useState } from 'react';
import { Annotation, IAnnotation } from 'react-mark-image';
//import bodyTemplate from "@/assets/bodyTemplate.png"
type createRepProps = {
    
};

const createRep:React.FC<createRepProps> = () => {
    const [annotations, setAnnotations] = useState<IAnnotation[]>([]);
    const handleSubmit =()=>
    {
        console.log(annotations);
    }
    return (
        <div className={`bg-white text-black`}>
            <button className={`bg-slate-500 text-white ml-20 mt-5 mb-5 px-3 py-1`} onClick={handleSubmit}>submit</button>
        <div>
    <Annotation
        src={"https://img.freepik.com/premium-vector/fashion-template-man-different-poses-9-head-size-technical-drawing_683023-70.jpg"}
        alt="Cats"
        annotations={annotations}
        onAnnotationsUpdate={setAnnotations}
        className={`text-black`}
       //allowTouch
      />
      </div>
      
      </div>
      )
}
export default createRep;