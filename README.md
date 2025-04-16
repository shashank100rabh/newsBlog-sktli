# React + Vite

Hosted link ->    https://wonderful-maamoul-c2e1f8.netlify.app/
project Despription google drive link -> https://drive.google.com/drive/folders/120Tpvnz0PAf41RWpzNvdMVNSaF8JMn6k?usp=drive_link


"setup": "npm install && npm run dev"
This command will:

Install all the necessary dependencies listed in package.json.
Start the development server using Vite.


# The package.json file has been successfully updated to include the new setup command. Here is the updated content of the file:

{
  "name": "blog-system",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "setup": "npm install && npm run dev",
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router": "^7.4.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.21.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react-swc": "^3.8.0",
    "autoprefixer": "^10.4.21",
    "daisyui": "^5.0.9",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "vite": "^6.2.0"
  }
}
Summary of Changes:
Added a new script "setup": "npm install && npm run dev" to the scripts section of package.json.
You can now use the command npm run setup to install dependencies and start the development server.
