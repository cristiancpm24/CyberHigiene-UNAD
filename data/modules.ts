
import { LearningModule, ModuleId } from '../types';

export const MODULES: Record<ModuleId, LearningModule> = {
  [ModuleId.PASSWORDS]: {
    id: ModuleId.PASSWORDS,
    title: "Gestión de Contraseñas",
    description: "Aprende a crear claves robustas y gestionarlas de forma segura para evitar intrusiones.",
    imageUrl: "https://images.unsplash.com/photo-1614064641938-3e8216d1db2d?q=80&w=800&auto=format&fit=crop",
    iconName: "KeyRound",
    content: {
      intro: "Las contraseñas son la primera línea de defensa contra el acceso no autorizado a tu información personal y académica.",
      sections: [
        {
          title: "Longitud y Complejidad",
          body: "Una contraseña segura debe tener al menos 12 caracteres e incluir una combinación de letras mayúsculas, minúsculas, números y símbolos. Evita palabras comunes o datos personales como fechas de nacimiento."
        },
        {
          title: "No Reutilización",
          body: "Nunca utilices la misma contraseña para diferentes servicios. Si un atacante descubre tu contraseña de una red social, podría intentar usarla en tu correo institucional o bancario."
        },
        {
          title: "Autenticación de Doble Factor (2FA)",
          body: "Siempre que sea posible, activa el 2FA. Esto añade una capa extra de seguridad al requerir un código temporal enviado a tu móvil, además de tu contraseña."
        }
      ]
    },
    questions: [
      { id: 1, question: "¿Cuál es la longitud mínima recomendada para una contraseña segura?", options: ["6 caracteres", "8 caracteres", "12 caracteres", "4 caracteres"], correctAnswerIndex: 2, explanation: "12 caracteres ofrecen una entropía suficiente para resistir ataques de fuerza bruta modernos." },
      { id: 2, question: "¿Qué elementos debe contener una contraseña robusta?", options: ["Solo letras", "Letras y números", "Letras, números y símbolos", "Fecha de cumpleaños"], correctAnswerIndex: 2, explanation: "La variedad de caracteres aumenta exponencialmente la dificultad de adivinar la clave." },
      { id: 3, question: "¿Es seguro anotar las contraseñas en un post-it en el monitor?", options: ["Sí, para no olvidarlas", "No, es un riesgo físico", "Solo si está en clave", "Sí, si nadie entra a la oficina"], correctAnswerIndex: 1, explanation: "Las contraseñas no deben estar visibles físicamente." },
      { id: 4, question: "¿Qué es el 2FA?", options: ["Dos Facturas Anuales", "Autenticación de Doble Factor", "2 Formas de Acceso", "Doble Archivo"], correctAnswerIndex: 1, explanation: "El 2FA añade una capa extra de seguridad." },
      { id: 5, question: "¿Por qué no debo usar '123456'?", options: ["Es muy larga", "Es difícil de recordar", "Es la contraseña más común y fácil de hackear", "Es un número primo"], correctAnswerIndex: 2, explanation: "Es la contraseña más insegura del mundo." },
      { id: 6, question: "¿Con qué frecuencia se recomienda cambiar contraseñas críticas?", options: ["Nunca", "Cada 10 años", "Cada 3-6 meses o ante sospecha de brecha", "Cada día"], correctAnswerIndex: 2, explanation: "La rotación periódica reduce el riesgo si una clave ha sido comprometida." },
      { id: 7, question: "¿Qué es un gestor de contraseñas?", options: ["Una persona que las anota", "Un software cifrado para almacenar claves", "Un virus", "Una hoja de excel"], correctAnswerIndex: 1, explanation: "Los gestores permiten usar claves complejas sin tener que memorizarlas todas." },
      { id: 8, question: "¿Es seguro usar el nombre de mi mascota como clave?", options: ["Sí, es lindo", "No, es ingeniería social básica", "A veces", "Si la mascota es secreta"], correctAnswerIndex: 1, explanation: "Datos personales son fáciles de adivinar mediante ingeniería social." },
      { id: 9, question: "¿Debo compartir mi contraseña con soporte técnico?", options: ["Sí, si me la piden", "Solo si es el jefe", "Jamás, ni siquiera con soporte", "Si es urgente"], correctAnswerIndex: 2, explanation: "Ninguna entidad legítima te pedirá tu contraseña por correo o teléfono." },
      { id: 10, question: "¿Qué técnica usan los hackers para probar todas las combinaciones posibles?", options: ["Phishing", "Fuerza Bruta", "SQL Injection", "Ransomware"], correctAnswerIndex: 1, explanation: "La fuerza bruta prueba combinaciones hasta dar con la correcta." }
    ]
  },
  [ModuleId.PHISHING]: {
    id: ModuleId.PHISHING,
    title: "Prevención de Phishing",
    description: "Detecta correos y mensajes fraudulentos diseñados para robar tus credenciales.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    iconName: "MailWarning",
    content: {
      intro: "El phishing es una técnica de ingeniería social utilizada por ciberdelincuentes para obtener información confidencial como nombres de usuario, contraseñas y detalles de tarjetas de crédito.",
      sections: [
        {
          title: "Verifica el Remitente",
          body: "No confíes solo en el nombre que aparece. Revisa la dirección de correo electrónico real. Ejemplo: soporte@unad-edu.com no es lo mismo que soporte@unad.edu.co."
        },
        {
          title: "Sentido de Urgencia",
          body: "Los ataques de phishing suelen crear una falsa sensación de urgencia (ej: 'Tu cuenta será bloqueada en 24 horas') para que actúes sin pensar."
        },
        {
          title: "Enlaces Sospechosos",
          body: "Antes de hacer clic, pasa el cursor sobre el enlace para ver la URL real de destino. Si no coincide con el sitio oficial, no entres."
        }
      ]
    },
    questions: [
      { id: 1, question: "¿Qué busca principalmente el phishing?", options: ["Likes en redes", "Robar información confidencial", "Instalar juegos", "Mejorar tu wifi"], correctAnswerIndex: 1, explanation: "Buscan credenciales o datos financieros." },
      { id: 2, question: "¿Qué debes revisar primero en un correo sospechoso?", options: ["La firma", "El remitente real", "El asunto", "La hora"], correctAnswerIndex: 1, explanation: "La dirección del remitente suele revelar el fraude." },
      { id: 3, question: "¿Qué es el sentido de urgencia en phishing?", options: ["Responder rápido por educación", "Táctica para precipitar al usuario a cometer errores", "Un servicio premium", "Velocidad de internet"], correctAnswerIndex: 1, explanation: "El miedo y la urgencia bloquean el pensamiento crítico." },
      { id: 4, question: "¿Es seguro abrir adjuntos de desconocidos?", options: ["Sí, siempre", "No, pueden contener malware", "Solo si son PDF", "Solo si son ZIP"], correctAnswerIndex: 1, explanation: "Los adjuntos son vectores comunes de infección." },
      { id: 5, question: "¿Qué significa el candado en el navegador?", options: ["Que el sitio es seguro al 100%", "Que la conexión está cifrada (HTTPS)", "Que no hay virus", "Que es un sitio del gobierno"], correctAnswerIndex: 1, explanation: "Indica cifrado, pero un sitio de phishing también puede tener HTTPS hoy en día." },
      { id: 6, question: "¿Un banco te pedirá tu clave por email?", options: ["Nunca", "A veces", "Solo si bloquean la cuenta", "Sí, para verificar"], correctAnswerIndex: 0, explanation: "Las instituciones legítimas no piden claves por canales inseguros." },
      { id: 7, question: "¿Qué es el Smishing?", options: ["Phishing por SMS", "Phishing por email", "Phishing por voz", "Un pez pequeño"], correctAnswerIndex: 0, explanation: "Es la variante de phishing a través de mensajes de texto." },
      { id: 8, question: "¿A dónde debo reportar un correo de phishing en la UNAD?", options: ["A nadie", "Al remitente", "Al área de TI o Seguridad Informática", "A la policía local"], correctAnswerIndex: 2, explanation: "Reportar ayuda a bloquear el ataque para otros usuarios." },
      { id: 9, question: "Si caí en un phishing, ¿qué hago primero?", options: ["Llorar", "Cambiar mis contraseñas inmediatamente", "Borrar el correo", "Apagar el PC"], correctAnswerIndex: 1, explanation: "Cambiar credenciales limita el acceso del atacante." },
      { id: 10, question: "¿La ortografía mala es señal de phishing?", options: ["No tiene nada que ver", "Sí, es un indicador común", "Solo en inglés", "No, los hackers escriben perfecto"], correctAnswerIndex: 1, explanation: "Muchos ataques son masivos y traducidos automáticamente, conteniendo errores." }
    ]
  },
  [ModuleId.WIFI]: {
    id: ModuleId.WIFI,
    title: "Seguridad en Redes Wi-Fi",
    description: "Navega seguro en redes públicas y configura correctamente tu red doméstica.",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?q=80&w=800&auto=format&fit=crop",
    iconName: "Wifi",
    content: {
      intro: "Las redes Wi-Fi, especialmente las públicas, son canales donde la información puede ser interceptada fácilmente si no se toman precauciones.",
      sections: [
        {
          title: "Riesgos de Wi-Fi Público",
          body: "En cafeterías o aeropuertos, las redes abiertas permiten a atacantes interceptar el tráfico (Man-in-the-Middle). Evita acceder a bancos o correo institucional en estas redes."
        },
        {
          title: "Uso de VPN",
          body: "Si debes usar una Wi-Fi pública, utiliza una VPN (Red Privada Virtual). Esto cifra tu conexión, haciendo ilegible tu información para cualquiera que intente espiarla."
        },
        {
          title: "HTTPS Siempre",
          body: "Asegúrate de que los sitios web que visitas comiencen con 'https://'. Esto garantiza que la comunicación entre tu dispositivo y el servidor está cifrada."
        }
      ]
    },
    questions: [
      { id: 1, question: "¿Es seguro realizar transacciones bancarias en Wi-Fi público?", options: ["Sí, totalmente", "No, es altamente riesgoso", "Solo si es en un aeropuerto", "Sí, si es de día"], correctAnswerIndex: 1, explanation: "El tráfico puede ser interceptado." },
      { id: 2, question: "¿Qué herramienta protege mis datos en una red pública?", options: ["Antivirus", "VPN", "Firewall", "Modo incógnito"], correctAnswerIndex: 1, explanation: "La VPN cifra el tráfico de extremo a extremo." },
      { id: 3, question: "¿Qué significa que una red sea 'abierta'?", options: ["Que es gratis", "Que no requiere contraseña para conectarse", "Que es muy rápida", "Que abre 24 horas"], correctAnswerIndex: 1, explanation: "Al no tener contraseña/cifrado, la información viaja en texto plano a menudo." },
      { id: 4, question: "¿Qué protocolo de cifrado es obsoleto e inseguro para Wi-Fi?", options: ["WPA2", "WPA3", "WEP", "AES"], correctAnswerIndex: 2, explanation: "WEP es muy fácil de romper hoy en día." },
      { id: 5, question: "¿El modo incógnito me protege en el Wi-Fi?", options: ["Sí", "No, solo evita guardar historial local", "Protege de virus", "Oculta mi IP"], correctAnswerIndex: 1, explanation: "El administrador de la red aún puede ver tu tráfico." },
      { id: 6, question: "¿Qué es un ataque Man-in-the-Middle?", options: ["Un virus en el medio del disco", "Alguien interceptando comunicación entre dos partes", "Un cable roto", "Un error de router"], correctAnswerIndex: 1, explanation: "Es común en redes Wi-Fi no seguras." },
      { id: 7, question: "¿Debo mantener el Wi-Fi encendido si no lo uso?", options: ["Sí, ahorra batería", "No, mejor apagarlo para evitar conexiones automáticas inseguras", "Da igual", "Sí, para geolocalización"], correctAnswerIndex: 1, explanation: "Evita que tu dispositivo se conecte a redes trampa conocidas." },
      { id: 8, question: "¿Cómo sé si una web cifra la información?", options: ["Tiene muchos colores", "Usa HTTPS y un candado", "Carga rápido", "Dice 'Seguro' en el texto"], correctAnswerIndex: 1, explanation: "HTTPS asegura el canal de comunicación." },
      { id: 9, question: "¿Es seguro usar el Wi-Fi del vecino sin permiso?", options: ["Sí, es ahorro", "No, y puede ser ilegal", "Solo para videos", "Sí, si él no sabe"], correctAnswerIndex: 1, explanation: "Además de ético/legal, no sabes si la red está comprometida." },
      { id: 10, question: "¿Qué es un Hotspot falso?", options: ["Un punto de calor", "Una red creada por atacantes imitando una legítima", "Un router roto", "Una app de clima"], correctAnswerIndex: 1, explanation: "Los hackers crean redes 'Wi-Fi Gratis' para robar datos." }
    ]
  }
};
