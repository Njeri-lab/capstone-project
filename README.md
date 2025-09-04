# 📚 Liora

Liora is a book discovery and reading companion app built with React.  
It allows users to search for books, save their ongoing reads, and explore results from multiple book APIs.  
The goal is to provide a simple, modern interface for book lovers to find, track, and enjoy their reading journey.

---

## ✨ Features

- 🔍 **Search Books** — Fetch books from [Google Books API](https://developers.google.com/books) and [Open Library API](https://openlibrary.org/developers/api).  
- 💾 **Local Storage Caching** — Results are cached locally to reduce API calls and persist data on refresh.  
- 📖 **Reading Now Section** — Keep track of books you’ve opened in a dedicated space.  
- ❌ **Hover-to-Remove** — Remove books from your Reading Now section with an intuitive overlay button.  
- 🔗 **Book Details** — Each book includes title, author(s), cover, description, and preview links.  
- 🚀 **Future Goals**:  
  - Deduplication across multiple APIs.  
  - User authentication with personalized Reading Now lists.  
  - Support for additional APIs (NYT Books, Gutendex).  
  - Dark mode and improved UI/UX.  

---

## 🛠️ Tech Stack

- **Frontend:** React, CSS  
- **State Management:** React Hooks (`useState`, `useEffect`)  
- **APIs:** Google Books API, Open Library API  
- **Storage:** Browser LocalStorage  

---

