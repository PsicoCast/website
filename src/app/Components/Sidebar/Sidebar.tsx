import { FaFacebook, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen bg-gray-300 dark:bg-gray-900">
      <div className="flex flex-wrap justify-around mb-4 mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        <a href="https://www.facebook.com/psicocast" target="_blank" rel="noreferrer">
          <FaFacebook 
          className="m-1" 
          size={30} 
          color="#3b5998" 
          />
        </a>
        <a href="https://www.instagram.com/psicocastoficial/" target="_blank" rel="noreferrer">
          <FaInstagram 
          className="m-1" 
          size={30} 
          color="#C13584" 
          />
        </a>
        <a href="https://youtube.com/@PSICOPLAY?si=D72rKq2a3k3wp--3" target="_blank" rel="noreferrer">
          <FaYoutube 
          className="m-1" 
          size={30} 
          color="#c4302b" 
          />
        </a>
        <a href="https://open.spotify.com/show/1zRb261WuvBiI94OLf42vY?si=VGMmbLhhQ3eIwyfajHBQTQ" target="_blank" rel="noreferrer">
          <FaSpotify 
          className="m-1" 
          size={30} 
          color="#1DB954" 
          />
        </a>
        <a href='https://twitter.com/psicocast' target='_blank' rel='noreferrer'>
          <FaXTwitter 
          className="m-1" 
          size={30} />
        </a>
        
      </div>
      <div className="flex-grow bg-gray-200 mb-2">
        Ad goes here
      </div>
      <div className="flex-grow bg-gray-200">
        Ad goes here
      </div>
    </div>
  )
}