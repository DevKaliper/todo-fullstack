import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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

        <h3>Estado de la lista: <strong className="italic">done</strong></h3>
       
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="destructive" >Delete</Button>
        <Button >Update</Button>
      </CardFooter>
    </Card>
  )
}
