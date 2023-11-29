"use client"
import React, {useEffect, useState} from "react";

import { CardWithForm } from "./Card-list";
import { getTodos } from "@/services/list";




export default  function Page({change, setChanges}:any) {
  const [todos, setTodos] = useState([]);



  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, [change]);

  return (
    <div className="flex justify-center items-center  ">
      <div className=" min-h-[80vh] grid 2xl:grid-cols-5 place-content-center gap-6">
        {todos.length == 0 ? <h1 className="text-center text-2xl">No hay todos que mostrar...</h1> : todos.map((task: any) => (
          <CardWithForm
            setChanges={setChanges}
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </div>
  );
}
