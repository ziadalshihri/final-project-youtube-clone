import { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState(null);
  const url = "https://www.googleapis.com/youtube/v3/search";
  const apiKey = "";//insert youtube  api key here
  async function handleClick() {
    const response = await fetch(
      `${url}?key=${apiKey}&q=${userInput}&type=video&part=snippet&maxResults=8`
    );
    const data = await response.json();
    setData(data);
  }

  function handleChange(e) {
    setUserInput(e.target.value);
  }
  
  return (
    <div className="search-container">
      <input
        type="text"
        className="inputSearch"
        placeholder="Search..."
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            handleClick();
          }
        }}
      />

      <button className="ytsearch" onClick={handleClick}>
        <img src="/images/YTSearchLogo.png" alt="Search Logo" />
      </button>

      <h1></h1>
      {
        // If data is NOT empty or null
        // this is how to get a link to youtube https://www.youtube.com/watch?v=videoId
        data && (
          <div className="container">
            <div className="item item1">
              <a href={"https://www.youtube.com/watch?v=" + data.items[0].id.videoId}>
                <img
                  src={data.items[0].snippet.thumbnails.default.url}
                  alt="video thumbnail"
                />
              </a>
              <p>{data.items[0].snippet.title}</p>
              <p>{data.items[0].snippet.channelTitle}</p>
            </div>

            <div className="item item2">
            <a href={"https://www.youtube.com/watch?v=" + data.items[1].id.videoId}>
                <img
                  src={data.items[1].snippet.thumbnails.default.url}
                  alt="video thumbnail"
                />
              </a>
              <p>{data.items[1].snippet.title}</p>
              <p>{data.items[1].snippet.channelTitle}</p>
            </div>

            <div className="item item3">
            <a href={"https://www.youtube.com/watch?v=" + data.items[2].id.videoId}>
                <img
                  src={data.items[2].snippet.thumbnails.default.url}
                  alt="video thumbnail"
                />
              </a>
              <p>{data.items[2].snippet.title}</p>
              <p>{data.items[2].snippet.channelTitle}</p>
            </div>

            <div className="item item4">
            <a href={"https://www.youtube.com/watch?v=" + data.items[3].id.videoId}>
                <img
                  src={data.items[3].snippet.thumbnails.default.url}
                  alt="video thumbnail"
                />
              </a>
              <p>{data.items[3].snippet.title}</p>
              <p>{data.items[3].snippet.channelTitle}</p>
            </div>

            <div className="item item5">
            <a href={"https://www.youtube.com/watch?v=" + data.items[4].id.videoId}>
                <img
                  src={data.items[4].snippet.thumbnails.default.url}
                  alt="video thumbnail"
                />
              </a>
              <p>{data.items[4].snippet.title}</p>
              <p>{data.items[4].snippet.channelTitle}</p>
            </div>

            <div className="item item6">
            <a href={"https://www.youtube.com/watch?v=" + data.items[5].id.videoId}>
                <img
                  src={data.items[5].snippet.thumbnails.default.url}
                  alt="video thumbnail"
                />
              </a>
              <p>{data.items[5].snippet.title}</p>
              <p>{data.items[5].snippet.channelTitle}</p>
            </div>

            <div className="item item7">
            <a href={"https://www.youtube.com/watch?v=" + data.items[6].id.videoId}>
                <img
                  src={data.items[6].snippet.thumbnails.default.url}
                  alt="video thumbnail"
                />
              </a>
              <p>{data.items[6].snippet.title}</p>
              <p>{data.items[6].snippet.channelTitle}</p>
            </div>

            <div className="item item8">
            <a href={"https://www.youtube.com/watch?v=" + data.items[7].id.videoId}>
                <img
                  src={data.items[7].snippet.thumbnails.default.url}
                  alt="video thumbnail"
                />
              </a>
              <p>{data.items[7].snippet.title}</p>
              <p>{data.items[7].snippet.channelTitle}</p>
            </div>
          </div>
        )
      }
    </div>
  );
};
{
  /*youtube DL on github? to download mp3 videos of youtube mp3 is only sound btw
make use of rapid api but take care as it doesnt have the best prices?. 
make persistance data with firestorage and add authentication.
what is infinity scroll and how to achive it ?
what is blop storage?
how to make an api yourself?
what is a continueToken?
type script will achive type security... but is it worth it? 
recalls.sa to show information about?
it is okay to use a css framework.

*/
}

export default Home;
