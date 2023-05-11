<<<<<<< HEAD
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
  
=======
//###########################
//fetch api
// function fetchUser() {
//   fetch('https://randomuser.me/api')
//     .then((res) => res.json())
//     .then((data) => {
//       //   console.log(data);  //to test the data
//       displayUser(data.results[0]);
//     });
// }

// function displayUser(user) {
//   console.log(user.gender);
//   if (user.gender === 'female') {
//     document.body.style.backgroundColor = 'rebeccapurple';
//   } else {
//     document.body.style.backgroundColor = 'steelblue';
//   }
// }

// fetchUser();
//###########################
// get the user element
//
// function fetchUser() {
//   fetch('https://randomuser.me/api')
//     .then((res) => res.json())
//     .then((data) => {
//       displayUser(data.results[0]);
//     });
// }

// function displayUser(user) {
//   const userDisplay = document.querySelector('#user');

//   if (user.gender === 'female') {
//     document.body.style.backgroundColor = 'rebeccapurple';
//   } else {
//     document.body.style.backgroundColor = 'steelblue';
//   }
//   userDisplay.innerHTML = `

//   <div id="user" class="mt-6">
//   <div class="flex justify-between">
//     <div class="flex">
//       <img
//         class="w-48 h-48 rounded-full mr-8"
//         src="${user.picture.large}"
//       />
//       <div class="space-y-3">
//         <p class="text-xl">
//           <span class="font-bold">Name: </span> ${user.name.first} ${user.name.last}
//         </p>
//         <p class="text-xl">
//           <span class="font-bold">Email: </span> ${user.email}
//         </p>
//         <p class="text-xl">
//           <span class="font-bold">Phone: </span>${user.phone}
//         </p>
//         <p class="text-xl">
//           <span class="font-bold">Location: </span> ${user.location.city}, ${user.location.country}
//         </p>
//         <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
//       </div>
//     </div>
//   </div>
// </div>

//   `;
// }

// document.querySelector('#generate').addEventListener('click', fetchUser);
// fetchUser();
//###########################
//for the spinner
//
function fetchUser() {
  showSpinner();
  fetch('https://randomuser.me/api')
    .then((res) => res.json())
    .then((data) => {
      hideSpinner();
      displayUser(data.results[0]);
    });
}

function displayUser(user) {
  const userDisplay = document.querySelector('#user');

  if (user.gender === 'female') {
    document.body.style.backgroundColor = 'rebeccapurple';
  } else {
    document.body.style.backgroundColor = 'steelblue';
  }
  userDisplay.innerHTML = ` 
    
    <div id="user" class="mt-6">
    <div class="flex justify-between">
      <div class="flex">
        <img
          class="w-48 h-48 rounded-full mr-8"
          src="${user.picture.large}"
        />
        <div class="space-y-3">
          <p class="text-xl">
            <span class="font-bold">Name: </span> ${user.name.first} ${user.name.last}
          </p>
          <p class="text-xl">
            <span class="font-bold">Email: </span> ${user.email}
          </p>
          <p class="text-xl">
            <span class="font-bold">Phone: </span>${user.phone}
          </p>
          <p class="text-xl">
            <span class="font-bold">Location: </span> ${user.location.city}, ${user.location.country}
          </p>
          <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
        </div>
      </div>
    </div>
  </div>
  
    `;
}

function showSpinner() {
  document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none';
}

document.querySelector('#generate').addEventListener('click', fetchUser);
fetchUser();

//###########################
//###########################
//###########################
//###########################
>>>>>>> upstream/master
