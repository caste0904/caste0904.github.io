function procesar() {
    const nombre1 = document.getElementById('nom1').value;
    const nombre2 = document.getElementById('nom2').value;
    const apellido1 = document.getElementById('ap1').value;
    const apellido2 = document.getElementById('ap2').value;
    const dni = document.getElementById('dni').value;
    const fecha = document.getElementById('fech').value;
    const nombrecom = `${nombre1} ${nombre2} ${apellido1} ${apellido2}`;
    const ultimoDigitoDNI = dni.charAt(dni.length - 1);
    const fechaNacimiento = new Date(fecha);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    document.getElementById('nomc').value = nombrecom;
    document.getElementById('ultd').value = ultimoDigitoDNI;
    document.getElementById('edadact').value = edad;
}
