export interface Chart {
  data: ChartData;
  minX: number;
  maxX: number;
  stepX: number;
  countX: number;
  ratioX: number;
  minY: number;
  maxY: number;
  stepY: number;
  countY: number;
  ratioY: number;
  render(): void;
  renderAxis(): void;
  renderGraph(): void;
}

export interface ChartData {
  x: number[];
  y: number[];
}