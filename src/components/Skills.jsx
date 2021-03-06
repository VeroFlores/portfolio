import React from 'react';

const Skills =()=>{
    return(
        <section id="skills"className="container mt-5">
        <div className="col-lg-12 text-center">
          <h2 className="title-section line pt-5">Habilidades</h2>         
        </div>
        <div className="col-lg-12 mt-5">
            <div className="row text-center">
                <div className="col-lg-6 col-sm-12">
                    <p className="subtitle">Blandas</p>
                    <img src="https://user-images.githubusercontent.com/68167686/103464795-700c6300-4d04-11eb-9562-162744f20a03.png" className="img-fluid"alt="soft-skills"/>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <p className="subtitle">Técnicas</p>
                    <img src="https://user-images.githubusercontent.com/68167686/109228488-e327d800-778f-11eb-8a3b-52da1bd79f38.png" className="img-fluid" alt="tech-skills"/>
                </div>
            </div>
        </div>
        </section>
    )

};
export default Skills;