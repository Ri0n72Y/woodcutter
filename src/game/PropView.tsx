import { IGameState } from "../data/models.typed";

function PropView({ store }: { store: IGameState }) {
  return (<div className="
    w-1/4 h-3/4
    border border-solid
  ">
    DataView
  </div>)
}

export default PropView;