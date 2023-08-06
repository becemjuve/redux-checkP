import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { filterByDone, resetTasks } from "../redux/slice";

export default function ListTask() {
  const { filtredList } = useSelector((state) => state.todo);
  const { globalList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const numberOfFiltred = (isDone) => {
    let sum = 0;
    globalList.map((task) => (task.isDone === isDone ? sum++ : null));
    return sum;
  };

  return (
    <div>
      <div className="row px-2">
        {/* -------------------------------------------- show completed tasks button */}
        { globalList.length !==0 &&
          <button
          className="btn btn-outline-dark col-3 mx-1"
          onClick={() => {
            dispatch(filterByDone(true));
          }}
        >
          completed tasks ({numberOfFiltred(true)})
        </button>}
        {/* -------------------------------------------- show incompleted tasks btn */}
        { globalList.length !==0 &&
          <button
          className="btn btn-outline-dark col-3 mx-1"
          onClick={() => {
            dispatch(filterByDone(false));
          }}
        >
          incompleted tasks ({numberOfFiltred(false)})
        </button>}
        {/* --------------------------------------------- show all tasks btn */}
        {filtredList.length !== globalList.length && (
          <button
            className="btn btn-outline-light col-2 mx-1"
            onClick={() => {
              dispatch(resetTasks());
            }}
          >
            show all tasks ({globalList.length})
          </button>
        )}
      </div>
      {/* ----------------------------------------------- tasks list */}
      <div className="flex">
        {filtredList.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
      {filtredList.length === 0 && (
        <h2 className="text-center mt-5">{"NO tasks :'("}</h2>
      )}
    </div>
  );
}
