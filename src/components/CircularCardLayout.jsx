import CakeCard from "./CakeCard";
import { useState, useRef } from "react";
import PastryCard from "./PastryCard";
import TieredCakeCard from "./TieredCakeCard";
import DrinkCard from "./DrinkCard";

function CircularCardLayout() {
  const size = 5000;
  const cardCount = 36;
  const cardWidth = 300;
  const cardHeight = 420;
  const radius = size / 2;

  const [rotationAngle, setRotationAngle] = useState(0);
  const containerRef = useRef(null);

  const getCardStyle = (index) => {
    const angle = index * (360 / cardCount);

    const xComp = Math.cos((angle * Math.PI) / 180);
    const yComp = Math.sin((angle * Math.PI) / 180);

    const x =
      radius * xComp + radius - cardWidth / 2 - (cardHeight / 2) * xComp;
    const y =
      radius * yComp + radius - cardHeight / 2 - (cardHeight / 2) * yComp;

    return {
      position: "absolute",
      left: `${x}px`, // Adjust left position for card centering
      top: `${y}px`, // Adjust top position for card centering
      transform: `rotate(${angle + 90}deg)`,
    };
  };

  const handleScroll = (event) => {
    const { deltaY } = event;
    const possibleAngleSnaps = Array.from({ length: cardCount }).map(
      (_, i) => i * (360 / cardCount)
    );

    const index = possibleAngleSnaps.findIndex(
      (angle) => angle === rotationAngle
    );

    if (deltaY < 0) {
      setRotationAngle(
        possibleAngleSnaps[(index + 1) % possibleAngleSnaps.length]
      );
    } else if (deltaY > 0) {
      setRotationAngle(
        possibleAngleSnaps[(index - 1) % possibleAngleSnaps.length]
      );
    }
  };
  return (
    <>
      <div
        className="fixed top-0 left-0 -z-10 w-[100vw] h-[100vh] overflow-hidden"
        ref={containerRef}
        onWheel={handleScroll}
      >
        <div
          className="absolute top-48 left-1/2 -translate-x-1/2 grid place-items-center"
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          <div
            className="transition-transform duration-300 ease-in-out absolute top-0 left-0 right-0 bottom-0"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: `rotate(${rotationAngle}deg)`,
              transformOrigin: `center`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {Array.from({ length: cardCount }).map((_, index) => (
              <div key={index} style={getCardStyle(index)}>
                {(index + 0) % 4 === 0 && <PastryCard />}
                {(index + 1) % 4 === 0 && <CakeCard />}
                {(index + 2) % 4 === 0 && <TieredCakeCard />}
                {(index + 3) % 4 === 0 && <DrinkCard />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CircularCardLayout;
