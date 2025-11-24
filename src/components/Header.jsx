// Header Component
import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="main-title">Verificación de las Condiciones de Calidad del Producto de Software Ajustado</h1>
                <p className="subtitle">Informe de verificación del producto de software después de aplicar los ajustes del proceso de desarrollo y codificación propuestos en la fase de optimización</p>
                <div className="context-banner">
                    <p><strong>Contexto:</strong> Este informe documenta la verificación de calidad realizada después de implementar las mejoras operativas y técnicas definidas en el proyecto de "Optimización del Proceso de Desarrollo de Software".</p>
                    <p><strong>Objetivo:</strong> Validar que los cambios implementados (GitFlow, CI/CD, peer review, pruebas unitarias, estándares de código) cumplan con los criterios de calidad establecidos bajo ISO 25010.</p>
                </div>
            </div>
        </header>
    );
};
export default Header;