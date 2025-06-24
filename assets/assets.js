import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import xd from './xd.png';
import adobecc from './adobecc.png';
import figma from './figma.png';
import axure from './axure.png';
import sketch from './sketch.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import phone_icon from './phone_icon.png';
import phone_icon_dark from './phone_icon_dark.png';
export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    xd,
    adobecc,
    figma,
    axure,
    sketch,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    phone_icon,
    phone_icon_dark
};

export const workData = [
    {
        title: 'Online Grocery App',
        description: 'Case Study',
        bgImage: '/work-1.png',
        link: 'https://www.behance.net/raxx08928b6',
        onClick: () => window.open('https://www.behance.net/raxx08928b6', '_blank')
    },
    {
        title: 'Project Management App',
        description: 'Case Study',
        bgImage: '/work-2.png',
        link: 'https://www.behance.net/gallery/215513855/Project-Management-Saas-Based-Cloud-Application',
        onClick: () => window.open('https://www.behance.net/gallery/215513855/Project-Management-Saas-Based-Cloud-Application', '_blank')
    },
    {
        title: 'Tailoring App',
        description: 'Case Study',
        bgImage: '/work-3.png',
        link: 'https://www.behance.net/gallery/143480957/Tailoring-App-Case-Study',
        onClick: () => window.open('https://www.behance.net/gallery/143480957/Tailoring-App-Case-Study', '_blank')
    },
    {
        title: 'Inventory Management',
        description: 'Case Study',
        bgImage: '/work-4.png',
        link: 'https://www.behance.net/gallery/198577891/eCommerce-Inventory-Management',
        onClick: () => window.open('https://www.behance.net/gallery/198577891/eCommerce-Inventory-Management', '_blank')
    },
    {
        title: 'Redesigning an ERP System',
        description: 'Case Study',
        bgImage: '/work-5.png',
        url: 'https://www.behance.net/gallery/228535089/UX-Case-Study-Redesigning-an-ERP-System',
        onClick: () => window.open('https://www.behance.net/gallery/228535089/UX-Case-Study-Redesigning-an-ERP-System', '_blank')
    },
    {
        title: 'Chronic Care Management App',
        description: 'Case Study',
        bgImage: '/work-6.png',
        link: 'https://www.behance.net/gallery/227086107/MediConnect-A-Healthcare-Application-Case-Study',
        onClick: () => window.open('https://www.behance.net/gallery/227086107/MediConnect-A-Healthcare-Application-Case-Study', '_blank')
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Design Expertise', description: 'User Research, Wireframing, Prototyping, Information Architecture, Visual Design and many more...' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science and Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 10 projects' }
];

export const toolsData = [
    assets.figma, assets.xd, assets.adobecc, assets.axure, assets.sketch
];