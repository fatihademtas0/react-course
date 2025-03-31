export interface TodoState {
    todos: TodoType[];
}

export interface TodoType {
    id: number;
    content: string;
}
