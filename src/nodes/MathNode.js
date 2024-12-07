import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { Position } from "reactflow";

export const MathNode = ({ id, data }) => {
  const [operand1, setOperand1] = useState(data?.operand1 || 0);
  const [operand2, setOperand2] = useState(data?.operand2 || 0);
  const [operator, setOperator] = useState(data?.operator || "+");

  return (
    <BaseNode
      id={id}
      data={data}
      config={{
        label: "Math Node",
        handles: [
          { type: "target", position: Position.Left, id: "operand1" },
          { type: "target", position: Position.Left, id: "operand2" },
          { type: "source", position: Position.Right, id: "result" },
        ],
      }}
    >
      <label>
        Operand 1:
        <input
          type="number"
          value={operand1}
          onChange={(e) => setOperand1(Number(e.target.value))}
        />
      </label>
      <label>
        Operator:
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </label>
      <label>
        Operand 2:
        <input
          type="number"
          value={operand2}
          onChange={(e) => setOperand2(Number(e.target.value))}
        />
      </label>
    </BaseNode>
  );
};
