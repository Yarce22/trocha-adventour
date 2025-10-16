import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // 1. Extrae los datos del cuerpo de la petición
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      participants,
      route,
      date,
      message
    } = body;

    // 2. Valida que los datos necesarios estén presentes
    if (!fullName || !email || !message || !phone) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
    }

    // 3. Envía el correo usando Resend
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || "",
      to: process.env.CONTACT_EMAIL_TO || "",
      subject: `Nueva consulta de aventura de ${fullName}`,
      text: `
        Has recibido una nueva consulta:
        
        Nombre: ${fullName}
        Email: ${email}
        Teléfono: ${phone}
        Ruta de Interés: ${route || 'No especificada'}
        Fecha: ${date || 'No especificada'}
        Participantes: ${participants || 'No especificado'}
        
        Mensaje:
        ${message || 'No especificado'} 
      `,
    });

    // 4. Maneja posibles errores de Resend
    if (error) {
      console.error("Error desde Resend:", error);
      return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
    }

    // 5. Envía una respuesta exitosa
    return NextResponse.json({ message: 'Correo enviado exitosamente', data }, { status: 200 });

  } catch (err) {
    console.error("Error en el servidor:", err);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}