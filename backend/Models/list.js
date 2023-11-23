import { requireJSON } from "../utils/requireJSON.js";
import { randomUUID } from "node:crypto";
const list = requireJSON("../list.json");

export class List {
  static getList() {
    return list;
  }

  static getListById({ id }) {
    return list.find((list) => list.id === id);
  }

  static createList({ input }) {
    let date = new Date().toISOString();
    date = date.split("T")[0];
    const newList = {
      id: randomUUID(),
      date,
      ...input,
    };

    list.push(newList);

    return newList;
  }

  static updateList({ id, input }) {
    const listMod = list.findIndex((list) => list.id === id);

    if (listMod === -1) {
      return false;
    }

    list[listMod] = {
      ...list[listMod],
      ...input,
    };

    return list[listMod];
  }

  static deleteList({ id }) {
    const listMod = list.findIndex((list) => list.id === id);
    if (listMod === -1) {
      return false;
    }

    list.splice(listMod, 1);
    return true;
  }
}
