"use client"
import React, {useEffect, useState} from "react";

import { CardWithForm } from "./Card-list";

async function getTodos() {
  const res = await fetch("http://localhost:3001/list", {cache: "no-store"});
  if (!res.ok) throw new Error("Something went wrong");
  return res.json();
}


export default  function Page({change}:any) {
  const [todos, setTodos] = useState([]);



  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, [change]);

  return (
    <div className="flex justify-center items-center  ">
      <div className=" min-h-[80vh] grid 2xl:grid-cols-5 place-content-center gap-6">
        {todos.map((task: any) => (
          <CardWithForm
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </div>
  );
}
