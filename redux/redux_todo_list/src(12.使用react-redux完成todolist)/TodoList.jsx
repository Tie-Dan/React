import React from "react";
import { connect } from "react-redux";
const TodoList = props => {
  const { inputValue, changeInputValue, handleClick, list } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

const mapStateProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};
const mapDispatchProps = dispatch => {
  return {
    changeInputValue(e) {
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      dispatch(action);
    },
    handleClick() {
      const action = {
        type: "add_list"
      };
      dispatch(action);
    }
  };
};
export default connect(mapStateProps, mapDispatchProps)(TodoList);
