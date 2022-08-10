import { ref, push, set, database, onValue } from "./firebase.js";

let titleInput = document.getElementById("title")
let username = document.getElementById("username")
let content = document.getElementById("content")
let contentSubmit = document.getElementById("contentSubmit")
//refrence a part of our database
let BlogsRef = ref(database,"Blogs")
//add item to database
contentSubmit.onclick = function(event){
	event.preventDefault()
	let titleInputVal = titleInput.value
	console.log(titleInputVal)
	titleInput.value = ""

	let usernameInputVal = username.value
	console.log(usernameInputVal)
	username.value=""

	let contentInputVal = content.value
	console.log(contentInputVal)
	content.value = ""


	let newBlogRef = push(BlogsRef)// new place to add items in section items where can place our data

	set(newBlogRef,{title:titleInputVal,username:usernameInputVal,content:contentInputVal})

}
