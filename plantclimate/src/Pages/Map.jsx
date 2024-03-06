import React, { useEffect, useRef } from 'react';

const Map = () => {
  const tableauVizRef = useRef(null);
  const vizInstanceRef = useRef(null);

  useEffect(() => {
    const tableauVizUrl = "https://public.tableau.com/views/SmartGrowMap/PlantHardinessZones";
    const options = {
      device: "mobile",
    };

    const initViz = () => {
      if (vizInstanceRef.current) {
        vizInstanceRef.current.dispose();
      }
      if (tableauVizRef.current) {
        vizInstanceRef.current = new window.tableau.Viz(tableauVizRef.current, tableauVizUrl, options);
      }
    };

    initViz();
    return () => {
      if (vizInstanceRef.current) {
        vizInstanceRef.current.dispose();
      }
    };
  }, []); 

  return (
    <div>
      <div ref={tableauVizRef}></div> 
    </div>
  );
};

export default Map;
