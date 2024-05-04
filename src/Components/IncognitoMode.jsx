import React, { useState, useEffect } from "react";
import { detectIncognito } from "detectincognitojs";

const IncognitoMode = () => {
  const [isIncognito, setIsIncognito] = useState(null);

  useEffect(() => {
    const checkIncognito = async () => {
      try {
        const result = await detectIncognito();
        setIsIncognito(result.isPrivate);
      } catch (error) {
        console.error("Error detecting incognito mode:", error);
      }
    };

    checkIncognito();
  }, []);

  return (
    <div>
      {isIncognito !== null ? (
        <p>
          <strong>Incognito Mode</strong>
          <p>{isIncognito ? "The user is using incognito mode" : "The user is not using incognito mode"}</p>
        </p>
      ) : (
        <p>Checking...</p>
      )}
    </div>
  );
};

export default IncognitoMode;
