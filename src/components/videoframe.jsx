import React, { useState } from 'react';

const VideoFrame = ({ 
  videoSrc = "/path-to-your-video.mp4", 
  thumbnailSrc = "https://via.placeholder.com/800x450/000000/FFFFFF?text=Video+Preview",
  title = "Project Demo Video",
  description = "Watch the full walkthrough"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="relative top-20 px-4 container">
        {/* Video Wrapper - Expands on hover */}
        <div 
          className={`
            relative w-full rounded-2xl overflow-hidden cursor-pointer
            ${isHovered ? 'h-36' : 'h-20'} 
            transition-all duration-500 ease-in-out
            flex items-center justify-center
            shadow-2xl
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            
          {/* Blurry Gradient Background (using your exact color #C084FC) */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-[#C084FC]/40 to-purple-600/20"></div>
            <div className="absolute inset-0 backdrop-blur-2xl"></div>
          </div>
          
          {/* Video Thumbnail Preview */}
          <img 
            src={thumbnailSrc}
            alt={title}
            className={`
              absolute inset-0 w-full h-full object-cover transition-opacity duration-300
              ${isHovered ? 'opacity-100' : 'opacity-0'}
            `}
          />
          
          {/* Dark Overlay - VISIBLE BY DEFAULT, HIDDEN ON HOVER */}
          <div className={`
            absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
            transition-opacity duration-300
            ${isHovered ? 'opacity-0' : 'opacity-100'}
          `}></div>
          
          {/* Play Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsVideoOpen(true);
            }}
            className="relative z-10 rounded-full p-6 hover:bg-white/30 transition-all transform hover:scale-110 shadow-2xl"
            aria-label="Play video"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#fff" d="M22 11v2h-1v1h-1v1h-2v1h-2v1h-1v1h-2v1h-2v1h-1v1H8v1H6v1H3v-1H2V2h1V1h3v1h2v1h2v1h1v1h2v1h2v1h1v1h2v1h2v1h1v1z"/></svg>
          </button>
          
          {/* Video Info - Slides up on hover */}
          <div className={`
            absolute bottom-0 left-0 right-0 p-6 text-white 
            transform transition-transform duration-300
            ${isHovered ? 'translate-y-0' : 'translate-y-full'}
          `}>
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-sm opacity-90">{description}</p>
          </div>
        </div>
      </div>

      {/* Video Modal - Pops up when play is clicked */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-lg flex items-center justify-center z-50 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-14 right-0 text-white rounded-full p-3 hover:bg-white/10 transition-colors"
              aria-label="Close video"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <video controls className="w-full h-auto" autoPlay>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoFrame;