import * as React from "react";

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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>TODO ID: ID</CardTitle>
        <CardDescription>Created on: march 14, 2034</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <h3 className="mb-5 font-bold text-2xl">Nombre de la lista</h3>

        <p className="mb-5">
          <strong>Descripción:</strong> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, voluptates.
        </p>

        <h3>
          Estado de la lista: <strong className="italic">done</strong>
        </h3>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="destructive">Delete</Button>
        <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>TODO # Id</DialogTitle>
          <DialogDescription>
            Edit your TODO list.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue={"Su valor normal"}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Description" className="text-right">
              Description
            </Label>
            <Textarea
              id="Description"
              defaultValue={"Su valor normal"}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue>Done</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="done">Done</SelectItem>
                <SelectItem value="pending">pending</SelectItem>
              </SelectContent>
            </Select>
        </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
      </CardFooter>
    </Card>

  );
}
