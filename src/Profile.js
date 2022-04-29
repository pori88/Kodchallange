import React, { useEffect, useState } from 'react'
import Style from './style.css'
import Search from '../src/images/assets/icon-search.svg';
import Location from '../src/images/assets/icon-location.svg';
import Twitter from '../src/images/assets/icon-twitter.svg';
import Website from '../src/images/assets/icon-website.svg';
import Company from '../src/images/assets/icon-company.svg';
import Sun from './images/assets/icon-sun.svg'
import Moon from './images/assets/icon-moon.svg'


const input = document.querySelector("input");
const btn = document.querySelector(".searchbtn");

const user = document.querySelector(".githubUser");
const login = document.querySelector(".githubUserName");
const joined = document.querySelector(".githubJoinedDate");
const repo = document.querySelector(".repoTotal");
const follower = document.querySelector(".followerTotal");
const followings = document.querySelector(".followingTotal");
const locations = document.querySelector(".locations");
const twit = document.querySelector(".twit");
const websites = document.querySelector(".websites");
const companies = document.querySelector(".companies");
const gitBio = document.querySelector(".githubBio");
let img = document.createElement("img");
let block = document.querySelector(".mainImg");

 btn.addEventListener("click", function () {
  const url = `https://api.github.com/users/${input.value}`;
  async function getUrl() {
    const response = await fetch(url);
    const data = await response.json();
    const dateData = data.created_at.slice(0, data.created_at.length - 10);

    img.src = data.avatar_url;
    block.appendChild(img);
    block.style.border = "none";

    user.innerHTML = data.name;
    login.innerHTML = `@${data.login}`;
    joined.innerHTML = `Joined ${dateData}`;
    repo.innerHTML = data.public_repos;
    follower.innerHTML = data.followers;
    followings.innerHTML = data.following;
    locations.innerHTML =
      data.location === "" || data.location === null
        ? "No Location"
        : data.location;
    twit.innerHTML =
      data.twitter_username === "" || data.twitter_username === null
        ? "No Twitter"
        : data.twitter_username;
    websites.innerHTML =
      data.blog === "" || data.blog === null ? "No Website" : data.blog;
    companies.innerHTML =
      data.company === "" || data.company === null
        ? "No Company"
        : data.company;
    gitBio.innerHTML =
      data.bio === "" || data.bio === null
        ? "This profile has no bio..."
        : data.bio;
  }
  getUrl();
  input.value = "";
});





function Profile() {
 /*  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] =useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/${username}')
    .then(res => res.json())
    .then(data => {
      setData(data);
    });

  }, []);

  const setData = ({ 
    name, 
    login, 
    followers, 
    following, 
    public_repos, 
    avatar_url }) => {

    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data => {
      setData(data);
    })
  }
  async function fetchGH() {
    const response = await fetch('https://api.github.com/repos/facebook/react/issues', {
        headers: {
            'Authorization': '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',
        }
    })
    return await response.json()
} */
const toggle = function (e) {
  if (e.currentTarget.classList.contains("light--hidden")) {
    document.documentElement.setAttribute("color-mode", "light");
    localStorage.setItem("color-mode", "light");
    return;
  }
  document.documentElement.setAttribute("color-mode", "dark");
  localStorage.setItem("color-mode", "dark");
};

const toggleColorButtons = document.querySelectorAll(".color-mode__btn");
toggleColorButtons.forEach((btn) => {
  btn.addEventListener("click", toggle);
});


  return (
    <div>
    <header>
      <div class="head">devfinder</div>
      <div class="light-dark mode">
        <button
          class="color-mode__btn light--hidden"
          aria-label="Toggle light mode"
        >
          LIGHT
          <img src={Sun} alt="" />
        </button>

        <button
          class="color-mode__btn dark--hidden"
          aria-label="Toggle dark mode"
        >
          DARK
          <img src={Moon} alt="" />
        </button>
      </div>
    </header>
    <div class="search">
      <div class="searchText">
        <img src={Search} alt="" />
        <input type="text" placeholder="Search Github username..." />
      </div>
      <div class="searchbtn">Search</div>
    </div>
    <div class="resultBody">
      <div class="githubHead">
        <div class="mainImg"></div>
        <div class="githubInfo">
          <div class="githubUser">Github Username</div>
          <div class="githubUserName"><a href="">@githubusername</a></div>
          <div class="githubJoinedDate">Joined Date</div>
        </div>
      </div>

      <div class="githubFact">
        <div class="githubBio">Github Bio...</div>

        <div class="githubRepo">
          <div class="repos">
            <div class="repoHeading">Repos</div>
            <div class="repoTotal">0</div>
          </div>
          <div class="followers">
            <div class="followerHeading">Followers</div>
            <div class="followerTotal">0</div>
          </div>
          <div class="following">
            <div class="followingHeading">Following</div>
            <div class="followingTotal">0</div>
          </div>
        </div>

        <div class="githubSocial">
          <div class="location">
            <img src={Location} alt="" />
            <p class="locations">Location</p>
          </div>
          <div class="twitter">
            <img src={Twitter} alt="" />
            <p class="twit">Twitter</p>
          </div>
          <div class="website">
            <img src={Website}alt="" />
            <p class="websites">Website</p>
          </div>
          <div class="comapny">
            <img src={Company} alt="" />
            <p class="companies">Company</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile