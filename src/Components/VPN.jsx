import React, { useState, useEffect } from "react";

const VPN = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://vpnapi.io/api/8.8.8.8?key=1d3dcc5bcaff4a81871aedba3ee82f78"
        );
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {apiData ? (
        <p>
          {" "}
          <strong>VPN</strong>
          <p>
            {apiData.security.vpn
              ? "The user is using VPN"
              : "The user is not using VPN"}
          </p>
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VPN;
