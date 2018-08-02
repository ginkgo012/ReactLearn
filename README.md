# ReactLearn

Learning react - Mingjia

This is a video searching app using Youtube api. It is created from official react app.

Nginx config:

server {
  listen 80 default_server;
  listen [::]:80 default_server;
  root /home/ec2-user/mingjia-website;
  index /home/mingjia-website/ReactLearn/my-app/public/index.html;
  server_name mingjia.dk;
  location / {
    try_files $uri $uri/ /;
  }
}