import {
  CardItems,
  DecompositionTreeGraph,
  FlowGraphDatum,
  RadialTreeGraph,
} from "@ant-design/graphs";
import { TreeGraphData } from "@ant-design/graphs/es/obsolescent/graphs";
import React from "react";

function GraphSample() {
  const DemoRadialTreeGraph = () => {
    const data = {
      nodes: [],
      edges: [],
      id: "FrontEnd",
      value: "FrontEnd",
      children: [
        {
          id: "cs",
          value: "cs",
          children: [],
        },
        {
          id: "html",
          value: "html",
          children: [],
        },
        {
          id: "css",
          value: "css",
          children: [
            {
              id: "css framework",
              value: "framework",
            },
          ],
        },
        {
          id: "JavaScript",
          value: "JavaScript",
          children: [
            {
              id: "javaScript framework",
              value: "framework",
            },
          ],
        },
      ],
    } as FlowGraphDatum;

    const config = {
      edgeCfg: {
        type: "cubic",
      },
      nodeCfg: {
        type: "rect",
        size: [70, 40],
        padding: 110,
      },
      markerCfg: {
        show: true,
        collapsed: true,
      },
      behaviors: ["drag-canvas", "zoom-canvas", "drag-node"],
    };

    return <RadialTreeGraph {...config} data={data} />;
  };

  return (
    <div>
      <DemoRadialTreeGraph />
    </div>
  );
}

export default GraphSample;
