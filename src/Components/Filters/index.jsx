import { Col, Row, Input, Radio, Select, Tag, Modal } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { PRIORITY_TODO, SEARCH_TODO, STATUS_TODO } from "../../Redux/actions"; // redux core
import filtersSlice from "./filtersSlice"; // redux toolkit
const Filters = () => {
  // dispatch
  const dispatch = useDispatch();

  //state
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPiority] = useState([]);
  console.log(priority);

  // Xử lí action
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    dispatch(filtersSlice.actions.SEARCH_TODO(value));
  };
  const handleStatus = (event) => {
    const value = event.target.value;
    setStatus(value);
    dispatch(filtersSlice.actions.STATUS_TODO(value));
  };
  const handlePriority = (value) => {
    setPiority(value);
    dispatch(filtersSlice.actions.PRIORITY_TODO(value));
  };

  return (
    <Row justify="center">
      {/* Search */}
      <Col span={24}>
        <h1 className="font-bold py-2 pl-1 text-sm">Search</h1>
        <Input
          placeholder="Search todo"
          value={search}
          onChange={handleSearch}
        />
      </Col>
      {/* Status */}
      <Col sm={24}>
        <h1 className="font-bold py-2 pl-1 text-sm">Status</h1>
        <Radio.Group
          defaultValue="All"
          buttonStyle="solid"
          value={status}
          onChange={handleStatus}
        >
          <Radio.Button
            className="bg-blue-300 font-semibold text-white"
            value="All"
          >
            All
          </Radio.Button>
          <Radio.Button
            className="bg-blue-300 font-semibold text-white"
            value="Completed"
          >
            Completed
          </Radio.Button>
          <Radio.Button
            className="bg-blue-300 font-semibold text-white"
            value="Undone"
          >
            Undone
          </Radio.Button>
        </Radio.Group>
      </Col>
      {/* Priority */}
      <Col sm={24}>
        <h1 className="font-bold py-2 pl-1 text-sm">Priority</h1>
        <Select
          mode="multiple"
          value={priority}
          onChange={handlePriority}
          allowClear
          placeholder="Priority"
          style={{ width: "100%", padding: "4px" }}
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
      </Col>
    </Row>
  );
};
export default Filters;
