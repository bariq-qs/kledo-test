import Router from "router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'react-confirm-alert/src/react-confirm-alert.css'

function App() {

  return (
    <>
      {/* {isLoading === true && (
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.2)',
            zIndex: 100,
            position: 'fixed',
            display: 'flex',
            height: '100vh',
            width: '100vw',
          }}
        >
          <Spinner />
        </div>
      )} */}
      <ToastContainer
        hideProgressBar={true}
        autoClose={1500}
        theme='colored'
      />
      <Router/>
    </>
  );
}

export default App;
