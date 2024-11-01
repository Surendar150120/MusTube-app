import React, { useEffect, useState } from "react";
import "./Feed.css";
import { API_KEY, views_converter } from "../../data";
import { Link } from "react-router-dom";
import moment from "moment";

const Feed = ({category}) => {

  const[data, setData] = useState([]);

  const fetchData = async () => { 
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
    await fetch(videoList_url).then(res => res.json()).then(data => setData(data.items))
  }

    useEffect(() => {
      fetchData();
    },[category])
  
  return (
    <div className="Feed">
      {data.map((item,index) =>{
        return(
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} key={index}className="card">
        <img src={item.snippet.thumbnails.medium.url} alt="" />
        <h2>{item.snippet.title}</h2>
        <h3>{item.snippet.channelTitle}</h3>
        <p>{views_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
      </Link>
        )
      })}
      
      </div>
  );
};

export default Feed;