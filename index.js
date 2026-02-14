const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const likesEl = document.getElementById("likesEl")
const likesEl2 = document.getElementById("likesEl2")
const likesEl3 = document.getElementById("likesEl3")
const heartClick = document.getElementById("heart-click")
const heartClick2 = document.getElementById("heart-click2")
const heartClick3 = document.getElementById("heart-click3")

let count = 21
let count2 = 4
let count3 = 152


function addLikes() {
    likesEl.innerHTML = `<b>${count} likes</b>`
    count ++
    
}

heartClick.addEventListener("click", function() {
    addLikes()
    
})
    
function addLikes2() {
    likesEl2.innerHTML = `<b>${count2} likes</b>`
    count2 ++
}       
 
    
heartClick2.addEventListener("click", function() {
    
    addLikes2()
    
})

function addLikes3() {
    likesEl3.innerHTML = `<b>${count3} likes</b>`
    count3 ++ 
}    

heartClick3.addEventListener("click", function() {
    
    addLikes3()
    
})