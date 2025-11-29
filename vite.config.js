import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'

// API Configuration - Usar variables de entorno
//const API_BASE_URL = process.env.VITE_BACKEND_API_URL || 'http://localhost:9543'
const API_BASE_URL = process.env.VITE_BACKEND_API_URL || 'http://localhost:4007'

// Proxy Configuration
const proxyConfig = {
  changeOrigin: true,
  secure: false,
  timeout: 10000,
  proxyTimeout: 10000,
  // Handle proxy errors gracefully
  onError: (err, req, res) => {
    console.error(`❌ Proxy error for ${req.url}:`, err.message);
    console.error(`   Target: ${API_BASE_URL}`);
    console.error(`   Method: ${req.method}`);
    
    res.writeHead(500, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify({ 
      success: false, 
      error: 'Error connecting to backend server',
      details: `Backend not available at ${API_BASE_URL}`
    }));
  },
  // Log successful proxies for debugging
  onProxyReq: (proxyReq, req, res) => {
    console.log(`🔄 Proxying: ${req.method} ${req.url} → ${API_BASE_URL}${req.url}`);
  },
  onProxyRes: (proxyRes, req, res) => {
    console.log(`✅ Proxy response: ${proxyRes.statusCode} ${req.method} ${req.url}`);
  }
}

// Enhanced proxy configuration
const proxy = {
  '/api': {
    target: API_BASE_URL,
    ...proxyConfig
  }
}

export default defineConfig({
  // Core plugins
  plugins: [react()],

  server: {
    host: true,
    port: parseInt(process.env.VITE_DEV_SERVER_PORT) || 4006,
    proxy,
    // Show startup info
    open: process.env.VITE_AUTO_OPEN === 'true' || false,
    // Mejorar el manejo de errores del dev server
    hmr: {
      overlay: process.env.VITE_HMR_OVERLAY !== 'false'
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        api: 'modern-compiler',
      },
    },
  },

  base: '',
  build: {
    chunkSizeWarningLimit: 60000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@mui/icons-material', '@mui/x-data-grid', '@mui/x-tree-view'],
          'chart-vendor': ['chart.js', 'react-chartjs-2', 'echarts-for-react', 'react-apexcharts'],
          'form-vendor': ['formik', 'react-hook-form', 'yup'],
          'utility-vendor': ['axios', 'moment', 'lodash']
        }
      }
    },
    // Optimize build performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Reduce memory usage
    sourcemap: false,
    reportCompressedSize: false
  },
  define: {
    'process.env': {},
  },
})