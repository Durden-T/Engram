
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const proxyFile = path.resolve(distDir, 'index.js');

// 确保 dist 目录存在
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// 写入代理文件
// 这告诉 SillyTavern 加载运行在 5173端口的 Vite 开发服务器脚本
const content = `
console.log('🔌 Engram: Connecting to HMR server...');
import 'http://localhost:5173/@vite/client';
import 'http://localhost:5173/src/index.tsx';
`;

fs.writeFileSync(proxyFile, content);

console.log('✅ HMR Proxy file written to dist/index.js');
console.log('🚀 Starting Vite server...');
