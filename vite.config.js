import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import verifyHandler from './api/verify-code.js';
import validateHandler from './api/validate-session.js';
import generateHandler from './api/generate-code.js';
import codesHandler from './api/codes.js';
import statsHandler from './api/stats.js';

function vercelDevApiPlugin() {
  return {
    name: 'vercel-dev-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, 'http://localhost');
        const pathname = url.pathname;

        if (!pathname.startsWith('/api/')) {
          return next();
        }

        // Helper to format res.status().json()
        res.status = (statusCode) => {
          res.statusCode = statusCode;
          return res;
        };
        res.json = (data) => {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(data));
          return res;
        };

        // Parse query params
        req.query = Object.fromEntries(url.searchParams.entries());

        // Parse JSON body for POST
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            try {
              req.body = body ? JSON.parse(body) : {};
            } catch {
              req.body = {};
            }
            routeApi(pathname, req, res, next);
          });
        } else {
          routeApi(pathname, req, res, next);
        }
      });
    }
  };
}

function routeApi(pathname, req, res, next) {
  if (pathname === '/api/verify-code') return verifyHandler(req, res);
  if (pathname === '/api/validate-session') return validateHandler(req, res);
  if (pathname === '/api/generate-code') return generateHandler(req, res);
  if (pathname === '/api/codes') return codesHandler(req, res);
  if (pathname === '/api/stats') return statsHandler(req, res);
  next();
}

export default defineConfig({
  plugins: [react(), vercelDevApiPlugin()],
  server: {
    port: 3000,
    open: true
  }
});
