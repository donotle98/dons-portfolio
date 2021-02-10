import chatApp from './assets/chatAppMobile.png';
import petful from './assets/petfulMobile.png';
import spacedRep from './assets/spacedRep.png';
import noteful from './assets/noteful.png';
import weatherVue from './assets/weatherVue.png';
import todoVue from './assets/todoVue.png';
import musicVue from './assets/vueMusic.png';

export const projects = [
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
    {
        title: 'Weather App',
        img: weatherVue,
        tech: 'Vue.js, openweatherAPI',
        description:
            'Users can search any city or state and get back temperature, and weather',
        client_link: 'https://github.com/donotle98/vue-weather-app',
        server_link: '',
        live_app: 'https://vue-weather-app-eight.vercel.app/',
    },
    {
        title: 'Todo List App',
        img: todoVue,
        tech: 'Vue.js',
        description:
            'Todo list where users can add or delete items, data does not persist',
        client_link: 'https://github.com/donotle98/vue-todo-list',
        server_link: '',
        live_app: 'https://vue-todo-list-lac.vercel.app/',
    },
    {
        title: 'Music App',
        img: musicVue,
        tech: 'Vue.js, JS Audio',
        description:
            'Music application that plays, pauses, skips, and rewinds songs. Implemented with a volume bar.',
        client_link: 'https://github.com/donotle98/vue-music-app',
        server_link: '',
        live_app: 'https://vue-music-app-eight.vercel.app/',
    },
];
