
// let number = document.querySelector('#number').value
// console.log(number)

let DATA = {
    users: [
        {
            id: 1,
            first_name: "Asadbek",
            last_name: "Zoirov",
            avatar: "Smile.jpg",
            bio:"",
            user_name: "@ZoirovAsadbek",
            shared_links: 15,
            shared_photos: 20,
            shared_voice: 15,
			shared_files: 12,
            activity: "last seen recently",
			selected: "true",
            messages: [
                {
                    id: 1 ,
                    is_from_me:false,
                    text: "Assalom alaykum",
                    time: new Date(),
                },
                {
                    id: 2 ,
                    is_from_me:true,
                    text: "Tinchmisiz, kun qanday o'ti ",
                    time: new Date(),
                }
            ]
        },
		{
            id: 2,
            first_name: "Bahor",
            last_name: "Jumayev",
            avatar: "bahor.jpg",
            bio:"",
            user_name: "@Bahorbek1",
            shared_links: 10,
            shared_photos: 50,
            shared_voice: 5,
			shared_files: 42,
            activity: "online",
			selected: "true",
            messages: [
                {
                    id: 1 ,
                    is_from_me:false,
                    text: "Assalom alaykum , yaxshimisan",
                    time: new Date(),
                },
                {
                    id: 2 ,
                    is_from_me:true,
                    text: "Nima gap do'stim , tinchmisan nima ko'rinmay keting",
                    time: new Date(),
                }
            ]
        }
    ],
  
}
let userId;
let chats = document.querySelector("#search-ul");

let currentChatId 
let messagesElement = document.querySelector(".container")

//  <li class="search-li  user_id"  userId = "2"><img src="my.jpg" alt="" class="account-img"><p class="search-texts"><a class="searchlink" href="#">Jasur  </a><br>adfawdw</p><p class="search-time">12:23</p></li>
function fname() {
    for (let i = 0; i < DATA.users.length; i++) {
    let men = document.createElement("p");
      let names = document.createElement("a");
      let  liname = document.createElement("li");
      let set = document.createElement("IMG");
      men.className = "search-texts"
      liname.className = "search-li";
      set.className = "account-img";
      names.className = "searchlink";
      names.textContent =
        DATA.users[i].first_name + " " + DATA.users[i].last_name;
      set.setAttribute("src", DATA.users[i].avatar);
      liname.appendChild(set);
      liname.appendChild(names);
      liname.setAttribute("user_id", DATA.users[i].id);
      chats.appendChild(liname);
      
    } }
    fname();
let text = [];
let textInput = document.querySelector(".input-text");
let sendBtn = document.querySelector(".plane-button");
let textArea = document.createElement("p");
let kiname = document.querySelector(".search-li")
messagesElement.appendChild(textArea);
text.push(textArea);

  
sendBtn.addEventListener("click", () => {
  let newMessage = document.querySelector(".use-keyboard-input").value;
  let userId = kiname.getAttribute("user_id");
  textInput.value = "";
  for (let tabs in DATA) {
    DATA[tabs].forEach((chatItem, index) => {
      if (index === userId) {
        chatItem.message.push({
          id: chatItem.message[chatItem.message.length - 1].id + 1,
          is_from_me: true,
          text: newMessage,
          time: new Date(),
        });
      }
    });
  }
  renderMessage(userId);
});

function renderMessage(userId) {
   
    console.log(true);
    messagesElement.innerHTML = "";
    for (let tabs in DATA) {
     DATA[tabs].forEach((chatItem, index) => {
        if (index === userId) {       
          chatItem.message.forEach((messages) => {
            messagesElement.innerHTML += `<li class=" ${messages.is_from_me ? "from__me" : "to__me"}">${messages.text}</li>`;        
        })
    } }
     )
  }}

let follow = document.querySelector("li.search-li")
let aboutText = document.querySelector(".about-texts");
follow.forEach(function (chat) {
  chat.addEventListener("click", function (e) {
    userId = chat.getAttribute("user_id");
    userId -= 0;

    let user = DATA.users[userId];
    aboutText.innerHTML = user.first_name + " " + user.last_name;
    renderMessage(userId);
  });
});



//  let nameBio = document.querySelector(".bio__name");
//  chats.forEach(function (chat) {
//    chat.addEventListener("click", function (e) {
// 	 let userId = chat.getAttribute("user_id");
// 	 userId -= 0;
// 	 let user = DATA.users[userId - 1];
// 	 nameBio.innerHTML = `${user.first_name} + " " + ${user.last_name}`;
//    });
//  });
 
//  function renderMessage() {
//    chats.forEach(function (sms) {
// 	 let userId = sms.getAttribute("user_id");
// 	 userId -= 0;
//    });
//  }
/*
chats.forEach(function(chat) {
	chat.addEventListener("click", function(e) {

		let id = chat.getAttribute("userId");

		currentChatId = id 

		id -= 0; 

		let user= DATA.users[id-1];

		user.messages.forEach(function(message) {
			messagesElement.innerHTML += `<li>${message.text}</li>`
			renderMessages()
		})
		
	})
})
*/
/*
     UI
     chats
     messages for each chat
     chats info modal
     virtual keyboard
     emoji keyboard
     hamburger - settings modal
     search - filter
*/ 



// let messages = [
//   {
//       id: 1,
//       text: "lorem ipsum",
//       is_from_me: false,
//       time: "12312"
//   }
// ]

// let messages = window.localStorage.getItem("messages")
 
// messages = JSON.parse(messages)
// if(!messages) {
//     window.localStorage.setItem("messages", JSON.stringify([
//         {
//             id: 1,
//             is_from_me: false,
//             text: "Assalom alaykum",
//             time: "8-10-21"
//         }
//     ])) 
     
// }




// let input = document.querySelector(".input-text")
// let btn = document.querySelector(".plane-button")
// let messagesElement = document.querySelector(".container")

// btn.addEventListener('sumbit', function(e) {
//     let messageText = input.value;

//      DATA.users[currentChatId - 1].messages.push({
// 		 id:DATA.users[currentChatId - 1].messages.length + 1,
// 		 is_from_me:true,
// 		 text:messageText,
// 		 time: new Date()

// 	 })

//           window.localStorage.setItem("DATA" ,JSON.stringify(DATA))

//          renderMessages()
// }

// )

// function renderMessages() {
//       messagesElement.innerHTML = "";

//     messages.forEach(function(message) {
//         let newMessage = `<li class="${message.is_from_me ? "from_me" : "to_me" } id="message${message.id}">${message.text}</li>`
        
//         messagesElement.innerHTML += newMessage 

        
//     })
// }
// renderMessages()





//   function meFunction() {
//     var x = document.getElementsByClassName("offcanvas-card");
//     if (x.style.display === "inline-block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "inline-block";
//     }
//   }


// let closeOffcanvas = document.querySelector(".container")




// function openNav() {

//     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
//     document.offcanvasCard.style.display = "inline-block";
// }
//  function closeNav() {
//     document.getElementsByClassName("offcanvas-card").style.display = "none";
//     document.body.style.backgroundColor = "white";
//  }
