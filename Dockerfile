# Use an official Node.js image as the base image
FROM registry.access.redhat.com/ubi8/nodejs-16

# Switch to root to perform privileged operations
USER root

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the Node.js dependencies with root privileges
RUN npm install

# Copy the application code
COPY . .

# Change back to the non-root user
USER 1001

# Expose the application port
EXPOSE 3000

# Run the application
CMD ["node", "app.js"]