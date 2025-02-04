<div align="center">
  <br />

  <br />
  <div>
    <img src="https://img.shields.io/badge/-Expo-black?style=for-the-badge&logoColor=white&logo=expo&color=000020" alt="expo" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-NewsAPI-black?style=for-the-badge&logoColor=white&logo=newsapi&color=3ECF8E" alt="newsapi" />
    <img src="https://img.shields.io/badge/-TanStack-black?style=for-the-badge&logoColor=white&logo=tanstack&color=FF4154" alt="tanstack" />
  </div>

<h3 align="center">NewsApp</h3>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

NewsApp, a mobile application for news enthusiasts, featuring dynamic news listings and detailed news content. Designed with modern tools like Expo SDK, NewsAPI, and TanStack for a seamless and scalable experience.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Expo
- React Native
- TypeScript
- NewsAPI
- TanStack

## <a name="features">🔋 Features</a>

👉 **Onboarding**: A smooth onboarding experience for new users.

👉 **Home Screen**: Displays the latest news,breaking and recommened articles with powerful search and filter functionality.

👉 **Discover Screen**: Allows users to discover news based on different categories.

👉 **Search Screen**: Enables users to search for news articles.

👉 **News Details Screen**: Provides comprehensive information about individual news articles, including images and key details.

👉 **Explore More**: Allows users to explore more news articles based on their interests.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Tony-kan/newsapp.git
cd newsapp
```

**Installation**

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
EXPO_PUBLIC_NEWSAPI_KEY=your-newsapi-key
```

Replace the values with your actual NewsAPI credentials. You can obtain these credentials by signing up on the [NewsAPI website](https://newsapi.org/).

**Start the app**

```bash
 npx expo start
```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project
uses [file-based routing](https://docs.expo.dev/router/introduction).
