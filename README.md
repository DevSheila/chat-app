# Wanderlust

Wanderlust is a real-time chat web app built with Next.js, Clerk, Convex, Livekit, Uploadthing, Shadcn UI, and Tailwind CSS.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Environment Setup](#environment-setup)
    - [Set up Convex](#set-up-convex)
    - [Set up Clerk](#set-up-clerk)
    - [Configure Convex for Clerk Authentication](#configure-convex-for-clerk-authentication)
    - [Configure Environment Variables](#configure-environment-variables)
    - [Creating a Clerk Webhook Secret](#creating-a-clerk-webhook-secret)
4. [Getting Started](#getting-started)

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

## Environment Setup

Based on .en.example file , update env variables.

```bash
# ENVIRONMENT
NODE_ENV=

# CONVEX
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=

# LIVEKIT
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=

```
## Convex + Clerk Authentication Setup

This project uses Convex as a backend service and Clerk for user authentication. Follow the steps below to configure and set up both services.


### 1. Set up Convex

Follow the [Convex NextJS Quickstart Guide](https://docs.convex.dev/quickstart/nextjs) and [Convex Clerk Quickstart Guide](https://docs.convex.dev/auth/clerk) to create and deploy a Convex backend. After completing the setup, you will receive a Convex URL, which you'll use in your client-side configuration.

### 2. Set up Clerk

### Sign up for Clerk
1. Go to [Clerk](https://clerk.dev) and sign up for an account.

### Create an Application in Clerk
1. In the Clerk dashboard, create a new application. This application will enable user login using methods like passwords or social providers.

### Create a JWT Template
1. Navigate to **JWT Templates** in the Clerk dashboard.
2. Create a new JWT template for **Convex**.
3. Save the template without renaming the token.

### Copy the Issuer URL
1. From the JWT template, copy the **Issuer URL**. You will need this for configuring the Convex backend.

### 3. Configure Convex for Clerk Authentication

### Create `auth.config.ts` in Convex
In the Convex project directory, create a file named `auth.config.ts` with the following content:

```typescript
export default {
  providers: [
    {
      domain: "https://your-issuer-url.clerk.accounts.dev/",  // Replace with your Clerk Issuer URL
      applicationID: "convex",
    },
  ],
};
```
### 4. Creating a Clerk Webhook Secret

- Generate a Webhook Secret
In the Clerk dashboard, navigate to the Webhooks section and create a new webhook. Generate a secret token for this webhook.

- Add the Webhook Secret to .env.local
Create or update your .env.local file in the root of your project to include the webhook secret:

```bash
CLERK_WEBHOOK_SECRET=your_webhook_secret_here
```

- Add the above clerk webhook to convex app dahsboard environment variables




## Getting Started

To get a local copy up and running, follow these steps:

- Clone the repository:
```bash
git clone https://github.com/DevSheila/chat-app
```

- Go to project directory
```bash
cd chat-app
```

- Install dependencies
```bash
npm install
```

- Run app
```bash
npm run dev
```

- Run convex to create tables and functions
```bash
npx convex dev
```
