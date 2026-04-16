let userinfotxt = document.querySelector('.render-post');
const spans = document.querySelector(".likecountnum")
const formatter = new Intl.NumberFormat('en-US');

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 12502
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 15137
    }
]
function updatelike()
{
console.log("clicked")
}
function getpost()
{
    let userpostembed = "";
    for (let i = 0; i < posts.length; i++)
    {
        console.log(posts[i].name + posts[i].username + posts[i].location + posts[i].avatar + posts[i].post + posts[i].comment + posts[i].likes)
        
        userpostembed += `
        <div class="user-info">
            <img class="user-avatarpic" src="${posts[i].avatar}">
            <span class="user-txt-block">
                <span class="grid-name bolder">${posts[i].name}</span>
                <div> 
                <span class="locationspan">${posts[i].location}</span>
                </div>
            </span>
        </div>

        <div>
            <img class="post-image" src="${posts[i].post}">
        </div>

        <div class="icon">
            <img class="heart icon-hover icon-size" type="button" src="images/icon-heart.png">
            <img class="icon-hover icon-size" type="button" onclick="updatelike()" src="images/thumb-down.png">
            <img class="icon-hover icon-size" type="button" src="images/icon-comment.png">
            <img class="icon-hover icon-size" type="button" src="images/icon-dm.png">
        </div>
        <div class="bottom-postdiv">
            <div class="like-count">
                <span class="bolder"> <span class="likecountnum">${formatter.format(posts[i].likes)}</span> likes</span>
            </div>

            <div class="username">
                <span class="bolder">${posts[i].username}</span> ${posts[i].comment}  
            </div>
        </div>
`;
    }
    userinfotxt.innerHTML = userpostembed;
}


getpost();
updatelike();