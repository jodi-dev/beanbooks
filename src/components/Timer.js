import React from 'react';

import { useCountdownTimer } from 'use-countdown-timer';

function Timer() {
  const { countdown, start, reset, pause, isRunning } = useCountdownTimer({
    timer: 1000 * 5,
  });

  return (
    <React.Fragment>
      <div>{countdown}</div>
      <button onClick={reset}>Reset</button>
      {isRunning ? (
        <button onClick={pause}>Pause</button>
      ) : (
        <button onClick={start}>Start</button>
      )}
    </React.Fragment>
  );
};

export default Timer;