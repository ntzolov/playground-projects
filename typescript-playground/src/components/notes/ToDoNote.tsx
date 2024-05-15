import { type NoteType } from "../../context/todoStore";

export default function ToDoNote({ title, content }: NoteType) {
  return (
    <div className="max-w flex flex-col justify-center bg-yellow-200">
      <p className="px-10 py-3 text-center text-xl font-semibold">{title}</p>
      <p className="px-10 py-3 text-center">{content}</p>
    </div>
  );
}
