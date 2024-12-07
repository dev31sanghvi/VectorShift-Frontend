import { useState } from "react";
import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const ConditionalNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || "operand1 > operand2");

  return (
    <BaseNode
      id={id}
      data={data}
      config={{
        label: "Conditional Node",
        handles: [
          { type: "target", position: Position.Left, id: "input" },
          { type: "source", position: Position.Top, id: "true" },
          { type: "source", position: Position.Bottom, id: "false" },
        ],
      }}
    >
      <label>
        Condition:
        <input
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
