// llmNode.js

import { Handle, Position } from 'reactflow';
import BaseNode from "./BaseNode";


export const LLMNode = ({ id, data }) => {

  return (
    <BaseNode
      id={id}
      data={data}
      config={{
        label: 'LLM',
        handles: [
          { type: 'target', position: Position.Left, id: 'system', style: { top: `${100 / 3}%` } },
          { type: 'target', position: Position.Left, id: 'prompt', style: { top: `${200 / 3}%` } },
          { type: 'source', position: Position.Right, id: 'response' },
        ],
      }}
    >
      <span>This is a LLM.</span>
    </BaseNode>
  );
}
