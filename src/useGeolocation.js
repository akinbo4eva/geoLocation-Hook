import { useState } from "react";

export function useGeolocation(initialstate, action) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  //   const [countClicks, setCountClicks] = useState(0);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }
  return { isLoading, error, position, getPosition };
}
