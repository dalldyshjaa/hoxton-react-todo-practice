export function AddTodo({ addTodo }) {
  return (
    <form
      action=""
      className="flex justify-start"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(e.target.text.value);
      }}
    >
      <input
        type="text"
        name="text"
        id=""
        placeholder="Add a Todo"
        className="text-[20px] w-full"
      />
    </form>
  );
}
