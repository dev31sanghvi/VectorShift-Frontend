// store.js

import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from "reactflow";

const predefinedNodes = {
  mathNode: { operand1: 10, operand2: 5, operator: "+" },
  conditionalNode: { condition: "operand1 > operand2" },
  timerNode: { duration: 3 },
  loggerNode: { message: "Log this message" },
  stylerNode: { style: "uppercase" },
  text: { text: "{{input}}" }, // Default for Text Node
  customInput: { label: "Custom Input", value: "" },
  llm: { model: "gpt-4", prompt: "" },
  customOutput: { label: "Custom Output", result: "" },
};


export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  getNodeID: (type) => {
    const newIDs = { ...get().nodeIDs };
    if (newIDs[type] === undefined) {
      newIDs[type] = 0;
    }
    newIDs[type] += 1;
    set({ nodeIDs: newIDs });
    return `${type}-${newIDs[type]}`;
  },
  addNode: (type) => {
    const data = predefinedNodes[type] || {}; // Use predefined defaults
    const id = get().getNodeID(type);
    const newNode = {
      id,
      type,
      position: { x: Math.random() * 500, y: Math.random() * 500 },
      data, 
    };
    set({
      nodes: [...get().nodes, newNode],
    });
  },


  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(
        {
          ...connection,
          type: "smoothstep",
          animated: true,
          markerEnd: { type: MarkerType.Arrow, height: "20px", width: "20px" },
        },
        get().edges
      ),
    });
  },
  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, [fieldName]: fieldValue };
        }

        return node;
      }),
    });
  },
}));
