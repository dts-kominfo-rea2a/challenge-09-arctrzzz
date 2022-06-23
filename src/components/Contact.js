// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data }) => {
  const cbContact = (element) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#ff9f1c",
          margin: "1  em",
          padding: "1em",
          border: "0",
          borderRadius: "25px",
        }}
      >
        <img
          src={element.photo}
          style={{
            width: "240px",
            height: "240px",
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
          <h1>{element.name}</h1>
          <p>{element.phone}</p>
          <p>{element.email}</p>
        </div>
      </div>
    );
  };
  const arrContactBaru = data.map(cbContact);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "70vw",
        alignItems: "center",
      }}
    >
      {arrContactBaru}
    </div>
  );
};

export default Contact;
