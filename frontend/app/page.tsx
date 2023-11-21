"use client";
import { useState } from "react";
import TodoSection from "../components/todo-section";
import Header from "../components/Header-page";
export default function Home() {
  const [changes, setChanges] = useState(0);
  return (
    <section>
      <header>
        <Header setChange={setChanges}/>
      </header>

      <TodoSection change={changes} />
    </section>
  );
}
