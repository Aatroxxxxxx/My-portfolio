import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-black to-gray-800 text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        Stagiaire en développement digital web full stack, et je suis vraiment motivé d'améliorer mes compétences      
        </p>

        <br />
        <p className="text-xl mt-5">
        Je suis un apprenant rapide doté d'une communication efficace. 
        J'accorde une attention particulière aux détails et je m'efforce d'assurer la qualité de mon travail. </p>
        <br />
        <p className="text-xl mt-5">
        Ma capacité à gérer le stress et mon enthousiasme pour l'apprentissage continu font de moi un collaborateur adaptable et motivé. 
        Prêt à contribuer positivement, je suis convivial et apprécie le travail d'équipe.
        </p>
      </div>
    </div>
  );
};

export default About;
