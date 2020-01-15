import Router from 'next/router';
import cookies from 'next-cookies';

export const serverUrl = 'http://localhost:3001';

function getToken(context) {
  const cookieToken = cookies(context).token;

  if (cookieToken) return cookieToken;

  if (context.req) {
    if (!context.req.headers) return;

    if (!context.req.headers.cookie) return;

    return context.req.headers.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
  }
}

export function handleAuthSsr(context) {
  const token = getToken(context);

  if (!token) {
    if (context.res) {
      context.res.writeHead(302, {
        Location: '/login',
      });
      context.res.end();
    } else {
      Router.push('/login');
    }
  }

  return { token };
}
