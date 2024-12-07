import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);

  // Updates handle dynamically when text changes
  useEffect(() => {
    const variablePattern = /\{\{(\w+)\}\}/g; // Match variables inside {{ }}
    const variables = [];
    let match;
    while ((match = variablePattern.exec(currText)) !== null) {
      variables.push(match[1]);
    }

    // this will  Creates handles for each unique variable
    setHandles(variables.map((variable, index) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-${variable}`,
      label: variable,
    })));
  }, [currText, id]);

  //  calculating the size of the node
  const dynamicStyle = {
    width: Math.max(200, currText.length * 10) + 'px', // Dynamic width
    height: Math.max(80, Math.ceil(currText.length / 20) * 20) + 'px', // Dynamic height
  };

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      style={dynamicStyle}
      config={{
        label: 'Text Node',
        handles: [
          { type: 'source', position: Position.Right, id: 'output' },
          ...handles,
        ],
      }}
    >
      <label>
        Text:
        <input
          type="text"
          value={currText}
          onChange={handleTextChange}
          style={{ width: '100%' }}
        />
      </label>
    </BaseNode>
  );
};
