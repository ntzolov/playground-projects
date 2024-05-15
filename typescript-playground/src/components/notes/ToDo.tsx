import { FormEvent, ChangeEvent, useEffect } from "react";
import { userStore } from "../../context/todoStore";
import ToDoNote from "./ToDoNote";

export default function ToDo() {
  const {
    title,
    setTitle,
    content,
    setContent,
    notes,
    setNotes,
    secondsOnline,
    setSecondsOnline,
  } = userStore();

  const handleTitleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleContentSubmit = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotes({ title, content });
    e.currentTarget.reset();
  };

  useEffect(() => {
    const onlineSecondsInterval = setInterval(() => {
      setSecondsOnline();
    }, 1000);

    return () => clearInterval(onlineSecondsInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="mt-3 flex w-full flex-col items-center gap-2 border-b-4 border-gray-400 pb-3">
      <h2>Create a user</h2>
      <form
        className="flex flex-col items-center gap-5"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col items-center gap-2">
          <label htmlFor="title"></label>
          <input
            placeholder="Enter a title"
            type="text"
            id="title"
            name="title"
            className="rounded-md border border-gray-400 bg-gray-100 p-1"
            onChange={handleTitleSubmit}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <label htmlFor="content"></label>
          <textarea
            placeholder="Enter a text content"
            id="content"
            name="content"
            className="rounded-md border border-gray-400 bg-gray-100 p-1"
            onChange={handleContentSubmit}
          />
        </div>
        <div className="flex items-stretch">
          <button className="rounded-md bg-blue-500 px-3 py-1 text-white transition hover:bg-blue-600">
            Create note
          </button>
        </div>
      </form>
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        {notes.map((note, index) => (
          <ToDoNote key={index} title={note.title} content={note.content} />
        ))}
      </div>
      <p>
        Page rendered for:{" "}
        {secondsOnline < 60
          ? secondsOnline
          : `${Math.floor(secondsOnline / 60)} minutes and ${secondsOnline % 60} seconds`}{" "}
        {secondsOnline < 60 ? "seconds" : ""}
      </p>
    </section>
  );
}
