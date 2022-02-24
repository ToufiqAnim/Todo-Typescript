import { ChangeEvent, FormEvent } from "react"

export type Todo = {
  id: string
  task: string
  isTaskCompleted: boolean
}
export type TodoListProps = {
    todoTask: Todo
    handleDeleteTask: (id: string) => void
  }

export type AddTodoProps = {
    task: string
    handleSubmit: (e: FormEvent) => void
    handleChange: (e: ChangeEvent) => void
  }

  