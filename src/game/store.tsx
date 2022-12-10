import * as I from '../data/models.typed';

export const defaultCharacterProps: I.ICharacterProps = {
  CON: { name: '根骨', val: 10 },
  INT: { name: '智慧', val: 10 },
  HOR: { name: '功德', val: 10 },
  LUK: { name: '时运', val: 10 },
  POW: { name: '意志', val: 10 },
}

export const defaultCharactor: I.ICharacter = {
  name: '',
  hp: 0,
  sp: 0,
  props: defaultCharacterProps,
  tags: {},
  items: [],
}

export const defaultDate: I.IDate = {
  year: 0,
  season: 0,
  date: 0,
}

export const initialState: I.IGameState = {
  charas: [],
  coins: 0,
  step: 0, // 楼层
  time: 0, // 游戏时间 in seconds

  //state
  triggers: {},

  // display
  days: defaultDate, // 记录游戏进度的时间
  moment: 0,
}