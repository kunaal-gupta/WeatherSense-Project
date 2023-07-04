import "./App.css"
<script src="main.js?v=12345"></script>


function Welcome() {
  return (
    <>
    <div className="background">
      <div className="Welcome-section">
        <div className="welcome-empty-section">
        </div>
        <div className="Welcome-heading">
          <div> Welcome to TempDashboard ReaXpress </div>
          <button className="Welcome-button"> Load Dashboard</button>
        </div>
      </div>
      </div>
    </>
  )
}


export default function App() {

  return (

    <>
      <Welcome />
    </>

  );
}
