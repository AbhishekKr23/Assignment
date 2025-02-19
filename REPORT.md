Project Overview

This project is a React-based form application that:

Collects user data (name, email, address, phone).
Saves the collected data in local storage.
Uses Chakra UI for styling.

Component Structure

/src  
│── components/  
│   ├── Counter.tsx         
│   ├── RichTextEditor.tsx  
│   ├── UserForm.tsx          
│  
│── types/                  
│   ├── index.ts           
│  
│── App.tsx                  
│── main.tsx                 
│── index.css                 
│── index.html              
│── vite-env.d.ts        
│  
│── .gitignore              
│── eslint.config.js
│── package.json            
│── package-lock.json      
│── postcss.config.js      
│── tailwind.config.js      
│── tsconfig.app.json       
│── tsconfig.json          
│── tsconfig.node.json      
│── vite.config.ts          
│── README.md              



State Management:

Uses React's useState to manage form input.
Uses useEffect to load data from local storage.
