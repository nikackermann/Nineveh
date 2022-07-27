FROM node:16.16.0

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json yarn.lock ./

# Install packages
RUN yarn install

# Copy the app code
COPY . .

# Build the project
RUN npm run build

# Expose ports
EXPOSE 8080

# Run the application
CMD [ "node", "dist/index.js" ]