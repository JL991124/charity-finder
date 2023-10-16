# Charity Finder App

## Table of Contents

- [Charity Finder App](#charity-finder-app)
  - [Table of Contents](#table-of-contents)
  - [About ](#about)
  - [Features](#features)
  - [Usage ](#usage)

## About

Welcome to the **Charity Finder** - a web application that allows users to search for charities, view detailed information about each charity, and save their favorite charities. This application is built using **React**, **Typescript** and **Tailwind CSS**, and utilize the Every.org API for data fetching.

Visit the app: [Charity Finder](https://jl991124-charity-finder.netlify.app)

## Features

- Search for charities by cause.
- View detailed information about each charity, including its name, location, and description.
- Save your favorite charities locally in the app.
- Responsive design for mobile and desktop.

## Usage

To get started with the Charity Finder App, follow these steps:

### 1. Install Dependencies

```bash
yarn
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory of the project. Copy the content from `.env.example` and paste it into `.env`. Fill in the actual values for the environment variables:
- `VITE_API_URL`: The URL for the Every.org API.
- `VITE_API_KEY`: Your Every.org API key.

These environment variables are essential for the app to communicate with the Every.org API. Keep your API key and URL secure and do not share them publicly.

### 3. Start the Development Server
```bash
yarn run dev # serve local
```
