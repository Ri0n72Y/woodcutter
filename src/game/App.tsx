import React, { useReducer } from 'react';
import InfoView from './InfoView';
import MainView from './MainView';
import PropView from './PropView';
import * as R from './reducer';
import { initialState } from './store';

function App() {
  const [state, dispatch] = useReducer(
    R.stateReducer,
    initialState,
  );

  return (<React.StrictMode>
    <div className='
     flex flex-wrap
     h-screen
     p-[5%]
    '>
      <MainView store={state} />
      <PropView store={state} />
      <InfoView />
    </div>
  </React.StrictMode>)
}

export default App;