import React, { useState, useEffect } from "react";

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <div className="container">
        <img
          src="https://picsum.photos/seed/picsum/500/250"
          height="250px"
          width="500px"
          className="home-img"
        ></img>{" "}
        {/* Thid id where you can change the picture on the Home page I have it on a random generated picture
             You can change the width and height just easily changing the numbers*/}
        <main>
          <p className="about-us">
            Explain Stuff abour your company Quis nulla incididunt tempor
            cupidatat voluptate. Laborum nisi voluptate ad eu proident dolor
            adipisicing laboris fugiat sunt aute eu velit. Sint velit ea culpa
            aliqua consequat ut do Lorem. Veniam et do laborum eu laboris magna
            nostrud. Est ullamco aute eiusmod anim cupidatat irure ad est in.
            Qui deserunt amet exercitation labore Lorem ea enim. Duis
            adipisicing nisi nulla do excepteur in ut deserunt ut nostrud.
            Consequat ad aute proident irure in quis officia sit aliqua ex.
            Laboris esse labore aliquip magna aliqua aliquip sunt. Adipisicing
            aliquip ut est aliquip. Quis ut adipisicing do reprehenderit
            pariatur enim culpa nisi ea irure ut nulla dolor anim.
          </p>
        </main>
      </div>
    </>
  );
};

export default Home;
