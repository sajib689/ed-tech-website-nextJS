/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string; // Add your custom environment variable
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  