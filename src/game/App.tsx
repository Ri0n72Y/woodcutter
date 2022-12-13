import React, { useEffect, useReducer, useRef, useState } from 'react';
import { Time } from './actions';
import Header from './header';
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

  const [pause, setPause] = useState(true);
  const togglePause = () => setPause(!pause);
  const timer = useRef<NodeJS.Timer>(null);
  useEffect(() => {
    if (pause && timer.current) {
      clearInterval(timer.current);
    } else if (!pause) {
      timer.current = setInterval(() => {
        dispatch(Time.add);
      }, 1000);
    }
    return () => clearInterval(timer.current);
  }, [pause]);

  return (<React.StrictMode>
    <div className='
     flex flex-wrap
     h-screen
     p-[5%]
    '>
      <Header pause={pause} toggle={togglePause} {...state} />
      <MainView store={state} />
      <PropView store={state} />
      <InfoView />
    </div>
  </React.StrictMode>);
}

export default App;