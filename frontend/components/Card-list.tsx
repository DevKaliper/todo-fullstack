"use client";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { editTodo, deleteTodo } from "@/services/list.ts";

export function CardWithForm({ task, setChanges }: any) {
  const { toast } = useToast();
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
 

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>ID: {task.id}</CardTitle>
        <CardDescription>Created on: {task.date}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <h3 className="mb-5 font-bold text-2xl">{task.name}</h3>

        <p className="mb-5">
          <strong>Descripción:</strong> {task.description}
        </p>

        <h3>
          Estado de la lista:{" "}
          <strong className="italic">{task.status ? "Done" : "Pending"}</strong>
        </h3>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={()=>deleteTodo(task.id, setChanges)}
          variant="destructive">
          Delete
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>

          {/* EMPIEZA EL DIALOG PARA EDITAR EL TODO */}
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>ID: {task.id}</DialogTitle>
              <DialogDescription>Edit your TODO list.</DialogDescription>
            </DialogHeader>
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
                  onChange={(e) => setName(e.target.value)} // PARA CAMBIAR EL VALOR DE NAME
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="Description"
                  className="text-right">
                  Description
                </Label>
                <Textarea
                  id="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)} // PARA CAMBIAR EL VALOR DE DESCRIPTION
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="status"
                  className="text-right">
                  Status
                </Label>
                <Select
                  onValueChange={(e) => setStatus(e === "done" ? true : false)}>
                  <SelectTrigger>
                    <SelectValue placeholder={"❔"} />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="done">✅ done</SelectItem>
                    <SelectItem value="pending">❌ pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  onClick={()=>editTodo(name, description, status, setChanges, task.id)}
                  type="submit">
                  Save changes
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
