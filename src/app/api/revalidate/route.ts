// app/api/revalidate/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  // 1. Extrae el token secreto de los parámetros de búsqueda
  const secret = request.nextUrl.searchParams.get('secret');

  // 2. Verifica que el token secreto coincida con tu variable de entorno
  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  // 3. Extrae la etiqueta o la ruta del cuerpo de la petición (enviada por Contentful)
  const body = await request.json();
  const tag = body.tag; // Suponiendo que envías un 'tag'
  const path = body.path; // O puedes enviar una 'path' específica

  try {
    if (tag) {
      // Revalida el caché para una etiqueta específica (más eficiente)
      revalidateTag(tag);
      return NextResponse.json({ revalidated: true, tag: tag, now: Date.now() });
    } else if (path) {
      // Revalida el caché para una ruta específica
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, path: path, now: Date.now() });
    } else {
      // Si no se especifica, puedes revalidar toda la página como un fallback
      revalidatePath('/');
      return NextResponse.json({ revalidated: true, path: '/', now: Date.now() });
    }
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating', error: err }, { status: 500 });
  }
}
