FROM node:16
# con -p: si no existe que la cree
# /usr/src/app es el path que indica node en la docu
RUN mkdir -p /usr/src/app

# hago cd en esa carpeta

WORKDIR /usr/src/app

# agregamos los json en el directorio docker
COPY package*.json ./

#instalamos los modulos de node

RUN npm install

# copio todo lo que esta en el directorio actual dentro del contenedor actual (menos lo del dockerignore)
COPY . .

#CMD [ "npm", "run", "dev"]
CMD [ "npm", "start"]