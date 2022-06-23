// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#ff9f1c",
          margin: "1em",
          padding: "1em",
          border: "0",
          borderRadius: "25px",
          width: "50vw",
        }}
      >
        <img
          alt="gambar kucing"
          src={data.photo}
          style={{
            width: "180px",
            height: "180px",
            border: "0px",
            borderRadius: "50%",
            padding: "2em",
          }}
        ></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "2em",
          }}
        >
          <h1>{data.name}</h1>
          <p>{data.phone}</p>
          <p>{data.email}</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
