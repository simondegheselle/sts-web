FROM nginx:alpine

WORKDIR /app

COPY build /usr/share/nginx/html
#!/bin/sh

# COPY ./.nginx/nginx.conf /usr/share/nginx/nginx.conf

# ## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*


EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]