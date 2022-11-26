import { Row, Tag, Checkbox, Col, Modal } from "antd";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
// import { UPDATE_STATUS_TODO } from "../../Redux/actions";// redux core
import todoListSlice from "./todoSlice"; // redux toolkit

const Todo = ({ id, todo, priority, completed }) => {
  const { confirm } = Modal;
  const priorityColorMapping = {
    Hurry: "red",
    Now: "green",
    Normal: "Blue",
  };
  const [checked, setChecked] = useState(completed);

  const dispatch = useDispatch();
  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlice.actions.UPDATE_STATUS_TODO(id));
  };
  const handleDelete = () => {
    confirm({
      content: "Bạn có muốn xóa To do này ko ?",
      okType: "danger",
      onOk() {
        dispatch(todoListSlice.actions.DELETE_TODO(id));
        confirm({
          content:"Bạn đã xóa thành công",
          okType: "danger",
        })
      },
    });
  };
  return (
    <Row
      style={{
        marginBottom: 5,
        ...(checked ? { opacity: 0.4, textDecoration: "line-through" } : {}),
      }}
    >
      <Col span={2}>
        <Tag
          color={priorityColorMapping[priority]}
          style={{ margin: 0 }}
          className="font-semibold"
        >
          {priority}
        </Tag>
      </Col>
      <Col span={17} offset={2}>
        <Checkbox
          checked={checked}
          onChange={toggleCheckbox}
          className="font-semibold"
        >
          {todo}
        </Checkbox>
      </Col>
      <Col offset={1} span={2}>
        <button onClick={handleDelete} className="text-lg text-white">
          <BsTrash />
        </button>
      </Col>
    </Row>
  );
};
export default Todo;
