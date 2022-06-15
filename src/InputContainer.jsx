import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import {
  changeTaskTitle,
  addTask,
} from './actions';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(changeTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
