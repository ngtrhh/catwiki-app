import { Link, useLocation } from "react-router-dom";

const TopSearch = () => {
  const { state } = useLocation();
  const { mostSearch } = state || {};

  return (
    <div className="top-search">
      <div className="title">Top 10 most searched breeds</div>
      <div className="grid">
        {mostSearch.map((item) => (
          <Link
            key={item.id}
            to={{ pathname: `/${item.id}` }}
            state={{ item: item }}
          >
            <div className="row" key={item.id}>
              <img src={item.image_url} />
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopSearch;
