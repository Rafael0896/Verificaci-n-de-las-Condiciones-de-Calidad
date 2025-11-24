// Best Practices Component
import React from 'react';

const BestPractices = () => {
    const practices = [
        {
            framework: 'Scrum',
            icon: '🔄',
            practices: [
                'Sprint Planning con refinamiento técnico',
                'Daily Scrum con estado de tareas',
                'Sprint Review con incremento funcional',
                'Retrospectiva enfocada en calidad'
            ]
        },
        {
            framework: 'DevOps',
            icon: '⚙️',
            practices: [
                'Integración continua automática',
                'Pipeline CI/CD con GitHub Actions',
                'Despliegue automatizado a staging',
                'Monitoreo de calidad en cada commit'
            ]
        },
        {
            framework: 'ISO 25010',
            icon: '📊',
            practices: [
                'Evaluación de mantenibilidad',
                'Medición de fiabilidad del sistema',
                'Análisis de eficiencia de desempeño',
                'Validación de características de calidad'
            ]
        },
        {
            framework: 'Gitflow',
            icon: '🌿',
            practices: [
                'Ramas feature/ para nuevas funcionalidades',
                'Rama develop para integración',
                'Pull requests obligatorios',
                'Code review antes de cada merge'
            ]
        },
        {
            framework: 'Clean Code',
            icon: '✨',
            practices: [
                'Nombres descriptivos y significativos',
                'Funciones pequeñas y enfocadas',
                'Aplicación de principios SOLID',
                'Refactorización continua del código'
            ]
        },
        {
            framework: 'Testing',
            icon: '🧪',
            practices: [
                'Cobertura mínima del 80%',
                'Pruebas unitarias automatizadas',
                'Ejecución de tests en cada commit',
                'Validación de funcionalidades críticas'
            ]
        }
    ];

    return (
        <section className="section section-alt">
            <div className="container">
                <h2 className="section-title">Buenas Prácticas de Calidad Aplicadas</h2>
                <div className="intro-text">
                    <p>Las siguientes buenas prácticas fueron implementadas como parte del proceso de optimización y se encuentran activas en el ciclo de desarrollo actual. Estas prácticas se alinean con las propuestas documentadas en el proyecto de mejora continua.</p>
                </div>
                <div className="cards-grid">
                    {practices.map((item, index) => (
                        <div key={index} className="practice-card">
                            <div className="card-icon">{item.icon}</div>
                            <h3 className="card-title">{item.framework}</h3>
                            <ul className="practice-list">
                                {item.practices.map((practice, idx) => (
                                    <li key={idx}>{practice}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestPractices;