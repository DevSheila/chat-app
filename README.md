# Wanderlust

Wanderlust is a real-time chat web app built with Next.js, Clerk, Convex, Livekit, Uploadthing, Shadcn UI, and Tailwind CSS.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)



## Features

- **User Authentication and Management**: The app integrates Clerk to enable seamless user authentication, including signup, login, and managing user sessions. The system also ensures secure access to chat functionalities.

- **Real-Time Communication**: Powered by Livekit, the app supports real-time video and voice communication between users, making conversations feel natural and engaging.

- **Friends and Group Conversations**: Users can add friends to their contact list and start one-on-one conversations. The app also supports creating and managing group chats, allowing multiple participants to engage in real-time discussions.

- **Conversations with Read Receipts**: The app features read receipts, so users can see when their messages have been viewed by others, improving communication flow and user experience.

- **File Uploads within Chats**: Uploadthing enables users to upload and share files directly within conversations, making it easy to share images, documents, and other media in both one-on-one and group chats.

- **Responsive UI & Dark Mode**: Built with Shadcn UI and Tailwind CSS, the application offers a modern, responsive design that adapts to various screen sizes. It also includes a dark mode option for users who prefer a darker theme.

- **Database & Scalable Backend**: Using Convex, the app is backed by a scalable database architecture, allowing for reliable real-time messaging and chat history storage, even as the user base grows.

- **Layout and Navigation**: The app includes a well-structured layout with intuitive navigation, ensuring a seamless user experience as users switch between conversations, manage contacts, and access settings.

- **Deployment Ready**: The project is fully deployable to production environments, with comprehensive setup instructions for smooth deployment to platforms like Vercel.



## Technologies Used

- **Next.js**: React framework for server-side rendering and routing.
- **Clerk**: Handles authentication and user management.
- **Convex**: Provides backend infrastructure for scalable real-time chat features.
- **Livekit**: Powers real-time video and voice communication capabilities.
- **Uploadthing**: Manages file uploads and attachments in chats.
- **Shadcn UI**: Component library for building accessible and themeable UIs.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Getting Started

To get a local copy up and running, follow these simple steps:

- Clone the repository:

```bash
git clone https://github.com/DevSheila/chat-app
```

- go to project directory

```bash
cd chat-app
```

- install dependencies
```bash
npm install
```

- run app

```bash
npm run dev
```
- run convex to create tables and functions

```bash
npx convex dev
```

