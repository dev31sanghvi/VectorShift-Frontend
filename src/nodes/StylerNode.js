import { useState } from "react";
import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const StylerNode = ({ id, data }) => {
  const [style, setStyle] = useState(data?.style || "uppercase");

  return (
    <BaseNode
      id={id}
      data={data}
      config={{
        label: "Styler Node",
        handles: [
          { type: "target", position: Position.Left, id: "input" },
          { type: "source", position: Position.Right, id: "output" },
        ],
      }}
    >
      <label>
        Style:
        <select value={style} onChange={(e) => setStyle(e.target.value)}>
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="capitalize">Capitalize</option>
        </select>
      </label>
    </BaseNode>
  );
};
