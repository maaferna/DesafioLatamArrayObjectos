document.addEventListener('DOMContentLoaded', ()=>{
    const consultasTraumatologia = [
       
    ];

    const consultasRadiologia = [
       
    ];

    const consultasDental = [
        
    ];

    // 1. Agregar horas al arreglo de Traumatología, utilizando el methods push
    consultasTraumatologia.push(
        {hora: "09:00", especialista: "RENÉ POBLETE", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE"},
        {hora: "09:30", especialista: "MARIA SOLAR", paciente: "RAMIRO ANDRADE", rut: "12221451-K", prevision: "FONASA"},
        {hora: "10:00", especialista: "RAUL LOYOLA", paciente: "CARMEN ISLA", rut: "10112348-3", prevision: "ISAPRE"},
        {hora: "10:30", especialista: "ANTONIO LARENAS", paciente: "PABLO LOAYZA", rut: "13453234-1", prevision: "ISAPRE"},
        {hora: "12:00", especialista: "MATIAS ARAVENA", paciente: "SUSANA POBLETE", rut: "14345656-6", prevision: "FONASA"}
    );

    console.log(consultasTraumatologia);


    // Función para generar la tabla con Bootstrap
    function generarTabla(consultas) {
        let tablaHTML = `
            <table id="traumatologiaTable" class="table table-hover">
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
      function toggleTableVisibility() {
        const tabla = document.getElementById('traumatologiaTable');
        if (tabla.style.display === 'none' || tabla.style.display === '') {
            tabla.style.display = 'table';
        } else {
            tabla.style.display = 'none';
        }
    }
   

    // Función para mostrar la tabla en el div con id "traumatologia"
    function mostrarConsultas() {
        const divTraumatologia = document.getElementById('traumatologia');
        divTraumatologia.innerHTML = generarTabla(consultasTraumatologia);
    }

    // Llama a la función para mostrar la tabla
    mostrarConsultas();

      // Agrega un evento click al botón para mostrar/ocultar la tabla
      const toggleButton = document.getElementById('toggleButton');
      toggleButton.addEventListener('click', toggleTableVisibility);
});
