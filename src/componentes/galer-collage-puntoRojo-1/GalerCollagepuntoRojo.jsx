
import rute from '../../images/description-1-app.png';
import './style.css'

function GalerCollagepuntoRojo() {
  const image = rute;
  console.log (image)
  return (
    <div className="petion">
      <div className="left">
        <img src= {image} alt="imagen galería collage" />
      </div>
      <div className="right">
        <h1>Organize Your Time And Start Getting Results</h1>
        <h2>Sync is the first mobile app on the market to harness the power of social connections to hel you stop procrastinating and start getting things done. Give it a try and the changes right away</h2>
        <p>•	Analyse and evaluate your current and productivity</p>
        <p>•	Begin monitoring your day to day routine with Sync appNulla facilisi. Sed euismod, nisl vel bibendum blandit, velit nunc aliquam sapien, vel tincidunt sapien velit vel velit.</p>
        <p>•	See the inproved results in no more a couple of weeks</p>
        <button className="LIGHTBOX">Botón</button>
      </div>
    </div>
  );
}

export default GalerCollagepuntoRojo;