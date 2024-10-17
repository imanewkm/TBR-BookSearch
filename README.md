# TBR: The Book Search Engine

TBR is a web application designed to help users discover, explore, and learn more about their favorite books. With a user-friendly interface and powerful search capabilities, TBR makes finding your next read an enjoyable experience.

## Features

- **Book Search**: Easily search for books by title, author, or genre.
- **Detailed Book Information**: View in-depth details about each book, including descriptions, authors, publication dates, genres, and cover images.
- **Responsive Design**: Access TBR on any device, whether you’re on a computer, tablet, or smartphone.

## Technologies Used

- **Frontend**: React, CSS
- **API**: Google Books API for retrieving book data
- **Styling**: Custom CSS for a clean and modern design

## Project Architecture
```css
TBR-BOOKSEARCH
│
├── node_modules
│
├── public
│
├── src
│   ├── components
│   │   ├── BookDetails
│   │   ├── BookList
│   │   ├── Header
│   │   ├── Loader
│   │   ├── Navbar
│   │   ├── SearchForm
│   │
│   ├── images
│   │   ├── Header_cover.png
│   │   ├── no-cover.png
│   │   ├── tbr-beige-logo-no-text.png
│   │   ├── ...
│   │
│   ├── pages
│   │   ├── About.jsx
│   │   ├── Home.jsx
│   │
│   ├── context.js
│   ├── index.js
│   ├── index.css
│
├── package.json
├── package-lock.json
└── README.md

## Getting Started

To get started with TBR, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/tbr.git
   cd tbr