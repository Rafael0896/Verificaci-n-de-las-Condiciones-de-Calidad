import React from "react";

// Tools Component
const EvaluationTools = () => {
    const tools = [
        {
            name: 'SonarQube',
            icon: '🔍',
            purpose: 'Análisis estático de código',
            measures: 'Code smells (12), vulnerabilidades (0), duplicación (2.3%), complejidad ciclomática (<10), cobertura (85%)',
            contribution: 'Garantiza la calidad del código fuente conforme a los estándares establecidos. Validó la reducción de problemas críticos de 47 a 12.'
        },
        {
            name: 'GitHub Actions',
            icon: '🚀',
            purpose: 'Integración y despliegue continuo (CI/CD)',
            measures: 'Builds exitosos (100%), tiempo de ejecución (3.5 min promedio), tests ejecutados automáticamente en cada commit',
            contribution: 'Implementa el pipeline CI/CD propuesto, automatizando pruebas y validaciones. Cumple con el objetivo de integración continua.'
        },
        {
            name: 'Jest / JUnit',
            icon: '🧪',
            purpose: 'Ejecución de pruebas unitarias',
            measures: 'Cobertura de código (85%), 247 casos de prueba implementados, 100% de tests pasando',
            contribution: 'Valida la funcionalidad del código a nivel de unidad. Alcanzó el objetivo de cobertura mínima del 80% establecido en las mejoras.'
        },
        {
            name: 'ESLint / Prettier',
            icon: '✨',
            purpose: 'Linting y formateo automático de código',
            measures: 'Violaciones de estilo (0), código formateado automáticamente, consistencia del 100%',
            contribution: 'Implementa los estándares de codificación propuestos. Mantiene código uniforme y detecta errores comunes automáticamente.'
        },
        {
            name: 'Postman',
            icon: '📮',
            purpose: 'Pruebas de API y validación de contratos',
            measures: 'Tiempos de respuesta (120ms promedio), códigos de estado correctos (100%), validación de schemas',
            contribution: 'Verifica la funcionalidad y rendimiento de las interfaces de programación. Valida mejoras en tiempo de respuesta.'
        },
        {
            name: 'Docker',
            icon: '🐳',
            purpose: 'Contenedorización y entornos consistentes',
            measures: 'Consistencia de entornos (100%), tiempo de despliegue reducido (5 min)',
            contribution: 'Garantiza que desarrollo, staging y producción sean idénticos, eliminando el problema de "funciona en mi máquina".'
        }
    ];

    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">Herramientas de Evaluación Utilizadas</h2>
                <div className="intro-text">
                    <p>Las siguientes herramientas fueron utilizadas para implementar las mejoras técnicas propuestas y para verificar el cumplimiento de los estándares de calidad. Cada herramienta contribuye a un aspecto específico del proceso optimizado.</p>
                </div>
                <div className="tools-grid">
                    {tools.map((tool, index) => (
                        <div key={index} className="tool-card">
                            <div className="tool-icon-large">{tool.icon}</div>
                            <h3 className="tool-name">{tool.name}</h3>
                            <div className="tool-details">
                                <div className="tool-detail-item">
                                    <strong>Propósito:</strong>
                                    <p>{tool.purpose}</p>
                                </div>
                                <div className="tool-detail-item">
                                    <strong>Mide:</strong>
                                    <p>{tool.measures}</p>
                                </div>
                                <div className="tool-detail-item">
                                    <strong>Contribución:</strong>
                                    <p>{tool.contribution}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default EvaluationTools;