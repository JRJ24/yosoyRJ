import React from "react";

export default function VideoSection({ latestVideoId }) {
  if (!latestVideoId) {
    return (
      <section id="videos" style={{ marginTop: "2rem", textAlign: "center" }}>
        <h2>Videos</h2>
        <p>No hay video seleccionado. Actualiza latestVideoId en Welcome.astro</p>
      </section>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/${latestVideoId}`;

  return (
    <section id="videos" style={{ marginTop: "5rem", textAlign: "center" }}>
      <h2>Último video</h2>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, maxWidth: "100%", marginTop: "1rem", left: "25%" }}>
        <iframe
          src={embedUrl}
          title="Último video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "50%", height: "50%", borderRadius: "20px" }}
        />
      </div>
    </section>
  );
}
