import React, { useEffect, useState } from "react";
import "./Playvideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { API_KEY, views_converter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
    const {videoId} = useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    const videoData_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoData_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commentData_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play_video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play_video_info">
        <p>
          {apiData ? views_converter(apiData.statistics.viewCount) : "25k"}{" "}
          views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {views_converter(apiData ? apiData.statistics.likeCount : 243)}
          </span>
          <span>
            <img src={dislike} alt="" />
            {views_converter(apiData ? apiData.statistics.likeCount : 243)}
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>
            {channelData
              ? views_converter(channelData.statistics.subscriberCount)
              : "1M"} Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video_description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Description Here"}
        </p>
        <p>Subscribe financestakes to watch more Tutorial on forex Trading</p>
        <hr />
        <h4>
          {apiData ? views_converter(apiData.statistics.commentCount) : 200}{" "}
          Comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div key= {index} className="comment">
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName} <span>2 days ago</span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment_action">
                  <img src={like} alt="" />
                  <span>{views_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
