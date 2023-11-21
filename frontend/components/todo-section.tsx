import React from "react";
import { CardWithForm } from "./Card-list";
import tasks from "@/utils/dataPlaceHolder";



const TodoSection = () => {
  return (
    <div className="flex justify-center items-center  ">
      <div
        className=" min-h-[80vh] grid 2xl:grid-cols-5 place-content-center gap-6">
          {
              tasks.map((task) => (
                  <CardWithForm key={task.id} task={task}/>
              ))
          }
       
        
      </div>
    </div>
  );
};

export default TodoSection;
