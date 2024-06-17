# Trivia NextJS

<p align="left">
  <img height="150" alt="image" src="https://github.com/paulocsb/trivia-nextjs/assets/6982718/d6e133b9-6e40-4d9f-845e-3b831b3361c8">
  <img height="150" alt="image" src="https://github.com/paulocsb/trivia-nextjs/assets/6982718/2efe1762-f644-4713-ba13-c0c9b14f60c0">
  <img height="150" alt="image" src="https://github.com/paulocsb/trivia-nextjs/assets/6982718/d8008490-1bc8-4d77-866d-079adda0757a">
  <img height="150" alt="image" src="https://github.com/paulocsb/trivia-nextjs/assets/6982718/cffc2139-f14a-4fb9-b83d-877067fc85ea">
</p>

A basic trivia application built with Next.js, Tailwind CSS, and TypeScript. This app fetches trivia questions from a local `db.json` file using the `json-server` npm library. It is intended for learning development purposes, providing an engaging way to test your knowledge across various topics.

## Table of Contents

- [Trivia NextJS](#trivia-nextjs)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
    - [Running the Project](#running-the-project)
  - [Learn More](#learn-more)
  - [Deploy on Vercel](#deploy-on-vercel)

## Introduction

This Trivia app provides multiple-choice questions on topics such as geography, literature, history, science, sports, etc. It features randomized answer options for each question and immediate feedback on the correctness of answers.

## Features

- Multiple categories.
- Randomized answer options for each question.
- Immediate feedback on the correctness of answers.
- Simple and responsive user interface using Tailwind CSS.
- State management with React hooks.

## Installation

### Prerequisites

- Node
- npm
- json-server

### Steps

1. Clone the repository:
    ```sh
    git clone git@github.com:paulocsb/trivia-nextjs.git
    ```

2. Navigate to the project directory:
    ```sh
    cd trivia-nextjs
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Install `json-server` globally:
    ```sh
    npm install -g json-server
    ```

5. Start the `json-server`:
    ```sh
    json-server --watch db/db.json --port 3004
    ```

## Usage

### Running the Project

To start the development server, run:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
