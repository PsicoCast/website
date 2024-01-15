import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaSpotify, FaWhatsapp } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-around mb-4 mt-4">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook size={30} color="#3b5998" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={30} color="#C13584" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} color="#0077b5" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube size={30} color="#c4302b" />
        </a>
        <a href="https://www.spotify.com" target="_blank" rel="noreferrer">
          <FaSpotify size={30} color="#1DB954" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
          <FaWhatsapp size={30} color="#25D366" />
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
