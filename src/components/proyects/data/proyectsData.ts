import type { ProyectInfo } from '../models/proyectsData.model';

export const proyectsData: ProyectInfo[] = [
    {
        id: 0,
        title: 'E-commerce',
        image: 'src/assets/swiper/sneakShop.png',
        linkProyect: 'https://scintillating-valkyrie-973a26.netlify.app/',
        github: 'https://github.com/Vsjee/sneakers-e-commerce',
        techStack: [
            'React',
            'TypeScript',
            'Redux/Toolkit',
            'Swiper',
            'Styled-Components',
            'React router',
        ],
    },
    {
        id: 1,
        title: 'Chat-app',
        image: 'src/assets/swiper/chatApp.png',
        linkProyect: '',
        github: 'https://github.com/Vsjee/chat-app',
        techStack: [
            'React',
            'TypeScript',
            'Redux/Toolkit',
            'Styled-Components',
            'React router',
        ],
    },
    {
        id: 2,
        title: 'Coffes-app',
        image: 'src/assets/swiper/coffeApp.png',
        linkProyect: 'https://sage-lollipop-09b40f.netlify.app',
        github: 'https://github.com/Vsjee/angular-test-coffe',
        techStack: [
            'Angular',
            'TypeScript',
            'NgRx',
            'Rxjs',
            'Swiper',
            'Scss',
            'Angular/material',
        ],
    },
    {
        id: 3,
        title: 'ToDo-app',
        image: 'src/assets/swiper/toDo.png',
        linkProyect: 'https://vsjee.github.io/React-to-do/',
        github: 'https://github.com/Vsjee/React-to-do',
        techStack: ['React', 'JavaScript', 'Bootstrap'],
    },
];
