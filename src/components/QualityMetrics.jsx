import React from 'react';

const QualityMetrics = () => {
    const characteristics = [
        {
            name: 'Mantenibilidad',
            subcharacteristics: [
                { name: 'Modularidad', description: 'Código organizado en componentes independientes con responsabilidades claras' },
                { name: 'Analizabilidad', description: 'Facilidad mejorada para diagnosticar deficiencias mediante herramientas de análisis estático' },
                { name: 'Modificabilidad', description: 'Capacidad incrementada para implementar cambios sin afectar otras partes del sistema' },
                { name: 'Pruebas', description: 'Cobertura de pruebas del 85% facilita la validación continua del software' }
            ]
        },
        {
            name: 'Fiabilidad',
            subcharacteristics: [
                { name: 'Madurez', description: 'Reducción significativa de defectos críticos mediante pruebas automatizadas' },
                { name: 'Tolerancia a fallos', description: 'Sistema capaz de mantener operación ante errores mediante validaciones robustas' }
            ]
        },
        {
            name: 'Eficiencia del Desempeño',
            subcharacteristics: [
                { name: 'Comportamiento temporal', description: 'Tiempo de respuesta promedio optimizado a 120ms' },
                { name: 'Utilización de recursos', description: 'Uso eficiente de memoria y CPU mediante código optimizado' }
            ]
        }
    ];

    const metrics = [
        { name: 'Complejidad ciclomática', value: '< 10', status: 'good', improvement: 'Reducida de 15 a <10' },
        { name: 'Cobertura de pruebas', value: '85%', status: 'good', improvement: 'Incrementada de 40% a 85%' },
        { name: 'Duplicación de código', value: '2.3%', status: 'good', improvement: 'Reducida de 12% a 2.3%' },
        { name: 'Tiempo de respuesta', value: '120ms', status: 'good', improvement: 'Mejorado de 250ms a 120ms' },
        { name: 'Defectos críticos', value: '0', status: 'excellent', improvement: 'Reducidos de 8 a 0' },
        { name: 'Code smells', value: '12', status: 'warning', improvement: 'Reducidos de 47 a 12' }
    ];

    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">Características y Métricas de Calidad (ISO 25010)</h2>

                <div className="intro-text">
                    <p>Las siguientes características de calidad fueron evaluadas conforme a la norma ISO/IEC 25010. Los resultados muestran mejoras significativas en todas las áreas después de implementar los cambios propuestos en el proceso de desarrollo.</p>
                </div>

                <div className="characteristics-container">
                    <h3 className="subsection-title">Características Evaluadas</h3>
                    {characteristics.map((char, index) => (
                        <div key={index} className="characteristic-block">
                            <h4 className="characteristic-name">{char.name}</h4>
                            <div className="subcharacteristics-grid">
                                {char.subcharacteristics.map((sub, idx) => (
                                    <div key={idx} className="subcharacteristic-item">
                                        <strong>{sub.name}:</strong> {sub.description}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="metrics-container">
                    <h3 className="subsection-title">Métricas Obtenidas y Comparativa</h3>
                    <div className="metrics-grid">
                        {metrics.map((metric, index) => (
                            <div key={index} className="metric-card">
                                <div className="metric-name">{metric.name}</div>
                                <div className={`metric-value ${metric.status}`}>{metric.value}</div>
                                <p style={{fontSize: '0.85rem', color: '#718096', marginTop: '10px'}}>{metric.improvement}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default QualityMetrics;