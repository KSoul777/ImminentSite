import React from "react";
import {Container, Button} from "reactstrap";
import ParticlesComponent from 'components/Particles/Particles.js'
import logo from "assets/img/immiennt_logo_full_white.png";

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/bastion2.jpg") + ")",
        }}
      >
        <ParticlesComponent />  
        <div className="content-center" >
          <Container >
            <div className="title-brand" >
              <img alt="" style={{ height: "15em", width: "15em" }} src={logo}></img>
              <h1 style={{WebkitTextStroke:"1px #FFF"}} className="presentation-title">Imminent</h1>
              <span>Twisting Nether</span>
            </div>
            <h2 className="presentation-subtitle text-center text-justify"> 
              <figure  style={{fontWeight:400}}>
                <q>We are what we repeatedly do. Excellence,
                <br/> then, is not an act, but a habit.</q><br/>
                <figcaption>-Aristotle</figcaption>
              </figure>
            </h2>
            <div id="buttons">
              <Button  href="https://docs.google.com/forms/u/1/d/1tZQHYzSwy39Wpy9mbi66nchmWwi6pWrPSP_0lLjtMzw" target="_blank" className="buttonHip buttonHip ice"> Apply Now</Button> 
              <Button  href="https://www.wowprogress.com/guild/eu/twisting-nether/Intrepid+Fox+Imminent" target="_blank" className="buttonHip ice"> WoW Progress</Button> 
              <Button  href="https://raider.io/guilds/eu/twisting-nether/Intrepid%20Fox%20Imminent" target="_blank" className="buttonHip ice"> Raider IO</Button> 
            </div>
            <div className="d-none justify-content-center"  style={{marginTop:"4em"}}>
              <Button   href="https://docs.google.com/forms/d/e/1FAIpQLSduLP1VQ9706NXKCLh0Hy0iy7IiMp5QJvEoyXSpXIW2VpI6sQ/viewform" target="_blank" className="buttonHip fire">2v2 Tournament</Button> 
            </div>
          </Container>
        </div>     
      </div>
    </>
  );
}

export default IndexHeader;
