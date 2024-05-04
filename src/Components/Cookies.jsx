import React, { useState, useEffect } from 'react';

const Cookies = () => {
  const [cookies, setCookies] = useState(null);
  useEffect(() => {
    // Fetch cookies information
    const fetchCookies = () => {
      const cookiesArray = document.cookie.split(';');
      const cookiesObject = {};
      cookiesArray.forEach(cookie => {
        const [name, value] = cookie.split('=').map(c => c.trim());
        cookiesObject[name] = value;
      });
      setCookies(cookiesObject);
    };

    fetchCookies();
  }, []);

  return (
    <div>
      <strong>Cookies Information</strong>
      <ul>
        {cookies &&
          Object.entries(cookies).map(([name, value]) => (
            <li key={name}>
              <strong>{name}:</strong> {value}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cookies;
