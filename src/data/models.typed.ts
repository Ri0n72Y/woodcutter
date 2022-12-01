export interface IEventDocs {
    condition: string;
    docs: string[];
}

export interface IEventPool {
    events: IEventDocs[];
}

export interface ICharacterProps {
    [index: string]: number;
}

export interface ICharactorTagsList {
    [index: string]: boolean;
}

export interface ICharacter {
    name: string;
    items: string[];
    props: ICharacterProps;
    tags: ICharactorTagsList;
}

export interface IGameState {
    charas: ICharacter[];
    coins: number;
    days: number;
    time: number;
}