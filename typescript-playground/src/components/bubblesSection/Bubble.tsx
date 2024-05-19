export default function Bubble({
  bubbleColor,
  bubbleSize,
}: {
  bubbleColor: string;
  bubbleSize: number;
}) {
  return (
    <div
      style={{
        width: bubbleSize,
        height: bubbleSize,
        backgroundColor: bubbleColor,
        borderRadius: "50%",
      }}
    ></div>
  );
}
