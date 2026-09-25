/**
 * Cloudflare Pages Middleware
 * Redirects www.forgeandflightacademy.com -> forgeandflightacademy.com (301)
 */
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  if (url.hostname === 'www.forgeandflightacademy.com') {
    url.hostname = 'forgeandflightacademy.com';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
