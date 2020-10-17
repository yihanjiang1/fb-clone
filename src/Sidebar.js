import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

import EmojiFlagsIcon from'@material-ui/icons/EmojiFlags';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import  PeopleIcon from '@material-ui/icons/People';
import  StorefrontIcon from '@material-ui/icons/Storefront';
import  VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import  ChatIcon from '@material-ui/icons/Chat';
import Sefie from './Sefie.png';


function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src={Sefie} title='Yihan Jiang'></SidebarRow>
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'></SidebarRow>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'></SidebarRow>
            <SidebarRow Icon={PeopleIcon} title='Friends'></SidebarRow>
            <SidebarRow Icon={ChatIcon} title='Messenger'></SidebarRow>
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'></SidebarRow>
            <SidebarRow Icon={VideoLibraryIcon} title='Videos'></SidebarRow>
            <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace'></SidebarRow>
        </div>
    )
}

export default Sidebar
