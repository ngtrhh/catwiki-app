import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { requestOptions, THECAT_API_URL } from "../api";
import LevelBar from "../components/LevelBar";

const Detail = () => {
  const { state } = useLocation();
  const { item } = state || {};
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      `${THECAT_API_URL}/images/search?limit=8&breed_ids=${item.id}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        setImages(res);
      });
  }, []);

  return (
    <div className="detail">
      <div className="main">
        <div className="image-container">
          <img src={images[0]?.url} /> <div className="side" />
        </div>
        <div className="information">
          <div className="title">{item.name}</div>
          <div className="description">{item.description}</div>
          <div className="row">
            <b>Temperament: </b>
            {item.temperament}
          </div>
          <div className="row">
            <b>Origin: </b>
            {item.origin}
          </div>
          <div className="row">
            <b>Life Span: </b>
            {item.life_span} years
          </div>

          <div className="row level">
            <b>Adaptability:</b>
            <LevelBar value={item.adaptability} />
          </div>

          <div className="row level">
            <b>Affection level:</b>
            <LevelBar value={item.affection_level} />
          </div>

          <div className="row level">
            <b>Child Friendly:</b>
            <LevelBar value={item.child_friendly} />
          </div>

          <div className="row level">
            <b>Grooming:</b>
            <LevelBar value={item.grooming} />
          </div>

          <div className="row level">
            <b>Intelligence:</b>
            <LevelBar value={item.intelligence} />
          </div>

          <div className="row level">
            <b>Health issues:</b>
            <LevelBar value={item.health_issues} />
          </div>

          <div className="row level">
            <b>Social needs:</b>
            <LevelBar value={item.social_needs} />
          </div>

          <div className="row level">
            <b>Stranger friendly:</b>
            <LevelBar value={item.stranger_friendly} />
          </div>
        </div>
      </div>

      <div className="other-photos">
        <div className="title">Other photos</div>
        <div className="grid">
          {images.map((item, index) => (
            <img key={index} src={item.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
