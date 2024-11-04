'use server';

import { cookies } from 'next/headers';
import { v4 as uuidv4 } from 'uuid';

export async function getAnonToken() {
  const cookieStore = await cookies();
  const anonToken = cookieStore.get('anon-token')?.value;

  if (!anonToken) {
    const newToken = uuidv4();
    cookieStore.set('anon-token', newToken, {
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // e.g., 1 week
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    return newToken;
  }

  return anonToken;
}
