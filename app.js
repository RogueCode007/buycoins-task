
//GraphQl query
const query = `query{
  user(login: "RogueCode007") {
    name
    avatarUrl
    login
    bio
  },
  repositoryOwner(login: "RogueCode007") {
    repositories(first: 20) {
      edges {
        node {
          name
          description
          forkCount
          stargazerCount
          updatedAt
          primaryLanguage {
            name
            color
          }
        }
      }
    }
  }
}`

//Call this function onload
grabGitHubData()

//Grab data and asssign it to an empty object called githubdata
let githubData = {user:{}, repositoryOwner:{}}
async function grabGitHubData(){
  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer  d52ffa2fa8135d9b95a2fa30fbb7d7e845fae610'},
      body: JSON.stringify({ query: query }),
    })
    const body = await response.json()
    let data =   body.data;
    console.log(data)
    //Fill data in where necessary
    document.getElementsByClassName('owner')[0].innerText = data.user.name
    let username = document.getElementsByClassName('username')
    for(let i =0; i < username.length; i++){
      username[i].innerText = data.user.login
    }
    document.getElementById('dropdownImg').src = data.user.avatarUrl;
    document.getElementById('navImg').src = data.user.avatarUrl;
    document.getElementById('userAvatar').src = data.user.avatarUrl;
    document.getElementById('role').innerText = data.user.bio;
    document.getElementById('repototal').innerText = data.repositoryOwner.repositories.edges.length;
    let edges = data.repositoryOwner.repositories.edges;
    for(let i = edges.length-1; i >= 0; i--){
      let div1 = document.createElement('div');
      div1.setAttribute('class', 'repo');
      let div2 = document.createElement('div');
      div2.setAttribute('class', 'wrapper')
      let link = document.createElement('a')
      link.setAttribute('class', 'repo-name');
      let p1 = document.createElement('p')
      p1.setAttribute('class', 'description');
      let div3 = document.createElement('div');
      div3.setAttribute('class', 'repofooter');
      let div4 = document.createElement('div');
      div4.setAttribute('class', 'langcolor');
      let span1 = document.createElement('span');
      span1.setAttribute('class', 'color')
      let span2 = document.createElement('span');
      span2.setAttribute('class', 'lang');
      let p2 = document.createElement('p');
      p2.setAttribute('class', 'updated');
      let button = document.createElement('button');
      let span3 = document.createElement('span');
      let icon = document.createElement('i')
      icon.setAttribute('class', 'fa');
      icon.classList.add('fa-star-o');
      span3.appendChild(icon);
      button.appendChild(span3);
      let text = document.createTextNode('Star')
      button.appendChild(text);
      let time = new Date(Date.parse(data.repositoryOwner.repositories.edges[i].node.updatedAt));
      let month = time.toLocaleString("en-US", {month: 'short'});
      let day = time.toLocaleString('en-US', {day: "numeric"});
      p2.innerText = "Updated on " + month +" "+ day;
      if(edges[i].node.primaryLanguage){
        span1.style.backgroundColor = edges[i].node.primaryLanguage.color;
        span2.innerText = edges[i].node.primaryLanguage.name;
        div4.appendChild(span1);
        div4.appendChild(span2);
        div3.appendChild(div4);
      }else{
        span2.innerText = '';
      } 
      
      div3.appendChild(p2);
      p1.innerText = edges[i].node.description;
      link.innerText = edges[i].node.name;
      div2.appendChild(link);
      div2.appendChild(p1);
      div2.appendChild(div3);
      div1.appendChild(div2);
      div1.appendChild(button);
      document.getElementsByClassName('repositories')[0].appendChild(div1)
    }
  }
  catch(err){
    alert("Something went wrong :( " + err)
  }
}












//NavBar and Dropdown menus
let mobileNav = document.getElementById('mobile-nav')
let bar = document.getElementById("bar");
let icons1 = document.getElementById('icons1');
let dropdown1 = document.getElementById('content-1')
let icons2 = document.getElementById('icons2');
let dropdown2 = document.getElementById('content-2')
let toggleMenu = function(block){
  if(block.classList.contains('hide')){
    block.classList.remove('hide');
    block.classList.add('visible');
  }else{
    block.classList.remove('visible') ;
    block.classList.add('hide');
  }
}; 

bar.addEventListener('click', function(){
  if(mobileNav.classList.contains('hide')){
    mobileNav.classList.remove('hide');
    mobileNav.classList.add('visible');
  }else{
    mobileNav.classList.remove('visible') ;
    mobileNav.classList.add('hide');
  }
});
icons1.addEventListener('click', function(){
  if(dropdown1.classList.contains('hide')){
    dropdown1.classList.remove('hide');
    dropdown1.classList.add('visible');
  }else{
    dropdown1.classList.remove('visible') ;
    dropdown1.classList.add('hide');
  }
});
icons2.addEventListener('click', function(){
  if(dropdown2.classList.contains('hide')){
    dropdown2.classList.remove('hide');
    dropdown2.classList.add('visible');
  }else{
    dropdown2.classList.remove('visible') ;
    dropdown2.classList.add('hide');
  }
})

