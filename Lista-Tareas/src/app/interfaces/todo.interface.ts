import { TodoStatus } from "../types/type.commons";

export interface ITodo {
    id: string | number;
    description: string;
    status: TodoStatus;
    createdAt: string | Date;

}
