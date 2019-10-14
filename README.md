# next-demo-001

### 相关命令 
    开发环境: npm run dev 
    生产编译: npm run build 
    生产运行: npm run start 

### CDN的NGINX配置 
    server {
      listen 3800;
      server_name localhost 10.96.17.107;

      location /_next/ {
        alias /Users/connor/workspaces/demos/next-demo-001/.next/;
      }
      location / {
        root /Users/connor/workspaces/demos/next-demo-001/public;
      }
    }