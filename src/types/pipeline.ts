interface IPipeline {
  id: number;
  name: string;
  description: string;
  state: string;
  user_id?: number;
  meta?: Object;
  created_at: string;
  updated_at: string;
}

export enum EPipelineState {
  'off' = 'powered-off',
  'on' = 'powered-on',
  'standby' = 'on-standby',
}

export default IPipeline;