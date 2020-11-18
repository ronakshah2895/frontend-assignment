import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="bg-light">
        <div className="container">
          <div className="row w-100">
            <div className="col-9 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="heading">
                  <h4 className="m-0">Travelize</h4>
                  <span className="small font-italic">My travelling experiences</span>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Blog</a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#">About</a>
                    </li>
                  </ul>
                </div>

              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="w-100" src={heroBackground} alt="Hero Background" />
          </div>
        </div>
        <div className="row">
          <div className="col-9 mx-auto mt-4">
            <div className="row">
              <div className="col-3">
                <img className="w-100 rounded-circle" src={headshot} alt="Profile Headshot" />
              </div>
              <div className="col-9">
                <h5>A little about me</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque orci ac nunc viverra, non maximus dolor pulvinar. Duis et orci eu diam aliquam consectetur at a urna. Integer eget ultrices nisl. In metus diam, vestibulum at commodo eget, vehicula et ante.</p>
                <p>Phasellus vitae egestas mi. Nullam dictum erat nisl, sit amet rhoncus odio rutrum nec. Maecenas consectetur ex vitae metus lacinia bibendum. Pellentesque mi urna, scelerisque ac justo a, hendrerit cursus elit. Proin tortor elit, feugiat eget erat a, fringilla ullamcorper libero. Quisque nisl ipsum, scelerisque at elit quis, imperdiet dictum diam.</p>
                <p>Nulla suscipit enim at orci dignissim, a gravida dolor tempor. Sed varius orci aliquet arcu consectetur ultricies. Sed faucibus dapibus bibendum. Aliquam odio sem, aliquam quis arcu id, eleifend hendrerit nisl. Integer blandit augue metus, in rhoncus risus pretium id.</p>
                <p>In arcu sem, volutpat quis felis sit amet, ultricies suscipit leo. Ut luctus felis eu dui tincidunt, quis volutpat erat rhoncus. Sed pharetra lacus diam, quis dapibus elit posuere a. Pellentesque venenatis, ante non vestibulum mattis, libero sapien vehicula eros, quis pulvinar urna nunc id velit.</p>
                <p>Aenean nec urna massa. Quisque commodo justo eget sapien dapibus, nec tincidunt elit tincidunt. In semper, arcu sed bibendum rutrum, magna elit tincidunt nunc, ut pretium urna leo eu ex. Curabitur dignissim et ligula auctor iaculis. Integer vulputate sapien et sem tempus, rutrum efficitur nunc cursus. Integer vitae malesuada nisi. Pellentesque ex metus, sodales sit amet bibendum quis, rutrum eu arcu.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary mt-4 text-white">
        <div className="container">
          <div className="row">
            <div className="col-9 mx-auto">
              <p className="my-2 float-right">Privacy Policy Terms and conditions</p>
              <p className="my-2">@ 2020 Travelize</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
