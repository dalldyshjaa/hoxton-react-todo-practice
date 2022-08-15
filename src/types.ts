export type User = {
  id: number;
  name: string;
  email: string;
  todos: string[];
  avatar: string;
};
export type TodoType = {
  title: string;
  id: number;
  completed: boolean;
};
