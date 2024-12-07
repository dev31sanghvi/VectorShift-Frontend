import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';
// this node will log the data to the console 
export const LoggerNode = ({ id, data }) => {
  const logData = () => {
    console.log('Logged Data:', data?.message || 'No message provided.');
  };

  return (
    <BaseNode
      id={id}
      data={data}
      config={{
        label: 'Logger Node',
        handles: [{ type: 'target', position: Position.Left, id: 'log' }],
      }}
    >
      <button onClick={logData}>Log Data</button>
    </BaseNode>
  );
};
