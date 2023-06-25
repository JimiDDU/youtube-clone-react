import "./style.css";

function VideoCard({ thumbnailUrl, title, author }) {
  return (
    <div className="videoCard">
      <div className="thumbnail">
        <img src={thumbnailUrl} alt="Thumbnail" width="360px" height="203px" />
        <div className="duration">12:07:34</div>
      </div>
      <div className="details">
        <div className="channelIcon">
          <div className="logo">
            <img
              src="https://yt3.ggpht.com/ytc/AGIKgqPmse0WZs5SB6p9gDCWGHqb3mbORqK75JweHVWGNw=s68-c-k-c0x00ffffff-no-rj"
              alt="Channel Icon"
              width="36px"
              height="36px"
            />
          </div>
        </div>
        <div className="others">
          <div className="title">{title}</div>
          <div className="channelName">{author}</div>
          <div className="part2">
            <div className="views">20M views</div>
            <div className="circle"></div>
            <div className="time">2 years ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
