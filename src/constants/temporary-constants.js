import asastry from '../assets/asastry.jpg';
import vkonda from '../assets/vkonda.jpg';
import vanly from '../assets/vanly.jpg';

export const chatMock = [
    {
        messageAvatar: asastry,
        messageAuthor: 'Abhay Sastry',
        messageTime: '8:51 AM',
        messageUser: 'asastry1',
        message: '@here team, I\'ll be wfh till noon and be at work post lunch time.'
    },
    {
        messageAvatar: vkonda,
        messageAuthor: 'Abhinav Konda',
        messageTime: '9:11 AM',
        messageUser: 'vkonda1',
        message: 'Hi team, test message.'
    },
    {
        messageAvatar: asastry,
        messageAuthor: 'Abhay Sastry',
        messageTime: '2:15 PM',
        messageUser: 'asastry1',
        message: '@here will continue my work from home. Please slack, call or sms me if you need me. Thanks'
    },
    {
        messageAvatar: vanly,
        messageAuthor: 'Eddie Lucero',
        messageTime: '3:15 PM',
        messageUser: 'elucero2',
        message: 'fyi: proconnect forum is on in Alexa team room'
    },
    {
        messageAvatar: asastry,
        messageAuthor: 'Abhay Sastry',
        messageTime: '3:20 PM',
        messageUser: 'asastry1',
        message: 'hey'
    },
]

export const starredChat = [
    {
        type: 'Channel',
        name: 'pcg_teamalexa',
        private: false,
        active: true,
        starred: true
    },
    {
        type: 'Channel',
        name: 'team-pcg-ptodev',
        private: false,
        starred: true
    },
    {
        type: 'Channel',
        name: 'iris-ut',
        private: true,
        starred: true
    },
    {
        type: 'User',
        name: 'Abhay Sastry',
        online: true
    },
    {
        type: 'User',
        name: 'Abhinav Konda',
        online: false
    },
    {
        type: 'User',
        name: 'Brittany Sumarsono',
        online: true
    },
    {
        type: 'User',
        name: 'Eddie Lucero',
        online: false
    },
    {
        type: 'User',
        name: 'Jigar Patel',
        online: true
    },
    {
        type: 'User',
        name: 'Manish Bhatia',
        online: true
    },
    {
        type: 'User',
        name: 'Shekinah Cravens',
        online: true
    },
    {
        type: 'User',
        name: 'Yexin Huang',
        online: true
    },
];

export const associatedChannels = [
    {
        type: 'Channel',
        name: 'cmty-musicians-pln',
        private: false
    },
    {
        type: 'Channel',
        name: 'cmty-nextgen-pln',
        private: false
    },
    {
        type: 'Channel',
        name: 'intuit-usa',
        private: false
    },
    {
        type: 'Channel',
        name: 'intuit-all',
        private: false
    },
    {
        type: 'Channel',
        name: 'iris-ut',
        private: true
    },
    {
        type: 'Channel',
        name: 'misc-pln-import-prf',
        private: false
    },
    {
        type: 'Channel',
        name: 'pcg-season-readiness',
        private: false
    },
    {
        type: 'Channel',
        name: 'plano-interns-2017',
        private: true
    },
    {
        type: 'Channel',
        name: 'plano-jumpintuit',
        private: true
    },
    {
        type: 'Channel',
        name: 'planosellday2019',
        private: false
    },
    {
        type: 'Channel',
        name: 'team-pcg-conversions',
        private: false
    },
    {
        type: 'Channel',
        name: 'team-pcg-ui-dev',
        private: false
    },
    {
        type: 'Channel',
        name: 'whats-happening-plano',
        private: false
    },
];

export const associatedDirectMessages = [
    {
        type: 'User',
        name: 'Peter Jiang',
        online: true
    },
    {
        type: 'Group',
        names: ['Abhay Sastry', 'Peter Jiang', 'Harsha Ilapakurty'],
    },
    {
        type: 'User',
        name: 'Harsha Ilapakurty',
        online: true
    },
];