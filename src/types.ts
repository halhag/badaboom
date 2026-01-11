export enum Faction {
    Army = "Army",
    Public = "The People",
    Oligarchs = "Oligarchs",
    USA = "Trump",
    Cartels = "Cartels",
    Guerillas = "Guerillas"
}

export interface GameState {
    month: number;
    year: number;
    treasury: number; // In billions
    personalAccount: number; // In billions
    popularity: Record<Faction, number>;
    isAlive: boolean;
    isExiled: boolean;
    isVictory?: boolean;
    gameOverReason?: string;
}

export interface StateChanges {
    treasury: number;
    personalAccount: number;
    popularity: Partial<Record<Faction, number>>;
}

export interface Choice {
    text: string;
    effect: (state: GameState, log: (msg: string) => void) => void;
}

export interface GameEvent {
    id: string;
    title: string;
    description: string;
    choices: Choice[];
    // Conditions for this event to possibly appear
    condition?: (state: GameState) => boolean; 
}
