// Process Log Table Component
import React from 'react';

const ProcessLogTable = () => {
    const logs = [
        {
            fecha: '2025-01-22',
            proceso: 'Implementación GitFlow',
            actividad: 'Configuración del modelo de ramas',
            documentacion: 'Guía de uso de ramas y workflow',
            responsable: 'Tech Lead',
            resultado: 'Implementado'
        },
        {
            fecha: '2025-01-23',
            proceso: 'CI/CD Pipeline',
            actividad: 'Configuración de GitHub Actions',
            documentacion: 'Pipeline YAML y documentación',
            responsable: 'DevOps Team',
            resultado: 'Implementado'
        },
        {
            fecha: '2025-01-24',
            proceso: 'Estándares de código',
            actividad: 'Configuración de ESLint y Prettier',
            documentacion: 'Archivos de configuración',
            responsable: 'Equipo de desarrollo',
            resultado: 'Implementado'
        },
        {
            fecha: '2025-01-25',
            proceso: 'Análisis de código estático',
            actividad: 'Ejecución de SonarQube',
            documentacion: 'Reporte de calidad inicial',
            responsable: 'Equipo de QA',
            resultado: 'Aprobado'
        },
        {
            fecha: '2025-01-26',
            proceso: 'Pruebas unitarias',
            actividad: 'Implementación de suite de pruebas',
            documentacion: 'Casos de prueba y cobertura',
            responsable: 'Desarrolladores',
            resultado: 'Aprobado'
        },
        {
            fecha: '2025-01-27',
            proceso: 'Revisión de código',
            actividad: 'Peer review en pull requests',
            documentacion: 'Checklist de revisión',
            responsable: 'Tech Lead',
            resultado: 'Aprobado'
        },
        {
            fecha: '2025-01-28',
            proceso: 'Definition of Done',
            actividad: 'Validación de criterios',
            documentacion: 'Documento DoD actualizado',
            responsable: 'Scrum Master',
            resultado: 'Aprobado'
        },
        {
            fecha: '2025-01-29',
            proceso: 'Integración continua',
            actividad: 'Validación de merges automáticos',
            documentacion: 'Logs de CI/CD',
            responsable: 'DevOps Team',
            resultado: 'Aprobado'
        }
    ];

    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">Bitácora de los Procesos Documentales</h2>
                <div className="intro-text">
                    <p>Esta bitácora documenta todas las actividades realizadas durante la implementación de las mejoras propuestas y su posterior verificación de calidad. Cada entrada representa un hito clave en el proceso de optimización del desarrollo de software.</p>
                </div>
                <div className="table-wrapper">
                    <table className="process-table">
                        <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Proceso Evaluado</th>
                            <th>Actividad Realizada</th>
                            <th>Documentación Generada</th>
                            <th>Responsable</th>
                            <th>Resultado</th>
                        </tr>
                        </thead>
                        <tbody>
                        {logs.map((log, index) => (
                            <tr key={index}>
                                <td>{log.fecha}</td>
                                <td>{log.proceso}</td>
                                <td>{log.actividad}</td>
                                <td>{log.documentacion}</td>
                                <td>{log.responsable}</td>
                                <td>
                    <span className={`status ${log.resultado.toLowerCase()}`}>
                      {log.resultado}
                    </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
export default ProcessLogTable;