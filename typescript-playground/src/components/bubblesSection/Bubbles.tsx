import { ChangeEvent, FormEvent, useState } from "react";
import Bubble from "./Bubble";

export default function Bubbles() {
  type userInputType = {
    bubbleColor: string;
    bubbleSize: number;
  };

  const [userInput, setUserInput] = useState<userInputType>({
    bubbleColor: "#FF4500",
    bubbleSize: 50,
  });

  const [bubbles, setBubbles] = useState<userInputType[]>([]);

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      bubbleColor: e.target.value,
    }));
  };

  const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevInput: userInputType) => ({
      ...prevInput,
      bubbleSize: parseInt(e.target.value),
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setBubbles((prevBubbles) => [...prevBubbles, userInput]);
  };

  return (
    <section className="mt-3 flex w-full flex-col items-center gap-2 border-b-4 border-gray-400 pb-3">
      <h2>Create a colorful bubble</h2>
      <form className="flex gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-2">
          <label htmlFor="bubbleColor">Choose a color:</label>
          <input
            value={userInput.bubbleColor}
            type="color"
            id="bubbleColor"
            name="bubbleColor"
            className="rounded-md"
            onChange={handleColorChange}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <label htmlFor="bubbleSize">Choose a size:</label>
          <input
            value={userInput.bubbleSize}
            type="range"
            id="bubbleSize"
            name="bubbleSize"
            min="10"
            max="100"
            className="rounded-md"
            onChange={handleSizeChange}
          />
        </div>
        <div className="flex items-center">
          <button
            className="rounded-md  bg-emerald-500 px-4 py-2 font-semibold text-white transition hover:bg-emerald-600"
            type="submit"
          >
            Create bubble
          </button>
        </div>
      </form>
      <div className="mt-5 flex items-center gap-5">
        {bubbles.length > 0 &&
          bubbles.map((bubble, index) => (
            <Bubble
              key={index}
              bubbleColor={bubble.bubbleColor}
              bubbleSize={bubble.bubbleSize}
            />
          ))}
      </div>
    </section>
  );
}
