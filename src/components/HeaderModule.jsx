import "./headerModule.css";
import DuenosLogo from "../com_files/DUEÑOS.png"
import RCNlogo from "../com_files/RCNRADIO.png"

export const HeaderModule = () => {
  return (
    <div className="container">
      <div className="logoContainer">
        <img src={DuenosLogo} alt="Dueños del Balón RCN"/>
      </div>
      <h1>Tabla de posiciones Liga Betplay Dimayor 2024 - II</h1>
      <div className="logoContainer">
        <img src={RCNlogo} alt="RCN Radio Ibagué" />
      </div>
    </div>
  );
};
