/* eslint-disable @typescript-eslint/interface-name-prefix */

// The models for our response objects
export interface CardInterface extends Vue {
  ability: AbilityInterface;
  artist: string;
  attacks: AttackInterface[];
  convertedRetreatCost: number;
  evolvesFrom: string;
  hp: string;
  id: string;
  imageUrl: string;
  imageUrlHiRes: string;
  name: string;
  nationalPokedexNumber: number;
  number: string;
  rarity: string;
  resistances: ResistanceInterface[];
  retreatCost: string[];
  series: string;
  set: string;
  setCode: string;
  subtype: string;
  supertype: string;
  text: string[];
  types: string[];
  weaknesses: WeaknessInterface[];
}

export interface AbilityInterface {
  name: string;
  text: string;
  type: string;
}

export interface AttackInterface {
  convertedEnergyCost: string;
  cost: string[];
  damage: string;
  name: string;
  text: string;
}

export interface ResistanceInterface {
  type: string;
  value: string;
}

export interface SetInterface {
  code: string;
  expandedLegal: boolean;
  logoUrl: string;
  name: string;
  ptcgoCode: string;
  releaseDate: string;
  series: string;
  standardLegal: boolean;
  symbolUrl: string;
  totalCards: number;
  updatedAt: string;
}

export interface WeaknessInterface {
  type: string;
  value: string;
}
