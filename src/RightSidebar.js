import React, { useState, useEffect } from "react";

const RightSideBar = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState([]); // Initialize as an empty array

  const fetchQuote = async () => {
    try {
      const response = await fetch("http://localhost:5084/api/quotes/random"); // Update with your actual API URL

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setQuote(data.text || "");
         // Fallback to empty string if quote is missing
        setAuthor(data.author || "Unknown"); // Fallback to 'Unknown' if author is missing
        setTags(data.tags || []); // Fallback to empty array if tags are missing
      } else {
        console.error("Error fetching quote:", response.status);
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      <h1>Random Quote</h1>
      <blockquote style={{ fontSize: "24px", fontStyle: "italic", margin: "20px 0" }}>
        "{quote}"
        
      </blockquote>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>- {author}</p>
      {tags && tags.length > 0 && (
        <p style={{ fontSize: "14px", color: "gray" }}>
          Tags: {tags.join(", ")}
        </p>
      )}
      <button onClick={fetchQuote} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Get Another Quote
      </button>
    </div>
  );
};

export default RightSideBar;
