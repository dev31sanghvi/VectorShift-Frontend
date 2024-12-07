import { Handle, Position } from "reactflow";

const BaseNode = ({ id, data, config, children, style = {} }) => {
  const { handles = [], label = "" } = config;

  return (
    <div style={{ width: 200, height: 80, border: '1px solid black', ...style }}>
      <div>
        <span>{label}</span>
      </div>
      <div>{children}</div>
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style || {}}
        />
      ))}
    </div>
  );
};


export default BaseNode;
