# Havvn

![Havvn Logo](https://github.com/adipshr/havvn/tree/master/public/images/havvn-logo.png "Havvn Logo")

Havvn is a rental platform website built using Next.js, MongoDB, Mongoose, Cloudinary, and deployed on Vercel. It allows users to book their own properties as well as book others' properties. Properties can easily be shared using QR codes.

## Features

- Users can book their own properties and book others' properties.
- Properties can be shared using QR codes.
- API routes:
  - `/favorites`: Allows users to manage their favorite listings.
  - `/listings`: Provides endpoints to manage property listings.
  - `/reservations`: Manages user reservations.
  - `/register`: Allows users to register their account.

## Technologies Used

- Next.js
- MongoDB
- Mongoose
- Cloudinary
- Vercel

## Getting Started

### Prerequisites

- Node.js
- MongoDB database
- Cloudinary account

### Installation

1. Clone the repository:

```bash
git clone <repository_url>
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file in the root directory and add the following environment variables:
   ```bash
   MONGODB_URI=your_mongodb_uri
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   ```

### Usage

1. To start the development server:

```bash
npm run dev
```

2. To build the project:

```bash
npm run build
```

3. To start the production server:

```bash
npm start
```
