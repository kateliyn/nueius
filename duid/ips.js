   import { marked } from 'marked';

   const rawString = "Welcome to **MyApp**! This is the best place to learn _Markdown_.";
   const htmlString = marked(rawString);

   document.getElementById('content').innerHTML = htmlString;
   