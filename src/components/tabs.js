import axios from "axios";

const Tabs = (topics) => {

  const topic = document.createElement('div');
  const js = document.createElement('div');
  const boot = document.createElement('div');
  const tech = document.createElement('div');

  topic.classList.add('topics')
  js.classList.add('tab')
  boot.classList.add('tab')
  tech.classList.add('tab');

  js.textContent = topics.javascript;
  boot.textContent = topics.bootstrap;
  tech.textContent = topics.technology;

  topic.appendChild(js)
  topic.appendChild(boot)
  topic.appendChild(tech)

  return topic;
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}
axios
.get('https://lambda-times-api.herokuapp.com/topics')
.then(() =>{})
.catch(() =>{});

const tabsContain = document.querySelector('.tabs-container')

const tabsAppender = (selector) => {

  tabsAppender.forEach(topics) => {
    axios
    .get(`https://lambda-times-api.herokuapp.com/${topics}`)
    .then((res) =>{
      console.log(res.data)
      tabsContain.appendChild(Tabs(res.data))
    })
    .catch((err) =>{
      console.log(err);
    })
  })

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }

// {
//   "topics": [
//       "javascript",
//       "bootstrap",
//       "technology",
//       "jquery",
//       "node.js"
//   ]
// }