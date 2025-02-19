Project Overview

This project is a React-based form application that:

1)Collects user data (name, email, address, phone).
2)Saves the collected data in local storage.
3)Uses Chakra UI for styling.

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

1)Uses React's useState to manage form input.
2)Uses useEffect to load data from local storage.
