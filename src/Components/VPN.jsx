import React, { useEffect, useState } from "react";

const VPN = ({ ipInfo }) => {
  const [vpnInfo, setVpnInfo] = useState(null);

  useEffect(() => {
    if (ipInfo) {
      const fetchVpnInfo = async () => {
        try {
          const response = await fetch(`https://vpnapi.io/api/${ipInfo.ip}?key=1d3dcc5bcaff4a81871aedba3ee82f78`);
          const data = await response.json();
          setVpnInfo(data);
        } catch (error) {
          console.error("Error fetching VPN info:", error);
        }
      };

      fetchVpnInfo();
    }
  }, [ipInfo]);

  return (
    <div>
      {vpnInfo ? (
        <div>
          <strong>VPN</strong>
          <p>{vpnInfo.security.vpn ? "The user is using VPN" : "The user is not using VPN"}</p>
        </div>
      ) : (
        <p>Loading VPN info...</p>
      )}
    </div>
  );
};

export default VPN;
