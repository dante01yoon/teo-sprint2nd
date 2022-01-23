import { Treemap as ADTreemap } from "@ant-design/plots";

type TreemapProps = {
  data: {
    name: string;
    children: { name: string; value: number }[];
  };
  className?: string;
  colorField?: string;
  color?: string | string[];
};

function Treemap({ data, className, colorField, color }: TreemapProps) {
  return (
    <ADTreemap
      className={className}
      data={data}
      colorField={colorField}
      color={color}
    />
  );
}

export default Treemap;
