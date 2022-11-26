import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
// import { ADD_TODO } from "../../Redux/actions"; // redux core
import todoListSlice from './todoSlice' // redux toolkit
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { todosRemainingSelector } from "../../Redux/selectors";

const TodoList = () => {
  // dùng để bắn đi 1 action vào store -> reducer
  const dispatch = useDispatch();
  // useSelector sẽ giúp ta lấy state trong store
  const todoList = useSelector(todosRemainingSelector);

  // state
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("Normal");

  // Xử lí action
  const handleInputTodo = (event) => {
    setTodo(event.target.value);
  };
  const handleSelectPriority = (value) => {
    setPriority(value);
  };

  const handleAdd = () => {
    dispatch(
      todoListSlice.actions.ADD_TODO({
        id: uuid(),
        todo,
        priority,
        completed: false,
      })
    );
    setTodo("");
    setPriority("Normal");
  };

  return (
    <Row className="h-full overflow-hidden">
      {/* TodoList */}
      <Col span={24} className="h-[calc(100%-40px)] overflow-y-auto">
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>

      {/* Add todo */}
      <Col span={24} className="pt-2">
        <Input.Group style={{ display: "flex" }} compact>
          {/* Input todo */}
          <Input value={todo} onChange={handleInputTodo} />
          {/* Select priority */}
          <Select
            defaultValue="Normal"
            style={{ width: "160px" }}
            placement="topLeft"
            value={priority}
            onChange={handleSelectPriority}
          >
            <Select.Option value="Hurry" label="Hurry">
              <Tag color="red">Hurry</Tag>
            </Select.Option>
            <Select.Option value="Now" label="Now">
              <Tag color="green">Now</Tag>
            </Select.Option>
            <Select.Option value="Normal" label="Normal">
              <Tag color="blue">Normal</Tag>
            </Select.Option>
          </Select>
          <Button
            type="primary"
            className="backdrop-blur-sm bg-stone-400 rounded-xl
                      border-none outline-none font-semibold "
            onClick={handleAdd}
          >
            Add todo
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
};
export default TodoList;
