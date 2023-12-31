# Use the official Node.js image as the base image

FROM node:17

# Set the working directory in the container

WORKDIR /app

# Copy package.json and package-lock.json to the container

COPY package*.json ./

 # Install project dependencies

RUN npm install

# Copy the Angular app source code to the container

COPY . .

# Build the Angular app for production

# Expose port 4200 (for the Angular app)

EXPOSE 4200 

# Start the Angular app with ng serve on port 4200

CMD npx ng serve --host 0.0.0.0