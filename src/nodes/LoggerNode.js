import { useState } from "react";
import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const LoggerNode = ({ id, data }) => {
  const [message, setMessage] = useState(data?.message || "Log this message");

  return (
    <BaseNode
      id={id}
      data={data}
      config={{
        label: "Logger Node",
        handles: [{ type: "source", position: Position.Right, id: "log" }],
      }}
    >
      <label>
        Message:
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
