import './App.css';
import Divider from './components/Divider';
import Sentiment from './components/Sentiment';
import Rating from './components/Rating';
import Feedback from './components/Feedback';

function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Divider />

            {/* <!--   review button    --> */}
            <div className="mt-2 d-flex justify-content-between">
              <button className="btn btn-warning btn-md">
                Review <i className="bi bi-box-arrow-in-right"></i>
              </button>
              <button className="btn btn-danger btn-md">
                Close <i className="bi bi-x-circle-fill"></i>
              </button>
            </div>

            <Feedback />

            <Rating />

            <Sentiment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
