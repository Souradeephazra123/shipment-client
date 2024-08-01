"use client";
import { useState, useEffect } from "react";
// import { getPlaceData } from "../Map/api/index";
import { getPlaceData } from "@/components/Map/api/index";
import Map from "@/components/Map/index";
import axios from "axios";

const MapPage = () => {
  const [places, setPlaces] = useState([]);

  const [coords, setCoords] = useState({ lat: 20.5937, lng: 78.9629 });
  const [boundaries, setBoundaries] = useState(null);

  useEffect(() => {
    // pass boundaries.sw boundaries.ne to getPlaceData
    if (boundaries) {
      // console.log(boundaries);
      getPlaceData(boundaries.sw, boundaries.ne).then((data) => {
        setPlaces(data);
        // console.log("data", data);
      });
    }
  }, [boundaries]);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 450
  );

  useEffect(() => {
    // Update isMobile state on window resize
    const handleResize = () => {
      setIsMobile(
        () => typeof window !== "undefined" && window.innerWidth <= 450
      );
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [PlacesData, setPlacesData] = useState([]);
  useEffect(() => {
    const fetchMapData = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/mapPlaces`
      );
      setPlacesData(response.data);
    };
    fetchMapData();
  }, []);

  useEffect(() => {
    console.log(PlacesData);
  }, [PlacesData]);
  return (
    <div className=" ">
      <Map
        setBoundaries={setBoundaries}
        coords={coords}
        places={places}
        PlacesData={PlacesData}
      />
    </div>
  );
};

export default MapPage;
