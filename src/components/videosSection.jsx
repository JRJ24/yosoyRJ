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
    // hace que cada sección sea flexible y ocupe ~48% para poner 2 en fila
    <section id="videos" style={{ marginTop: "2rem", textAlign: "center", boxSizing: "border-box", flex: "1 1 48%", maxWidth: "48%", padding: 8 }}>
      <h2 style={{ display: "none" }}>Último video</h2>

      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, width: "100%", overflow: "hidden", borderRadius: 16 }}>
        <iframe
          src={embedUrl}
          title="Último video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: 16 }}
        />
      </div>
    </section>
  );
}
