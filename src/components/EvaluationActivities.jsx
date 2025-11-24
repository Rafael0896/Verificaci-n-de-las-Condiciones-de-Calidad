import React from 'react';

// Evaluation Activities Component
const EvaluationActivities = () => {
    const activities = [
        {
            name: 'Revisión de código (Peer Review)',
            description: 'Implementación de revisiones obligatorias en todos los pull requests con checklist de calidad. Se validaron estándares de codificación, principios SOLID y Clean Code.',
            completed: true
        },
        {
            name: 'Ejecución de pruebas unitarias',
            description: 'Suite completa de pruebas automatizadas con Jest/JUnit. Se alcanzó una cobertura del 85%, superando el objetivo mínimo del 80%.',
            completed: true
        },
        {
            name: 'Validación del modelo de ramas (GitFlow)',
            description: 'Verificación del cumplimiento del flujo de trabajo GitFlow en todas las contribuciones. Validación de nomenclatura y estrategia de merge.',
            completed: true
        },
        {
            name: 'Análisis estático del código (SonarQube)',
            description: 'Escaneo automatizado para detectar code smells, vulnerabilidades, duplicación y bugs. Se redujeron los problemas críticos a cero.',
            completed: true
        },
        {
            name: 'Ejecución del pipeline CI/CD',
            description: 'Validación del pipeline en GitHub Actions con ejecución automática de tests, linting y análisis de calidad en cada push.',
            completed: true
        },
        {
            name: 'Validación de Definition of Done',
            description: 'Verificación de que todas las historias de usuario cumplan los criterios: código revisado, tests aprobados, documentación actualizada e integración exitosa.',
            completed: true
        },
        {
            name: 'Revisión de documentación técnica',
            description: 'Validación de completitud de READMEs, comentarios en código y documentación de APIs según estándares establecidos.',
            completed: true
        },
        {
            name: 'Pruebas de integración continua',
            description: 'Validación de que los merges a develop no generen conflictos y que el sistema mantenga su integridad funcional.',
            completed: true
        }
    ];

    return (
        <section className="section section-alt">
            <div className="container">
                <h2 className="section-title">Actividades de Evaluación Ejecutadas</h2>
                <div className="intro-text">
                    <p>Las siguientes actividades fueron ejecutadas para verificar que las mejoras implementadas cumplen con los estándares de calidad establecidos y que el proceso de desarrollo optimizado funciona correctamente.</p>
                </div>
                <div className="activities-list">
                    {activities.map((activity, index) => (
                        <div key={index} className="activity-item">
                            <div className="activity-header">
                <span className={`activity-icon ${activity.completed ? 'completed' : ''}`}>
                  {activity.completed ? '✓' : '○'}
                </span>
                                <h3 className="activity-name">{activity.name}</h3>
                            </div>
                            <p className="activity-description">{activity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default EvaluationActivities;