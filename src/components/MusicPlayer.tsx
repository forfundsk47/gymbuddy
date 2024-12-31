import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import { Button } from './ui/button';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);

  useEffect(() => {
    // Check if browser supports the Media Session API
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('play', () => setIsPlaying(true));
      navigator.mediaSession.setActionHandler('pause', () => setIsPlaying(false));
      navigator.mediaSession.setActionHandler('previoustrack', () => console.log('Previous track'));
      navigator.mediaSession.setActionHandler('nexttrack', () => console.log('Next track'));
    }
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-secondary/95 backdrop-blur-sm p-4 border-t border-accent">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-accent rounded-md flex items-center justify-center">
            <Volume2 className="text-white" />
          </div>
          <div className="text-white">
            <p className="font-medium">Connect to Music Service</p>
            <p className="text-sm text-white/70">Spotify or YouTube Music</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => console.log('Previous')}
          >
            <SkipBack className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => console.log('Next')}
          >
            <SkipForward className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="w-32">
          {/* Placeholder for future service connection button */}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;