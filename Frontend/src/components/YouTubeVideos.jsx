import React from 'react';
import './YouTubeVideos.css'; // Import your CSS file for YouTube videos

const YouTubeVideos = () => {
    // Sample YouTube video IDs
    const videoIds = ['hMW_pT7w-Y8', 'AkbGz3CYvqE', 'Mx6ePidFBZo?si=uqa5x_5rIBrPVUec']; // Replace with actual YouTube video IDs

    return (
        <div className="youtube-videos">
            {videoIds.map((videoId) => (
                <div key={videoId} className="youtube-video">
                    <iframe
                        width="300"
                        height="200"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={`YouTube Video ${videoId}`}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </div>
    );
};

export default YouTubeVideos;
