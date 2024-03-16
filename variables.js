
const handlerBarsContext = {
    "/index.html": {
        "proyectos": [
            {
                imgUrl: "https://img.freepik.com/vector-gratis/ilustracion-tarjeta-visita_53876-5912.jpg?t=st=1710455615~exp=1710459215~hmac=55cbb10d45c6444f20fc453fa22d78c01fa29384e7de1542f9cc5e8ba458f910&w=1480",
                name: "Pagina de Biografia personal",
                content: "Creé una página web personal con mi foto, biografía, habilidades, logros y contacto. Usé HTML para organizarla y CSS para diseñarla, logrando un aspecto visualmente atractivo."
            },
            {
                imgUrl: "https://img.freepik.com/vector-gratis/vector-diseno-calculadora-escuela-verde_53876-170646.jpg?t=st=1710455389~exp=1710458989~hmac=28bad3e376b56c59f05fc43e275ac04812217719f44b3177702033107fd8e1e4&w=1480",
                name: "Calcu;aora simple",
                content: "Desarrollé una calculadora simple para sumar, restar, multiplicar y dividir. Diseñé su interfaz con HTML, le di estilo con CSS y programé sus funciones con JavaScript, incluyendo eventos del DOM y cálculos matemáticos."
            },
            {
                imgUrl: "https://img.freepik.com/vector-gratis/ilustracion-portapapeles-papel_53876-5847.jpg?t=st=1710455305~exp=1710458905~hmac=bc2ae7e61ce90556d2e6e38a49b76bf2026eb92a5c84ef924a5fc0aac1a1647f&w=1480",
                name: "To Do List",
                content: "Realicé una app de lista de tareas para añadir, completar y borrar tareas. Usé JavaScript para la interacción del usuario y actualizar el DOM dinámicamente, perfeccionando mi manejo del DOM y eventos."
            },
            {
                imgUrl: "https://img.freepik.com/vector-gratis/reloj_53876-35136.jpg?t=st=1710455168~exp=1710458768~hmac=59b7f7c5e5258458225386a6e47a6f2e23cab889f5c7f4bd401be502bc24561d&w=1480",
                name: "Reloj",
                content: "Construí un reloj digital que muestra la hora actual. Este proyecto me permitió trabajar con objetos Date en JavaScript y actualizar la interfaz de usuario en tiempo real. Además, experimenté con CSS para el diseño de elementos de tiempo y animaciones."
            },
            {
                imgUrl: "https://pbs.twimg.com/profile_images/1555324395060662272/7oXlsCZ8_400x400.jpg",
                name: "Proyecto para la organizacion AHDESA",
                content: "En la clase de portales web I, se llevó a cabo el proyecto de realizar la página web para la organización sin fines de lucro AHDESA. Escribimos el HTML y CSS desde cero y también el JavaScript para validar la página web donde se requería."
            }
        ]
    },
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;










