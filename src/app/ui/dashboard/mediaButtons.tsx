import Link from 'next/link';
import { SocialIcon } from 'react-social-icons/component'

export function YouTubeButton() {
    return (
      <Link
        href="www.youtube.com/"
        className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <SocialIcon url="www.youtube.com" />
      </Link>
    );
  }
  
  export function InstagramButton() {
    return (
      <Link
        href="www.instagram.com/"
        className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <SocialIcon url="www.instagram.com" />
      </Link>
    );
  }
  
  export function TikTokButton() {
    return (
      <Link
        href="www.tiktok.com/"
        className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
         <SocialIcon url="www.tiktok.com" />
      </Link>
    );
  }

  export function SpotifyButton() {
    return (
      <Link
        href="www.spotify.com/"
        className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <SocialIcon url="www.spotify.com" />
      </Link>
    );
  }

  export function FacebookButton() {
    return (
      <Link
        href="www.facebook.com/"
        className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <SocialIcon url="www.facebook.com" />
      </Link>
    );
  }