
const url ="https://listbackend-dev-ssag.2.us-1.fl0.io/list"


export const postTodo = (setChange, setDescription, setName, setStatus, toast, name, description, status) => {
 
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        status,
      }),
    }).then((res) => {
      if (!res.ok)
        toast({
          title: "Error",
          variant: "destructive",
          description:
            "Something went wrong, please fill all the fields and try again.",
        });
        else{
          setChange((prev: number) => prev + 1);

        }
    });
    setDescription("");
    setName("");
    setStatus(false);
  };


 export const editTodo = (name, description, status, setChanges, id) => {
    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        status,
      }),
    }).then((res) => {
      if (!res.ok)
        toast({
          title: "Error",
          variant: "destructive",
          description: "Something went wrong! Check your fields and try again.",
        });
      else {
        setChanges((prev: any) => prev + 1);
      }
    });
  };

  export const deleteTodo = (id, setChanges) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    }).then((res) => setChanges((prev: any) => prev + 1));
  };

 export async function getTodos() {
    const res = await fetch(`${url}`, {cache: "no-store"});
    if (!res.ok) throw new Error("Something went wrong");
    return res.json();
  }
