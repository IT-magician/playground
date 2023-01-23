import { useDispatch, useSelector } from "react-redux"
import todoSlice from "@/store/slices/todoSlice"

interface todoState {
  todo: [
    {
      id: number,
      text: String,
      done: boolean
    }
  ]
}

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state: todoState) => {
    console.log(state.todo)
    return state.todo
  })
  const todoItem = todos.map((todo, index) => {
    return <li key={index}>
      {todo.text}
    </li>
  })

  const handleOnKeyUpEnter = (e: any) => {
    if (e.key === 'Enter') {
      // console.log(e.target.value)
      dispatch(todoSlice.actions.create(e.target.value))
      // console.log(todo)
      e.target.value = ''
    }
  }

  const handleCheckBox = (index: number) => {
    dispatch(todoSlice.actions.check(index))
  }

  const handleTodoDelete = (index: number) => {
    dispatch(todoSlice.actions.delete(index))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        name="todo"
        onKeyUp={handleOnKeyUpEnter}
      />
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                onChange={() => handleCheckBox(todo.id)}
              />
              {todo.done === false ? <>{todo.text}</> : <del>{todo.text}</del>}
              <button
                onClick={() => handleTodoDelete(todo.id)}>
                삭제
              </button>
            </li>
          )
        })}
      </ul>
    </div>

  )
}

export default Todo;
