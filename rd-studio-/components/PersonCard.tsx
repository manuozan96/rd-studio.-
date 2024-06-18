import React from "react";

const PersonCard = ({ image, name, profession }) => {
  return (
    <div style={{marginBottom: "56px", marginLeft: "14px", width: '100%' }}>
      <img src={image} alt={name} style={{ width: "178px", height: "249px", marginBottom: "12px" }} />
      <p
        style={{
          fontFamily: "DM Sans",
          fontWeight: "800",
          fontSize: "16px",
          color: "#0A0E0B",
          marginLeft: "10px",
          marginTop: "12px" 
        }}
      >
        {name}
        <br />
        {profession}
      </p>
    </div>
  );
};

export default PersonCard;