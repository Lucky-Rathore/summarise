import React, { useState, useEffect } from 'react';
// import getSubtitles from 'youtube-caption-scraper';
import { getSubtitles } from 'youtube-captions-scraper';

const YouTubeSubtitles = ({ videoId }) => {
  const [subtitles, setSubtitles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubtitles = async () => {
        getSubtitles({
            videoID: videoId, 
          }).then(captions => {
            console.log(captions);
            let sub = ''
            for(var c in captions){
                sub += ' ' + captions[c].text
            }
            setSubtitles(sub)
          });          
    };

    fetchSubtitles();
  }, [videoId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Video Subtitles</h2>
      {/* {subtitles.map((caption, index) => (
        <p key={index}>
            {caption.text}
        </p>
      ))} */}
      <p>{subtitles}</p>
    </div>
  );
};

export default YouTubeSubtitles;