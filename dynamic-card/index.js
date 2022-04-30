// dummy data
/*
const posts=[
    {
        title: 'This is title 1',
        body: 'This is body 1'
    },
    {
        title: 'This is title 2',
        body: 'This is body 2'
    },
    {
        title: 'This is title 3',
        body: 'This is body 3'
    },
    {
        title: 'This is title 4',
        body: 'This is body 4'
    },
    {
        title: 'This is title 5',
        body: 'This is body 5'
    },
    {
        title: 'This is title 6',
        body: 'This is body 6'
    },
    {
        title: 'This is title 7',
        body: 'This is body 7'
    },
    {
        title: 'This is title 8',
        body: 'This is body 8'
    },
]
*/

// fatch data 
const fatchData= async (config) => {
    try {
        const res = await axios(config);
       return res.data;
    }catch (error) {
        throw error("data is not fatch");

    }
    
}


//selection


const postsEliments = document.querySelector(".posts");
const loadData = async()=>{
    const posts = await fatchData("https://jsonplaceholder.typicode.com/posts");
    posts.map(post =>{
        const postEliment = document.createElement("div");
        postEliment.classList.add("post");
        postEliment.innerHTML = `<h4 class="post-title">${post.title}</h4>
        <p>post description here ${post.body}</p>`;
        postsEliments.appendChild(postEliment);
    });
   
};
loadData();