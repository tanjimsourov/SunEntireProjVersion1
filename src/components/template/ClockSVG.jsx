import React, {useEffect, useRef} from 'react';

const ClockSVG = () => {

  const hHand = useRef();
  const mHand = useRef();
  const sHand = useRef();

  const clockInit = () => {
    var date = new Date();
    var time = [date.getHours(), date.getMinutes(), date.getSeconds()];

    var hour = (time[1] / 2) + time[0] * 30;

    hHand.current.style.transform = "rotate(" + hour + "deg)";
    mHand.current.style.transform = "rotate(" + time[1] * 6 + "deg)";
    sHand.current.style.transform = "rotate(" + time[2] * 6 + "deg)";
  };

  useEffect(() => {
    
    clockInit();
    const intervalId = setInterval(() => {
      // Update the state to trigger a re-render
      clockInit();
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);

  }, []);

  return (
    <div class="clock" data-timezone="Europe/Copenhagen">
      <div class="clock-hands">
        <div ref={hHand} class="hand hour-hand"></div>
        <div ref={mHand} class="hand minute-hand"></div>
        <div ref={sHand} class="hand second-hand"></div>
      </div>
    </div>
  );
};

export default ClockSVG;
