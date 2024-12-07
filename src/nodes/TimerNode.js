import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';
// this will trigger an ooutput after a certain duration

export const TimerNode = ({ id, data }) => {
  const [duration, setDuration] = useState(data?.duration || 1);

  return (
    <BaseNode
      id={id}
      data={data}
      config={{
        label: 'Timer Node',
        handles: [{ type: 'source', position: Position.Right, id: 'trigger' }],
      }}
    >
      <label>
        Duration (seconds):
        <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} />
      </label>
    </BaseNode>
  );
};
