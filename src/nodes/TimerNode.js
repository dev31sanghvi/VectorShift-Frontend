import { useState } from "react";
import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const TimerNode = ({ id, data }) => {
  const [duration, setDuration] = useState(data?.duration || 3);

  return (
    <BaseNode
      id={id}
      data={data}
      config={{
        label: "Timer Node",
        handles: [
          { type: "source", position: Position.Right, id: "timeout" },
        ],
      }}
    >
      <label>
        Duration (sec):
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
        />
      </label>
    </BaseNode>
  );
};
