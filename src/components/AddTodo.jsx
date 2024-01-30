function AddTodo() {


  return (
    <div className="row add-todo-row">
      <div className="col-6">
        <input type="text" placeholder="Enter Todo Here" />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success p-2">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
