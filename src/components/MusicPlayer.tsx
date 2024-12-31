import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Music2 } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [serviceConnected, setServiceConnected] = useState(false);

  useEffect(() => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('play', () => setIsPlaying(true));
      navigator.mediaSession.setActionHandler('pause', () => setIsPlaying(false));
      navigator.mediaSession.setActionHandler('previoustrack', () => console.log('Previous track'));
      navigator.mediaSession.setActionHandler('nexttrack', () => console.log('Next track'));
    }
  }, []);

  const connectToSpotify = () => {
    // Spotify OAuth flow would go here
    console.log('Connecting to Spotify...');
  };

  const connectToYouTubeMusic = () => {
    // YouTube Music OAuth flow would go here
    console.log('Connecting to YouTube Music...');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-secondary/80 backdrop-blur-md border-t border-accent/20 h-16">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Music2 className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-primary border-accent">
            <DialogHeader>
              <DialogTitle className="text-white">Connect Music Service</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
              <Button
                onClick={connectToSpotify}
                className="bg-[#1DB954] hover:bg-[#1DB954]/90 text-white"
              >
                Connect Spotify
              </Button>
              <Button
                onClick={connectToYouTubeMusic}
                className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white"
              >
                Connect YouTube Music
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 h-8 w-8"
            onClick={() => console.log('Previous')}
          >
            <SkipBack className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 h-8 w-8"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 h-8 w-8"
            onClick={() => console.log('Next')}
          >
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="w-8" />
      </div>
    </div>
  );
};

export default MusicPlayer;