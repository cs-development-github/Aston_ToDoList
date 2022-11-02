export class Task {
    id: number;
    title: string;
    status: boolean;
    content: string;
    created: Date;

    constructor (
        id: number = 0,
        title: string = 'Saisir le titre ...',
        status: boolean = false,
        content: string = 'Description de la tâche ...',
        created: Date = new Date()
    ){
        this.id = id;
        this.title = title;
        this.status = status;
        this.content = content;
        this.created = created;
    }
}