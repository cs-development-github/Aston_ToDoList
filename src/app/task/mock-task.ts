import { Task } from "./task";

export const TASKS: Task[] = [
    {
        id:1,
        title: "Faire la vaiselle",
        status: false,
        content: "Faire la vaiselle",
        created: new Date()
    },
    {
        id:2,
        title: "Faire le ménage",
        status: false,
        content: "Faire le ménage",
        created: new Date()
    },
    {
        id:3,
        title: "Passer diamond sur League",
        status: true,
        content: "Passer diamond sur League",
        created: new Date()
    },
    {
        id:4,
        title: "Rattraper le retard sur HOD",
        status: false,
        content: "Rattraper le retard sur HOD",
        created: new Date()
    }
    

]