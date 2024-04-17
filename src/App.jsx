import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { requestOptions, THECAT_API_URL } from "./api";
import Detail from "./pages/Detail";
import TopSearch from "./pages/TopSearch";

function App() {
  const [breeds, setBreeds] = useState([]);
  const [mostSearch, setMostSearch] = useState([]);

  const fetchAllBreeds = async () => {
    fetch(`${THECAT_API_URL}/breeds`, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        setBreeds(res);
        fetchMostSearch(res.sort(() => 0.5 - Math.random()).slice(0, 10));
      })
      .catch((error) => console.log("error:" + error));
  };

  const fetchMostSearch = async (arr) => {
    arr.forEach((item) => {
      fetch(
        `${THECAT_API_URL}/images/search?limit=1&breed_ids=${item.id}`,
        requestOptions
      )
        .then((res) => res.json())
        .then((res) => {
          item.image_url = res[0]?.url;
        });
    });

    setMostSearch(arr);
  };

  useEffect(() => {
    fetchAllBreeds();
  }, []);

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route
          path="/"
          Component={() => <Home breeds={breeds} mostSearch={mostSearch} />}
        />
        <Route path="/:id" Component={() => <Detail />} />
        <Route
          path="/top-breeds"
          Component={() => <TopSearch mostSearch={mostSearch} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
