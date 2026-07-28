// Build a job board that displays the latest job postings from Hacker News.

import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [job, setJob] = useState([]);

  const fetchJob = async () => {
    try {
      const res = await fetch(
        "https://hacker-news.firebaseio.com/v0/jobstories.json",
      );

      const ids = await res.json();
      console.log(ids);
      const newIds = [...ids];

      const fetchChunks = async () => {
        const chunks = newIds.splice(0, 5);

        const jobDetails = await Promise.all(
          chunks.map(async (id) => {
            const res = await fetch(
              `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
            );

            return res.json();
          }),
        );

        setJob((prev) => [...prev, ...jobDetails]);

        if (newIds.length > 0) {
          setTimeout(() => {
            fetchChunks();
          }, 100);
        }
      };

      fetchChunks();
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);

  return (
    <>
      <div className="container">
        {job.map((e) => (
          <div className="card" key={e.id}>
            <p>
              <span>Posted By:</span> {e.by}
            </p>
            <p>
              <span>Score:</span> {e.score}{" "}
            </p>
            <p>
              <span>Job Title:</span> {e.title}{" "}
            </p>
            <p>
              <span>Time:</span> {new Date(e.time * 1000).toLocaleString()}{" "}
            </p>
            <a href={e.url} target="_blank" rel>
              Apply Now{" "}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
