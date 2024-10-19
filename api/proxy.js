import fetch from 'node-fetch';

export default async function handler(req, res) {
  const url = "https://mprod-cdn.toffeelive.com/live/match-1/index.m3u8";

  const headers = {
    "Host": "mprod-cdn.toffeelive.com",
    "cookie": "Edge-Cache-Cookie=URLPrefix=aHR0cHM6Ly9tcHJvZC1jZG4udG9mZmVlbGl2ZS5jb20v:Expires=1729352088:KeyName=prod_live_events:Signature=i2hSksb8TfBi0WRak54fEg2NWh7EoChn2_5nat_r18j2v6LiozB512ZQYtUTEHLS6fi2cG20jGOldgGW-FFxCw",
    "user-agent": "Toffee (Linux;Android 14) AndroidXMedia3/1.1.1/64103898/4d2ec9b8c7534adc",
    "client-api-header": "angM1aXCHQLmmSW6cDlpXMD6tLdwnhMoUeaBBFKmd98bX6Vrae5xCMbm4gg0+u33rnxeGQDZNr2GD1tW0cWwKEpWimNlGqXVQGhpiIBz1JFxN+OxXcQqaMPrjwUhCyI5mO1DGyNv18+Z2EpmHtVnLzV9SrGsQWu4oRKjxE8QIMsRs6LrvL6hWGPlOGQke/qb5QxQZNetPzI39jHhX7Zi2XrCMIT4a+gk2Wu1c3wIybwkqknPcTp4Bj1cEF3Q+q1dV05SBhzpEDfoR2BLyQ6dV3LvmY6MNKxbUjby7hMsg35lFl2Df2mZsr7C27309w/qWi8lLXDjB7B1MozIGKn8rw3bXY5YlrPKBKztyiisAjQQi7kc5ISXyGSwRmhciwkciuitsSL0LlqHY7/Qkkh71EtaK3XEgVpLdH8zRCsTwfu1iIVPiDwTycuuBy4XWkcNnd0iLB35yftQpiL8HfpO2jQnrAwzePxszJ7mewVG+M0P/qyTBD52NkPR8uW0AZmDKp5LHTCGf7sqldDzpZvU+gsSdvtsBUcmHzjINGEoyXk=",
    "accept-encoding": "gzip"
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Error fetching stream: ${response.statusText}`);
    }

    const body = await response.body;
    res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
    body.pipe(res);
  } catch (error) {
    console.error('Error fetching the stream:', error.message);
    res.status(500).send(`Error fetching the stream: ${error.message}`);
  }
}
