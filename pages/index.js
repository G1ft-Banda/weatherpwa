import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [cityName, setCityName] = useState("");

  async function handleSubmit(e) {
    const api_key = process.env.API_KEY
    const city = cityName
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&key=${api_key}&contentType=json`
    e.preventDefault();
    try {
      const res = await fetch(url);
      const data = await res.json()
      console.log(data)
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="city"
            placeholder="Search for any city"
            id="city"
            className="input"
            autoComplete="off"
            onChange={(e) => {
              setCityName(e.currentTarget.value);
            }}
          />
        </form>
      </main>
    </div>
  );
}
