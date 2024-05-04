import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './CSS/Home.module.css'
import ReactPlayer from 'react-player';
import Image from './logo.png';

export default function App() {
  const [search, setSearch] = useState('');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('https://www.googleapis.com/youtube/v3/search?key=YOUR API KEY', {
                  params: {
                      key: 'YOUR_YOUTUBE_API_KEY',
                      part: 'snippet',
                      type: 'video',
                      q: search ,// Use search state for the query
                      maxResults: 28
                      // Fetch 10 videos
                  
                  }
              });
              setVideos(response.data.items);
          } catch (error) {
              console.error("error", error);
          }
      };
      fetchData();
  }, [search]); // Add search as a dependency

  return (
    <div>
            <nav className="navbar ">
                <div className="container-fluid">
                    <img src={Image} alt="logo" />
                    <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                        <input className=
                        {`   me-3 mt-2px-4  ${style.input}`} type="search" placeholder="Search"
                            value={search} onChange={(e) => setSearch(e.target.value)}  />
                        <button className="btn btn-outline-danger mt-2 me-5" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <div className={`container ${style.container}`}>
                <div className="row">
                    {
                        videos.map((video) => (
                            <div key={video.id.videoId} className={`col ${style.cardContainer}`}>
                                <div className={` ${style.card}`}>
                                    <ReactPlayer
                                        url={"https://www.youtube.com/watch?v=" + video.id.videoId}
                                        width="100%" height="35vh"
                                        controls={true}
                                        volume={null}
                                        style={{borderRadius:'5%'}}
                                        className={`${style.player} `}
                                    />
                                    <div className={`card-body ${style.cardbody}`}>
                                        <h5 className="card-title">{video.snippet.title}</h5>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
    </div>
  )
}
