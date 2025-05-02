import React, { useState } from "react";

function FinalDeclaration() {
  const [showDeclaration, setShowDeclaration] = useState(false);

  const handleReveal = () => {
    setShowDeclaration(true);
  };

  return (
    <div className="final-declaration">
      {!showDeclaration ? (
        <button onClick={handleReveal} style={{ padding: "10px 20px", fontSize: "16px", borderRadius: "10px" }}>
          Revelar Surpresa 💖
        </button>
      ) : (
        <>
          <video controls style={{ width: "100%", aspectRatio: "9/16", borderRadius: "10px"}}>
            <source src="/videos/finalvideo.mp4" type="video/mp4" />
            Seu navegador não suporta reprodução de vídeos.
          </video>
        </>
      )}
    </div>
  );
}

export default FinalDeclaration;