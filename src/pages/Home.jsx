import Logo from "../components/Logo";
import Image1 from "../assets/images/session1.jpg";
import Image2 from "../assets/images/session2.png";
import Image3 from "../assets/images/session3.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useEffect } from "react";

const Home = ({ breeds, mostSearch }) => {
  // const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleOnSelect = (item) => {
    navigate(`/${item.id}`, { state: { item: item } });
  };

  return (
    <div className="home">
      <div className="banner">
        <div className="top">
          <div className="content">
            <Logo color="white" size="large" />
            Get to know more about your cat breed
            {/* <div className="search"> */}
            <ReactSearchAutocomplete
              items={breeds}
              placeholder="Enter your breed"
              onSelect={handleOnSelect}
            />
            {/* <span className="material-symbols-outlined">search</span> */}
            {/* {input.length !== 0 && (
              <div className="dropdown">
                {breeds.map((item, index) => (
                  <div key={index} className="item">
                    {item.name}
                  </div>
                ))}
              </div>
            )} */}
          </div>
          {/* </div> */}
        </div>
        <div className="bottom">
          <div className="sub-title">
            Most Searched Breeds <hr />
          </div>
          <div className="row">
            <div className="title">66+ Breeds For you to discover</div>

            <Link to="/top-breeds" state={{ mostSearch }}>
              <button>
                SEE MORE
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </button>
            </Link>
          </div>

          {mostSearch.length !== 0 ? (
            <div className="breed-list">
              {mostSearch.slice(0, 4).map((item, index) => (
                <Link
                  key={index}
                  to={{ pathname: `/${item.id}` }}
                  state={{ item: item }}
                >
                  {/* <div className="item"> */}
                  {item.image_url ? (
                    <img src={item.image_url} />
                  ) : (
                    <div className="img" />
                  )}
                  {item.name}
                  {/* </div> */}
                </Link>
              ))}

              <div className="side" />
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>

      <div className="session">
        <div className="infor">
          <div className="title">
            <hr />
            Why should you have a cat?
          </div>
          <div className="content">
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves
          </div>
          <button>
            read more
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>

        <div className="images">
          <div className="column">
            <img className="first" src={Image1} />
            <img className="second" src={Image2} />
          </div>
          <img className="third" src={Image3} />
        </div>
      </div>
    </div>
  );
};

export default Home;
