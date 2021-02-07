import cov19 from './assets/covidMobile.png';
import chatApp from './assets/chatAppMobile.png';
import petful from './assets/petfulMobile.png';
import spacedRep from './assets/spacedRep.png';
import noteful from './assets/noteful.png';

export const projects = [
    {
        title: 'COVID-19 Tracker',
        img: cov19,
        tech:
            'HTML, CSS modules, React, React Chart-js, React-Countdown, Material UI',
        description:
            'Keeps up to date covid statistics in a easy to read table and graphs, users are also able to see the statistics in different countries which are displayed in bar graphs',
        client_link: 'https://github.com/donotle98/COVID19-tracker',
        server_link: '',
        live_app: 'https://covid-19-tracker-kappa.vercel.app/',
    },
    {
        title: 'Chat Application',
        img: chatApp,
        tech: 'React, React-chat-engine, axios',
        description:
            'Using Chat-engine.io I built a chat app where already signed up users can login in to chat with their team',
        client_link: 'https://github.com/donotle98/chatengine.io-chat-app',
        server_link: '',
        live_app: '',
    },
    {
        title: 'Petful',
        img: petful,
        tech: 'React, Node, Express, PostgreSQL, Linked List',
        description:
            'Using linked lists, users can adopt either a cat or dog by putting their name into the list of adopters, after some time their name will be at the top of the list where they can pick which pet to adopt',
        client_link: 'https://github.com/donotle98/Petful-Client',
        server_link: 'https://github.com/donotle98/Petful-Server',
        live_app: 'https://petful-client-git-master.donotle98.vercel.app/',
    },
    {
        title: 'Spaced Repetition',
        img: spacedRep,
        tech: 'React, Node, Express, PostgreSQL, Linked List',
        description:
            'Using linked lists, users can learn words in another language. Users can sign and up and/or login in to view their scores of the words they have already started learning',
        client_link: 'https://github.com/donotle98/spaced-repetition',
        server_link: 'https://github.com/donotle98/spaced-repetition-api',
        live_app: 'https://spaced-repetition-gilt.vercel.app/register',
    },
    {
        title: 'Noteful',
        img: noteful,
        tech: 'React, Node, Express, PostgreSQL',
        description:
            'Users can add folders and notes, each note they add they must select which folder it belongs in',
        client_link: 'https://github.com/donotle98/noteful',
        server_link: 'https://github.com/donotle98/noteful-server',
        live_app: 'https://noteful-seven-psi.vercel.app/',
    },
];
