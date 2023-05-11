// script.js
document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate');
    const userDiv = document.getElementById('user');
    const spinner = document.querySelector('.spinner');
  
    generateButton.addEventListener('click', async () => {
      spinner.classList.remove('hidden');
      const response = await fetch('https://randomuser.me/api');
      const data = await response.json();
      const user = data.results[0];
      updateUser(user);
      spinner.classList.add('hidden');
    });
  
    function updateUser(user) {
      const { name, email, phone, location, dob, picture } = user;
      const fullName = `${name.title} ${name.first} ${name.last}`;
      const formattedLocation = `${location.city}, ${location.country}`;
  
      userDiv.innerHTML = `
        <div class="flex justify-between">
          <div class="flex">
            <img class="w-48 h-48 rounded-full mr-8" src="${picture.large}" />
            <div class="space-y-3">
              <p class="text-xl"><span class="font-bold">Name: </span> ${fullName}</p>
              <p class="text-xl"><span class="font-bold">Email: </span> ${email}</p>
              <p class="text-xl"><span class="font-bold">Phone: </span> ${phone}</p>
              <p class="text-xl"><span class="font-bold">Location: </span> ${formattedLocation}</p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${dob.age}</p>
            </div>
          </div>
        </div>
      `;
    }
  });
  