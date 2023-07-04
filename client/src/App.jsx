import "./App.css"
<script src="main.js?v=12345"></script>


function Welcome() {
  return (
    <>
      <div className="Welcome-section">
        <div className="welcome-empty-section">
          hi
        </div>
        <div className="Welcome-heading">
          <div> Welcome to TempDashboard ReaXpress </div>
          <button className="Welcome-button"> Load Dashboard</button>
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
