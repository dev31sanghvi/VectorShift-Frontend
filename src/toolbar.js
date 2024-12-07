import { DraggableNode } from "./draggableNode";
import { useStore } from "./store";

export const PipelineToolbar = () => {
  const addNode = useStore((state) => state.addNode);

  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="mathNode" label="Math Node" />
        <DraggableNode type="conditionalNode" label="Conditional Node" />
        <DraggableNode type="timerNode" label="Timer Node" />
        <DraggableNode type="loggerNode" label="Logger Node" />
        <DraggableNode type="stylerNode" label="Styler Node" />
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {/* Buttons for adding new nodes */}
        <button onClick={() => addNode("mathNode")}>Add Math Node</button>
        <button onClick={() => addNode("conditionalNode")}>
          Add Conditional Node
        </button>
        <button onClick={() => addNode("timerNode")}>Add Timer Node</button>
        <button onClick={() => addNode("loggerNode")}>Add Logger Node</button>
        <button onClick={() => addNode("stylerNode")}>Add Styler Node</button>
        <button onClick={() => addNode("text")}>Add Text Node</button> {/* New Button */}
      </div>
    </div>
  );
};
