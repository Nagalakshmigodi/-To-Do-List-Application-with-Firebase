import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
    
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyBL0LFxhqV4c_rk4IVnWHXVOAqrTWPuZMk",
        authDomain: "group-6f597.firebaseapp.com",
        projectId: "group-6f597",
        storageBucket: "group-6f597.appspot.com",
        messagingSenderId: "481057671381",
        appId: "1:481057671381:web:d8e720e5876d1f57c7ba5c",
        measurementId: "G-3M2LH67D94"
      };
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
     
document.addEventListener('DOMContentLoaded', function() {
  const addTaskButton = document.getElementById('add-task');
  const newTaskInput = document.getElementById('new-task');
  const taskList = document.getElementById('task-list');

  addTaskButton.addEventListener('click', function() {
      const taskText = newTaskInput.value.trim();

      if (taskText) {
          const li = document.createElement('li');
          li.textContent = taskText;

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.addEventListener('click', function() {
              taskList.removeChild(li);
          });

          li.appendChild(deleteButton);
          taskList.appendChild(li);
          newTaskInput.value = '';  // Clear the input
      }
  });
});
