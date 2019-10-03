const ac = (parent, child) => parent.appendChild(child);
const ele = use => document.createElement(use);

const cghc = user => {
  const card = ele('div'),
    image = ele('img'),
    info = ele('div'),
    name = ele('h3'),
    username = ele('p'),
    location = ele('p'),
    profile = ele('p'),
    profile_link = ele('a');
    followers = ele('p'),
    following = ele('p'),
    bio = ele('p');
    //
    image.src = user.avatar_url;
    name.textContent = user.name;
    username.textContent = user.username;
    location.textContent = !(user.location === null) ? `Location: ${user.location}` : `Location: Not Currently Known`;
    profile.textContent = `Profile: `;
    profile_link.textContent = user.html_url;
    profile_link.setAttribute('href', user.html_url);
    followers.textContent = `Followers: ${user.followers}`;
    following.textContent = `Following: ${user.following}`;
    bio.textContent = `Bio: ${user.bio}`; 
    //
    username.classList.add('username');
    name.classList.add('name');
    card.classList.add('card');
    info.classList.add('card-info');
    //
    ac(card, image);
    ac(card, info);
    ac(info, name);
    ac(info, username);
    ac(info, location);
    ac(info, profile);
    ac(profile, profile_link);
    ac(info, followers);
    ac(info, following);
    ac(info, bio);
    ac(document.querySelector('.cards'), card);
    //  
};

const findUser = (s, n) => axios.get(`https://api.github.com/users/${n}`).then(response => {
  cghc(response.data);
  if (n == s) {
    findFollowers(s, response.data.followers_url);
  }
}).catch(error => console.log(`Error: ${error}`));

const findFollowers = (s, f) => {
  axios.get(f).then(response => {
    response.data.forEach(f => findUser(s, f.login));
  }).catch(error => console.log(`Error: ${error}`));
};

findUser('clickclackity', 'clickclackity')

























/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM ele:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
