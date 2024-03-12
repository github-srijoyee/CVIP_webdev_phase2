/*import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(true); // State to toggle sidebar visibility

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen pt-10 overflow-hidden">
     
      <div className={`w-full sm:w-auto overflow-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ${showSidebar ? '' : 'hidden'}`} style={{ maxHeight: "calc(100vh - 6rem)" }}>
        <Sidebar onConversationClick={toggleSidebar} />
      </div>

      <div className={`hidden sm:flex flex-1 overflow-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ${showSidebar ? 'hidden' : ''}`} style={{ maxHeight: "calc(100vh - 6rem)" }}>
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;*/






import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import "./home.css";

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[450px] lg:h-[650px] rounded-lg overflow-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
