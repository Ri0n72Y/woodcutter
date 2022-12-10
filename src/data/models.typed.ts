export interface IEventDocs {
    id: string;
    condition: string;
    docs: string[];
}

export interface IEventPool {
    events: IEventDocs[];
}

export interface IProp {
    name: string;
    val: number;
}

export interface ICharacterProps {
    [index: string]: IProp;
}

export interface ITagsList {
    [index: string]: boolean;
}

export interface ICharacter {
    name: string;
    hp: number;
    sp: number;
    items: string[];
    props: ICharacterProps;
    tags: ITagsList;
}

export interface IGameState {
    // properties
    charas: ICharacter[];
    coins: number;
    step: number; // 楼层
    time: number; // 游戏时间 in seconds

    //state
    triggers: ITagsList;

    // display
    days: IDate; // 记录游戏进度的时间
    daysOverlay?: string; // 特殊事件覆盖正常进度时间
    moment: number;
    momentOverlay?: string;
}

export interface IDate {
    year: number;
    season: number;
    date: number;
}