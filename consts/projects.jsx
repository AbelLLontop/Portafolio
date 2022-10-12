import img_buscaminas from 'public/images/projects/buscaminas.jpg'
import img_buscaminas_react from 'public/images/projects/buscaminas_react.jpg'
import img_portafolio from 'public/images/projects/portafolio.jpg'
import { DiHtml5,   DiJavascript1 } from 'react-icons/di'
import { SiCss3, SiNextdotjs, SiReact, SiSass, SiTypescript } from 'react-icons/si'

export const projectList =[
    {
        name: "Protafolio",
        description: 'Pagina web personal construida con Next.js y sass',
        image: img_portafolio,
        date:"12/10/2022",
        link: "#",
        objectFit:"contain",
        repo: "https://github.com/AbelLLontop/Portafolio",
        skills: [{name:'next',icon:<SiNextdotjs/>},,{name:'sass',icon:<SiSass/>}],
    },
    {
        name: "Buscaminas-React",
        description: "Aplicacion construida con react y typescript basada en el juego buscaminas, usando como base el proyecto anteriormente hecho con vanilla javascript",
        image: img_buscaminas_react,
        date:"08/10/2022",
        link: "https://buscaminas-react.vercel.app/",
        repo: "https://github.com/AbelLLontop/Buscaminas-React",
        skills: [{name:'typescript',icon:<SiTypescript/>},{name:'react',icon:<SiReact/>},{name:'sass',icon:<SiSass/>}],
    },
    {
        name: "Buscaminas",
        description: 'Una versión adaptada del clásico juego "Buscaminas" con el uso de Html5, Css y JavaScript.',
        image: img_buscaminas,
        date:"08/12/2020",
        link: "https://abelllontop.github.io/BuscaMinas-Game/",
        repo: "https://github.com/AbelLLontop/BuscaMinas-Game",
        skills: [{name:'html5',icon:<DiHtml5/>},{name:'css3',icon:<SiCss3/>},{name:'javascript',icon:<DiJavascript1/>}],
    }
   
] 