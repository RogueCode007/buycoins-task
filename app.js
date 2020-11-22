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

fetch('https://api.github.com/graphql', {
  method: 'POST',
  Authorization: 'e02f3a5d99186f3d94c308e1a0950a1024b70fe7',
  headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer e02f3a5d99186f3d94c308e1a0950a1024b70fe7'},
  body: JSON.stringify({ query: query }),
})
  .then(res => res.json())
  .then(res => console.log(res.data));

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

