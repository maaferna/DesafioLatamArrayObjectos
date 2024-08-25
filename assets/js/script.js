document.addEventListener('DOMContentLoaded', () => {
    const consultasTraumatologia = [];
    const consultasRadiologia = [
        {hora: "08:00", especialista: "DR. JUAN PÉREZ", paciente: "ANA GÓMEZ", rut: "12345678-9", prevision: "ISAPRE"},
        {hora: "08:30", especialista: "DR. LUIS RAMÍREZ", paciente: "CARLOS SÁNCHEZ", rut: "98765432-1", prevision: "FONASA"},
        {hora: "09:00", especialista: "DRA. MARÍA LOPEZ", paciente: "JUAN HERNÁNDEZ", rut: "11122333-4", prevision: "ISAPRE"},
        {hora: "09:30", especialista: "DR. PEDRO CASTILLO", paciente: "LUCÍA MUÑOZ", rut: "22233444-5", prevision: "FONASA"},
        {hora: "10:00", especialista: "DRA. ELENA FUENTES", paciente: "MIGUEL ÁLVAREZ", rut: "55566777-8", prevision: "ISAPRE"},
        {hora: "10:30", especialista: "DR. FRANCISCO MORALES", paciente: "SARA PARRA", rut: "33344555-6", prevision: "FONASA"},
        {hora: "11:00", especialista: "DRA. CARMEN SOTO", paciente: "PABLO DIAZ", rut: "44455667-7", prevision: "ISAPRE"}
    ];
    const consultasDental = [];

    // 1. Agregar horas al arreglo de Traumatología, utilizando el método push
    consultasTraumatologia.push(
        {hora: "09:00", especialista: "RENÉ POBLETE", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE"},
        {hora: "09:30", especialista: "MARIA SOLAR", paciente: "RAMIRO ANDRADE", rut: "12221451-K", prevision: "FONASA"},
        {hora: "10:00", especialista: "RAUL LOYOLA", paciente: "CARMEN ISLA", rut: "10112348-3", prevision: "ISAPRE"},
        {hora: "10:30", especialista: "ANTONIO LARENAS", paciente: "PABLO LOAYZA", rut: "13453234-1", prevision: "ISAPRE"},
        {hora: "12:00", especialista: "MATIAS ARAVENA", paciente: "SUSANA POBLETE", rut: "14345656-6", prevision: "FONASA"}
    );

    // Eliminar el primer y último elemento del arreglo de Radiología
    consultasRadiologia.shift(); // Elimina el primer elemento
    consultasRadiologia.pop(); // Elimina el último elemento

    // Función para generar la tabla con Bootstrap
    function generarTabla(consultas, tableId) {
        let tablaHTML = `
            <table id="${tableId}" class="table table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th>Hora</th>
                        <th>Especialista</th>
                        <th>Paciente</th>
                        <th>RUT</th>
                        <th>Previsión</th>
                    </tr>
                </thead>
                <tbody>
        `;

        consultas.forEach(consulta => {
            tablaHTML += `
                <tr>
                    <td>${consulta.hora}</td>
                    <td>${consulta.especialista}</td>
                    <td>${consulta.paciente}</td>
                    <td>${consulta.rut}</td>
                    <td>${consulta.prevision}</td>
                </tr>
            `;
        });

        tablaHTML += `
                </tbody>
            </table>
            <p class="mt-3 font-weight-bold">Total de consultas: ${consultas.length}</p>
        `;

        return tablaHTML;
    }

    // Función para alternar la visibilidad de la tabla
    function toggleTableVisibility(tableId) {
        const tabla = document.getElementById(tableId);
        if (tabla.style.display === 'none' || tabla.style.display === '') {
            tabla.style.display = 'table';
        } else {
            tabla.style.display = 'none';
        }
    }

    // Función para mostrar la tabla en el div con el ID proporcionado
    function mostrarConsultas(consultas, divId, tableId) {
        const divElement = document.getElementById(divId);
        divElement.innerHTML = generarTabla(consultas, tableId);
    }

    // Mostrar la tabla de Traumatología
    mostrarConsultas(consultasTraumatologia, 'traumatologia', 'traumatologiaTable');

    // Mostrar la tabla de Radiología
    mostrarConsultas(consultasRadiologia, 'radiologia', 'radiologiaTable');

    // Agregar un evento click al botón para mostrar/ocultar la tabla de Traumatología
    const toggleTraumatologiaButton = document.getElementById('toggleTraumatologiaButton');
    toggleTraumatologiaButton.addEventListener('click', () => {
        toggleTableVisibility('traumatologiaTable');
    });

    // Agregar un evento click al botón para mostrar/ocultar la tabla de Radiología
    const toggleRadiologiaButton = document.getElementById('toggleRadiologiaButton');
    toggleRadiologiaButton.addEventListener('click', () => {
        toggleTableVisibility('radiologiaTable');
    });
});
