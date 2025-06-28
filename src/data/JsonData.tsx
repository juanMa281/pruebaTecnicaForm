
export function TutorFormData() {
    return [
        {
            section: 'Datos generales',
            questions: [
                {
                    title: 'Confirma tu campus',
                    type: 'select',
                    required: true,
                    name: 'campus',
                    options: [
                        'Monterrey',
                        'León',
                        'Querétaro',
                        'Puebla',
                        'Sonora Norte',
                        'Ciudad Obregón',
                        'Guadalajara',
                        'TecMilenio',
                        'Santa Fe',
                        'Ciudad de México',
                        'Estado de México',
                        'Hidalgo',
                        'Toluca',
                        'Irapuato',
                        'Cuernavaca',
                        'San Luis Potosí'
                    ],
                },
                {
                    title: 'Nombre completo',
                    type: 'input',
                    required: true,
                    name: 'name'
                },
                {
                    title: 'Género',
                    type: 'select',
                    options: ['Mujer', 'Hombre', 'Otro'],
                    required: true,
                    name: 'gender'
                },
                {
                    title: '¿Cuántos años cumplidos tienes?',
                    type: 'number',
                    min: 14,
                    max: 30,
                    required: true,
                    name: 'age'
                },
                {
                    title: 'País de procedencia',
                    type: 'select',
                    options: getCountries(),
                    required: true,
                    name: 'country',
                },
                {
                    title: 'Entidad federativa de procedencia',
                    type: 'select',
                    options: [
                        'AGUASCALIENTES',
                        'BAJA CALIFORNIA',
                        'BAJA CALIFORNIA SUR',
                        'CAMPECHE',
                        'COAHUILA',
                        'COLIMA',
                        'CHIAPAS',
                        'CHIHUAHUA',
                        'CIUDAD DE MEXICO',
                        'DURANGO',
                        'GUANAJUATO',
                        'GUERRERO',
                        'HIDALGO',
                        'JALISCO',
                        'MEXICO',
                        'MICHOACAN',
                        'MORELOS',
                        'NAYARIT',
                        'NUEVO LEON',
                        'OAXACA',
                        'PUEBLA',
                        'QUERETARO',
                        'QUINTANA ROO',
                        'SAN LUIS POTOSI',
                        'SINALOA',
                        'SONORA',
                        'TABASCO',
                        'TAMAULIPAS',
                        'TLAXCALA',
                        'VERACRUZ',
                        'YUCATAN',
                        'ZACATECAS'
                    ],
                    required: true,
                    name: 'state'
                },
                {
                    title: 'Número telefónico de contacto',
                    type: 'input',
                    required: true,
                    name: 'phone'
                },
                {
                    title: 'Año de nacimiento',
                    type: 'number',
                    name: 'year',
                    min: 1980,
                    max: 2025,
                    required: false,
                },
                {
                    title: 'Mes de nacimiento',
                    type: 'number',
                    min: 1,
                    max: 12,
                    name: 'month',
                    required: false,
                },
                {
                    title: 'Día de nacimiento',
                    type: 'number',
                    min: 1,
                    max: 31,
                    name: 'day',
                    required: false,
                },
                {
                    title: 'CURP',
                    type: 'input',
                    required: true,
                    name: 'curp'
                }
            ]
        },
        {
            section: 'Datos generales confirmacion',
            validate: 1,
            questions: [
                {
                    title: 'Confirma tu campus',
                    type: 'select',
                    required: true,
                    name: 'campusvalid',
                    options: [
                        'Monterrey',
                        'León',
                        'Querétaro',
                        'Puebla',
                        'Sonora Norte',
                        'Ciudad Obregón',
                        'Guadalajara',
                        'TecMilenio',
                        'Santa Fe',
                        'Ciudad de México',
                        'Estado de México',
                        'Hidalgo',
                        'Toluca',
                        'Irapuato',
                        'Cuernavaca',
                        'San Luis Potosí'
                    ],
                },
            ]
        },
        {
            section: 'Trayectoria académica',
            questions: [
                {
                    title: '¿Cuál fue tu promedio final de bachillerato o preparatoria?',
                    type: 'number',
                    min: 6,
                    max: 10,
                    step: 0.1,
                    required: true,
                    name: 'grade'
                },
                {
                    title: '¿Qué carrera estudias?',
                    type: 'select',
                    required: true,
                    name: 'career',
                    options: getCareers()
                },
                {
                    title: '¿Cuántos semestres has cursados en el Tec?',
                    type: 'number',
                    required: true,
                    name: 'semesters',
                    min: 1,
                    max: 14,
                    step: 1
                },
                {
                    title: '¿Cuál es tu promedio acumulado en tu carrera profesional en el Tec?',
                    type: 'number',
                    min: 6,
                    max: 10,
                    step: 0.1,
                    required: true,
                    name: 'accumulated_grade'
                },
                {
                    title: '¿Tienes algún tipo de beca o apoyo financiero como alumno del Tec?',
                    type: 'select',
                    options: [
                        'Líderes del mañana',
                        'Talento académico',
                        'Hijo/a empleado/a TEC',
                        'Beca préstamo',
                        'Beca de extranjero',
                        'Deportiva',
                        'Liderazgo o emprendedor@',
                        'Cultural',
                        'Otro',
                        'No, ninguna beca',
                    ],
                    required: true,
                    name: 'scholarship'
                }
                , {
                    title: '¿Cuál es el nivel máximo de estudios que esperas alcanzar?',
                    type: 'select',
                    options: [
                        'Licenciatura',
                        'Especialidad',
                        'Maestría',
                        'Doctorado'
                    ],
                    required: true,
                    name: 'max_study'
                },
                {
                    title: '¿Cuántos libros hay en tu casa? (No incluyas revistas, periódicos o libros de inputo)',
                    type: 'select',
                    options: [
                        'Ninguno',
                        '1 a 10',
                        '11 a 25',
                        '26 a 50',
                        '51 a 100',
                        '101 a 200',
                        '201 a 500',
                        'Más de 500'
                    ],
                    required: true,
                    name: 'books_at_home'
                },
            ]
        }, {
            section: 'Expectativas del servicio social',
            questions: [
                {
                    title: '¿Qué resultados esperas obtener con tu participación en este programa de tutorías académicas?',
                    type: 'input',
                    required: true,
                    name: 'results'
                },
                {
                    title: '¿Cuál es tu motivación para querer ingresar a este proyecto de servicio social? ',
                    type: 'input',
                    required: true,
                    name: 'motive'
                },
                {
                    title: '¿Qué impacto crees que pueden tener en otras personas tus actividades de servicio social?',
                    type: 'input',
                    required: true,
                    name: 'impact'
                },
                {
                    title: '¿Tienes experiencia impartiendo clases o tutorías académicas? ',
                    type: 'select',
                    options: [
                        'Sí, de manera formal',
                        'Sí, de manera informal',
                        'No, ninguna'
                    ],
                    required: true,
                    name: 'experience'
                },
                {
                    title: 'Además del servicio social, ¿realizas alguna actividad co-curricular?',
                    type: 'select',
                    options: [
                        'Sí, deportiva',
                        'Sí, cultural',
                        'Sí, de liderazgo o voluntariado',
                        'Todas las anteriores',
                        'Otra',
                        'No realizó alguna actividad',
                    ],
                    required: true,
                    name: 'cocurricular_activity'
                },
                {
                    title: '¿Trabajas o realizas prácticas profesionales?',
                    type: 'select',
                    options: [
                        'Sí',
                        'No'
                    ],
                    required: true,
                    name: 'work'
                }
            ]
        },
        {
            section: `Horarios`,
            questions: [
                {
                    title: `Horario comunicación`,
                    type: 'select',
                    options: [
                        'Entre semana matutino',
                        'Entre semana vespertino',
                        'Sábado matutino',
                        'Sábado vespertino',
                    ],
                    required: true,
                    name: 'schedule_comm'
                },
                {
                    title: `Horario Matemáticas`,
                    type: 'select',
                    options: [
                        'Entre semana matutino',
                        'Entre semana vespertino',
                        'Sábado matutino',
                        'Sábado vespertino',
                    ],
                    required: true,
                    name: 'schedule_math'
                },
            ]
        }
        , {
            section: "Inscripción a la plataforma de cursos",
            questions: [
                {
                    title: 'Correo electrónico',
                    type: 'email',
                    required: true,
                    name: 'email'
                },
                {
                    title: 'Crea una nueva contraseña',
                    type: 'password',
                    required: true,
                    name: 'password',
                    min: 8
                },
                {
                    title: 'Valida tu contraseña',
                    type: 'password',
                    required: true,
                    name: 'valid_password',
                    min: 8
                },
                {
                    title: 'Autorizo ser contactado por medio del correo o teléfono proporcionados ',
                    options: ['Sí'],
                    type: 'checkbox',
                    required: false,
                    name: 'authorize'
                },
            ]
        }
    ];
}

function getCareers() {
    return ["Arquitecto entrando por Ambiente Construido",
        "Arquitecto entrando por Estudios Creativos",
        "Bachelor in Global Business",
        "Ingeniero Biomédico",
        "Ingeniero Civil entrando por Ambiente Construido",
        "Ingeniero Civil entrando por Ingeniería-Innovación y Transformación",
        "Ingeniero en Alimentos",
        "Ingeniero en Biosistemas Agroalimentarios",
        "Ingeniero en Biotecnología",
        "Ingeniero en Ciencia de Datos y Matemáticas",
        "Ingeniero en Desarrollo Sustentable",
        "Ingeniero en Electrónica",
        "Ingeniero en Innovación y Desarrollo",
        "Ingeniero en Mecatrónica",
        "Ingeniero en Nanotecnología",
        "Ingeniero en Robótica y Sistemas Digitales",
        "Ingeniero en Tecnologías Computacionales",
        "Ingeniero en Transformación Digital de Negocios",
        "Ingeniero Físico Industrial",
        "Ingeniero Industrial y de Sistemas",
        "Ingeniero Mecánico",
        "Ingeniero Químico",
        "Licenciado en Arte Digital",
        "Licenciado en Biociencias",
        "Licenciado en Comunicación",
        "Licenciado en Contaduría Pública y Finanzas",
        "Licenciado en Derecho",
        "Licenciado en Desarrollo de Talento y Cultura Organizacional",
        "Licenciado en Diseño",
        "Licenciado en Economía",
        "Licenciado en Emprendimiento",
        "Licenciado en Estrategia y Transformación de Negocios",
        "Licenciado en Finanzas",
        "Licenciado en Gobierno y Transformación Pública",
        "Licenciado en Innovación Educativa",
        "Licenciado en Inteligencia de Negocios",
        "Licenciado en Letras Hispánicas",
        "Licenciado en Mercadotecnia",
        "Licenciado en Negocios Internacionales",
        "Licenciado en Nutrición y Bienestar Integral",
        "Licenciado en Periodismo",
        "Licenciado en Psicología Clínica y de la Salud",
        "Licenciado en Relaciones Internacionales",
        "Licenciado en Tecnología y Producción Musical",
        "Licenciado en Urbanismo",
        "Médico Cirujano",
        "Médico Cirujano Odontólogo",
        "Otro"];
}

function getCountries() {
    return ["México", "Afganistán", "Albania", "Alemania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua y Barbuda", "Antillas Holandesas", "Arabia Saudita", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bahrein", "Bangladesh", "Barbados", "Bélgica", "Belice", "Benín", "Bermudas", "Bielorrusia", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Chad", "Chile", "China", "Chipre", "Colombia", "Comores", "Congo (Brazzaville)", "Congo (Kinshasa)", "Cook, Islas", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Djibouti, Yibuti", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Feroe, Islas", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Gibraltar", "Granada", "Grecia", "Groenlandia", "Guadalupe", "Guatemala", "Guernsey", "Guinea", "Guinea Ecuatorial", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Isla Pitcairn", "Islandia", "Islas Salomón", "Islas Turcas y Caicos", "Islas Virgenes Británicas", "Israel", "Italia", "Jamaica", "Japón", "Jersey", "Jordania", "Kazajstán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesotho", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Macedonia", "Madagascar", "Malasia", "Malawi", "Maldivas", "Malí", "Malta", "Man, Isla de", "Marruecos", "Martinica", "Mauricio", "Mauritania", "México", "Moldavia", "Mónaco", "Mongolia", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Norfolk Island", "Noruega", "Nueva Caledonia", "Nueva Zelanda", "Omán", "Países Bajos, Holanda", "Pakistán", "Panamá", "Papúa-Nueva Guinea", "Paraguay", "Perú", "Polinesia Francesa", "Polonia", "Portugal", "Puerto Rico", "Qatar", "Reino Unido", "República Checa", "República Dominicana", "Reunión", "Ruanda", "Rumanía", "Rusia", "Sáhara Occidental", "Samoa", "San Cristobal y Nevis", "San Marino", "San Pedro y Miquelón", "San Tomé y Príncipe", "San Vincente y Granadinas", "Santa Elena", "Santa Lucía", "Senegal", "Serbia y Montenegro", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Sudáfrica", "Sudán", "Suecia", "Suiza", "Surinam", "Swazilandia", "Tadjikistan", "Tailandia", "Taiwan", "Tanzania", "Timor Oriental", "Togo", "Tokelau", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistan", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Wallis y Futuna", "Yemen", "Zambia", "Zimbabwe"]
}

