"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { postTodo } from "@/services/list.ts";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";

export function AddNew({ setChange }: { setChange: any }) {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);


  

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Add new TODO</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add New Todo</SheetTitle>
          <SheetDescription>Add a new todo to your list.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="name"
              className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
              placeholder="Do something..."
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              className="text-right"
              htmlFor="Description">
              Description
            </Label>
            <Textarea
              id="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="col-span-3"
              placeholder="Do something..."
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              className="text-right"
              htmlFor="Estatus">
              Estatus
            </Label>
            <Select
              onValueChange={(e) => setStatus(e === "pending" ? false : true)}>
              <SelectTrigger
                className="col-span-3"
                id="Estatus">
                <SelectValue placeholder={"❔"} />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="done"> ✅ done</SelectItem>
                <SelectItem value="pending">❌ pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              onClick={()=>postTodo(setChange, setDescription, setName, setStatus, toast, name, description, status)}
              type="submit">
              Save
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
