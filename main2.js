import { ref, push, set, database, onValue } from "./firebase.js";
let BlogsRef = ref(database,"Blogs")
// show items on firebase in our items container
let blogContainer = document.getElementById("blogs")
onValue(BlogsRef,(snapshot)=>{
	blogContainer.innerHTML = ""
	let data = snapshot.val()
	console.log(snapshot.value)

	for(const property in data){
		console.log(data[property])
		let newLi = document.createElement("li")
		newLi.innerHTML = data[property]
		blogContainer.append(newLi)
	}
})