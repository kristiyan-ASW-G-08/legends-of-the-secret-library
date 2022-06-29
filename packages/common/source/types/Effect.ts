export interface Stage {
  view: string;
  health: number;
  attack: number;
}

export default interface Effect {
  type:
    | 'vultureBuff'
    |'dragonSlayerBuff'
    | 'attackBuffFirstTurn'
    | 'attackBuff'
    | 'attackDebuff'
    | 'attackDebuffSelf'
    | 'attackDebuffFirstTurn'
    | 'healthBuffFirstTurn'
    | 'healthBuff'
    | 'healthBuffFirstTurn'
    | 'healthDebuff'
    | 'healthDebuffSelf'
    | 'burn'
    | 'transformation';
  value?: number;
  transformationStages: Stage[];
}
