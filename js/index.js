

// VARIABLES

//DOM ELEMENTS
const playListInput = document.getElementById('playlistName');
const createPlaylistBtn = document.getElementById('createPlaylistBtn')
const playlistContainer = document.querySelector('.sideNav__playlist')
const playListTitle = document.querySelector('.playlistTitle')
const usernameTyped = document.getElementById('username');
const passwordTyped = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const usernameSpan = document.getElementById('usernameSpan')
let currentUser = ""
let imgAvatar = document.getElementById('img-avatar');
const logooutBtn = document.getElementById('logout');
const albumSongsNodes = document.querySelectorAll('.table-album tr')
const musicPlayer = document.getElementById('music-player');
const favIcon = document.querySelectorAll('.hearthFav')
const artistContainer = document.querySelector('.artists__container')
const albumsFav = document.querySelector('.albums-fav')
const spinner = document.querySelector('.spinner')
const playBtns = document.querySelectorAll('.playFav')
const searchInput = document.getElementById('searchValue')
const searchBtn = document.getElementById('searchBtn')
const categoriesContainer = document.querySelector('.categories')


//VARIABLES
let playLists = []
let favArt = []
let laterAddedPlaylist = []
let currentFavArtist = []
let searchResults = []
let TOKEN = 'Bearer '






let hamburger = document.querySelector('.navBar__hamburger');
const indexNavbar = document.querySelector('.index__navBar')
const defaultUser = {
    username: "Guest",
    password: "guest",
    avatar: "https://www.kindpng.com/picc/m/52-525992_woman-question-mark-clip-art-question-mark-face.png",
    playlists:["Guest Playlist"]
}


const users = [{
    username: "rita.petillo",
    name:"Rita",
    password: "rita1234",
    avatar: "https://img2.pngio.com/avatar-female-person-user-woman-young-icon-avatar-person-png-512_512.png",
    playlists: ["Rita's Playlist", "Italian Songs"],
    favArt: [{
        name: 'ColdPlay',
        code: "4gzpq5DPGxSnKTe4SA8HAU",
        image: 'https://i.scdn.co/image/6397b6a29c8d9081412e09feb53600f8c9a18313',
        background:"https://i.scdn.co/image/1ff3b3c63751ef3615e703c9853c433c3f45f4e7"
    }, {
        name: 'The Weeknd',
        code: "1Xyo4u8uXC1ZmMpatF05PJ",
        image: 'https://i.scdn.co/image/d9a875c37277c35b94c60c00d2cd256db098505d',
        background:"https://i.scdn.co/image/5cf62c6c908c0a211c0a6eb5ea1878b17df5b9bb"
        },
    {
        name: 'Achille Lauro',
        code: "0lI3rF4hi4op6UxqlLHPzv",
        image: 'https://i.scdn.co/image/ab67616d0000b273d7d1c841048a5776dd5405c4',
        background:"https://i.scdn.co/image/b816d069fcf62c63e0336aae516e12c2dffcb650"
    }]
    
},
    {
        username: "nello",
        name:"Nello",
        password: "nello1234",
        avatar: "https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg",
        playlists: ["Top Italia", "90' Songs"],
         favArt: [{
        name: 'Caparezza',
        code: "4l0PmbNvFq3m5JaUuAPbcB",
        image: 'https://i.scdn.co/image/ab67706f000000028d5942aae406a70180ba61d4',
        background:"https://i.scdn.co/image/3436d049d265e583180316158fbc130fe9583785"
    },{
        name: 'Aerosmith',
        code: "7Ey4PD4MYsKc5I2dolUwbH",
        image: 'https://i.scdn.co/image/ab67706f0000000214c46fb77a1d2b0fb8d3c218',
        background:"https://i.scdn.co/image/be3e460027e824a329f7363e49843b6847e8f31c"
    }]

    },
    {
        username: "fede",
        name:"Federico",
        password: "fede1234",
        avatar: "https://cdn0.iconfinder.com/data/icons/avatar-25/64/avatar-man-beard-brown-long-hair-beard-512.png",
        playlists: ["Top USA", "Top Global"],
        favArt: [{
        name: 'David Bowie',
        code: "0oSGxfWSnnOXhD2fKuz2Gy",
        image: 'https://i.scdn.co/image/ab67706f000000027d0577e4b1b8e8ec9e82019a',
        background:"https://i.scdn.co/image/5e6706b6b643d88467b64a19b8ffe4218c6444f9"
            },
        {
        name: 'Led Zeppelin',
        code: "36QJpDe2go2KgaRleHCDTp",
        image: 'https://i.scdn.co/image/ab67706f0000000238c33894b80da5646d4a929f',
        background:"https://i.scdn.co/image/dec827bb3060c12c44054b78f9e49fd046a723cf"
            },
           {
        name: "Guns N' Roses",
        code: "3qm84nBOXUEQ2vnTfUTTFC",
        image: 'https://i.scdn.co/image/ab67706f000000023dea752edffb0f7facbd4867',
        background:"https://i.scdn.co/image/6471a85d25ff05fad3f5f5b0a880a000298dd2c9"
    }]
               
},defaultUser]

const getToken = () => {
    return JSON.parse(localStorage.getItem('token'))
}



// FUNCTIONS

const previous = () => {
    return window.history.back() 
    
}
const forward = () => {
    return window.history.forward() 
}
const search = () => {
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
        
            let searchValue = searchInput.value;
            window.location.href = `search.html?${searchValue}`;

        })
    }
}

const displayMobileMenu = () => {
    console.log(indexNavbar)
    indexNavbar.classList.toggle('d-none')
}


const createPlaylist = (user) => {
    const newPlaylist = playListInput.value
    playLists.push(newPlaylist)
    localStorage.setItem('playLists', JSON.stringify(playLists))
    playListInput.value = ""
    console.log(JSON.parse(localStorage.getItem('playLists')))
   clearPlaylist()
    renderPlaylist()
}
const renderPlaylist = () => {
    playLists = JSON.parse(localStorage.getItem('playLists'))
    
    playLists.forEach((playlist, i) => {
        let a = document.createElement('a');
        a.href = `playlist.html?${playlist}`
        a.innerHTML = `<span class="sideNav__nav-play-thumb text-white"><i class="fas fa-music"></i></span><span> ${playlist.name}</span>`
        playlistContainer.appendChild(a)
    })
   
}

const clearPlaylist = () => {
    while (!playlistContainer.lastElementChild.classList.value.includes('sideNav__nav-addPlay')) {
        playlistContainer.removeChild(playlistContainer.lastChild)
    }
  
}

const login = () => {
    //getting user and pass typed 
    let userTped = usernameTyped.value
    let password = passwordTyped.value
//retrive the user
    let user = validateUsername(userTped);
    //validate password
    let passMatch = user?.password === password
    let userFound = user !== undefined ? true : false
//if the user exist and the password match
    if (userFound && passMatch) {
        //save the user in the local storage and go to index
        localStorage.setItem('currentUser', JSON.stringify(user))
updatePlaylist(user)
        window.location.href = "index.html";
    } else {
        //else activate warning text
        let loginWarn = document.querySelector('.login-warning')
        loginWarn.classList.remove('d-none')
    }

       
}


const authentication = () => {
    const client_id = 'e54184c2056e4fceba268bad7ae4175f';
    const secret = '90bf6fe6367b4d92b75aa2bca47478f0'
    const redirect_uri = 'http%3A%2F%2F127.0.0.1%3A5500%2F'
        //'https%3A%2F%2Fspotify-clone-api-js.vercel.app'
    const scopes = 'user-read-private user-read-email user-top-read'

// https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=${scopes}&state=34fFs29kd09
   window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`

    
}



const logout = () => {
    currentUser = "";
    localStorage.clear()
    window.location.href = "/login.html";
}
const renderUsername = (username) => {
    usernameSpan.innerHTML = username.name
    imgAvatar.src = username.avatar
}

const validateUsername = (username) => {
    return users.find(user => user.username === username);
}

/////////---------UPLOAD USER PLAYLIST----------//////////////

const updatePlaylist = (username) => {
  
    playLists = [...playLists, ...username.playlists]
    console.log(playlists)
        localStorage.setItem('playLists', JSON.stringify(playLists))

    

    console.log(localStorage.getItem('playLists'))

}

// const updatePlaylist = (username) => {
//     let user = users.find(user => user.username === username.username);
//     if (localStorage.getItem(localStorage.getItem('playLists'))) {
//         playlists = localStorage.getItem(localStorage.getItem('playLists'))
//         console.log('there is storage')
//     }
//     else {
//         playLists = [...playLists, ...username.playlists]
//         localStorage.setItem('playLists', JSON.stringify(playLists))
//         console.log('there is no')

//     }

//     console.log(localStorage.getItem('playLists'))

// }


/////////---------UPLOAD USER FAV ARTISTS----------//////////////

const loafFavArt = (username) => {
    let user = users.find(user => user.username === username.username);
    if (localStorage.getItem(localStorage.getItem('favArt'))) {
        playlists = localStorage.getItem(localStorage.getItem('favArt'))
    }
    else {
        favArt = username.favArt
            // localStorage.setItem('playLists', JSON.stringify(playLists))
    }

}
/////////---------PLAY SONG----------//////////////
const playSong = (code) => {
    musicPlayer.src = `https://open.spotify.com/embed/track/${code}`
    console.log(document.querySelector('iframe'))
    document.querySelector('iframe').click()

}

const playSongAlbum = (code) => {
    musicPlayer.src =     musicPlayer.src = `https://open.spotify.com/embed/album/${code}`

   
}


/////-------FETCH USER------/////
const fetchUser = async () => {
    const res = await fetch(`https://api.spotify.com/v1/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': JSON.parse(localStorage.getItem('token'))
        }
    })
    const data = await res.json()
   return data

}


/////-------FETCH ALBUMS------/////
const fetchAlbum = async (albumCode) => {
    const res = await fetch(`https://api.spotify.com/v1/artists/${albumCode}/albums`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': JSON.parse(localStorage.getItem('token'))
        }
    })
    const data = await res.json()
   return data

}
/////-------FETCH CATEGORY NAME------/////
const fetchCategoryName = async (cat_id) => {
    const res = await fetch(`https://api.spotify.com/v1/browse/categories/${cat_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': JSON.parse(localStorage.getItem('token'))
        }
    })
    const data = await res.json()
   return data

}

/////-------FETCH PLAYLISTS------/////
const fetchPlaylists = async () => {
    const res = await fetch(`https://api.spotify.com/v1/me/playlists
`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': JSON.parse(localStorage.getItem('token'))
        }
    })
    const data = await res.json()
   return data

}

/////-------FETCH SEARCH------/////
const fetchSearch = async (query) => {
    const res = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=artist`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': JSON.parse(localStorage.getItem('token'))
        
        }
    })
    const data = await res.json()
    console.log(JSON.parse(localStorage.getItem('token')))
   return data

}
/////-------FETCH FAV ARTISTS------/////
const fetchArtists = async (query) => {
    const res = await fetch(`https://api.spotify.com/v1/me/top/artists`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': JSON.parse(localStorage.getItem('token'))
        
        }
    })
    const data = await res.json()
    console.log(JSON.parse(localStorage.getItem('token')))
   return data

}

/////-------FETCH SINGLE CATEGORY------/////
const fetchSingleCategory = async (category_id) => {
    const res = await fetch(`https://api.spotify.com/v1/browse/categories/${category_id}/playlists`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': JSON.parse(localStorage.getItem('token'))
        
        }
    })
    const data = await res.json()
    console.log(JSON.parse(localStorage.getItem('token')))
   return data.playlists.items

}
///----PRINT FAV ARTISTS-----///
const renderFavArtists = () => {
    favArt.forEach(artist => {
        let div = document.createElement('div')
        let divClasses = ["col-6","col-md-4","col-lg-3","col-xl-2","text-center"]
        div.classList.add(...divClasses)
        div.innerHTML = `       <a href="albums-fav.html?${artist.id}" class="">
                            <div class="card card-spotify">
                                <img src="${artist.images[0].url}"
                                    class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">
                                        ${artist.name}
                                    </h5>
                                   
                                </div>
                            </div>
                        </a>`
        
        artistContainer.appendChild(div)
        console.log(artist)
    })
}


/////-------FETCH CATEGORIES------/////
const fetchCategories = async () => {
    const res = await fetch(`https://api.spotify.com/v1/browse/categories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': JSON.parse(localStorage.getItem('token'))
        
        }
    })
    const data = await res.json()
    console.log(JSON.parse(localStorage.getItem('token')))
   return data.categories.items

}

////------FETCH TOPLIST---------////
let toplist = []
const fetchToplist = async() =>{
    fetch(`https://api.spotify.com/v1/browse/categories/toplists/playlists`,{
        method: "GET",
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': JSON.parse(localStorage.getItem('token'))
        }
    }).then(res => res.json()).then(parsedToplist => {toplists = parsedToplist.playlists.items})}

let globalTop50 = []
const fetchGlobalTop50 = async() => {
    fetch(`https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF`,{
        method: "GET",
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': JSON.parse(localStorage.getItem('token'))
        }
}).then(res => res.json()).then(parsedJson => globalTop50 = parsedJson)}

let globalTop50Viral = []
const fetchGlobalTop50Viral = async() => {
    fetch(`https://api.spotify.com/v1/playlists/37i9dQZEVXbLiRSasKsNU9`,{
        method: "GET",
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': JSON.parse(localStorage.getItem('token'))
        }
}).then(res => res.json()).then(parsedJson => globalTop50Viral = parsedJson)}


///----RENDER FAV ARTISTS ALBUMS-----///
const renderFavArtistsAlbums = (artSelected,code) => {
      let artistTitle = document.querySelector('.artist-title')
    let jumboFavArt = document.querySelector('.jumbotron-art-fav')
    let artistFollowers = document.getElementById('artist-followers')
    artistFollowers.src = `https://open.spotify.com/follow/1/?uri=spotify:artist:${code}&size=detail&theme=light`
    if (artSelected) {
      
        artistTitle.innerHTML = artSelected.name
        jumboFavArt.style.backgroundImage = `url(${artSelected.background})`;
    } else {
        artistTitle.innerHTML = currentFavArtist.items[0].artists[0].name
                jumboFavArt.style.backgroundImage = `url(${currentFavArtist.items[3].images[0].url})`;


    }
    currentFavArtist.items.forEach(album => {
        let div = document.createElement('div')
        let divClasses = ["col-6","col-md-4","col-lg-3","col-xl-2","text-center"]
        div.classList.add(...divClasses)
        div.innerHTML = `      <a href="/single-album.html?${album.id}">
                            <div class="card card-spotify">
                                <img src="${album.images[1].url}"
                                    class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">
                                        ${album.name}
                                    </h5>
                                   
                                </div>
                            </div>
                            </a>
                        `
        div.addEventListener('click', () => {
            playSongAlbum(album.id)
        })
        
        albumsFav.appendChild(div)
    })
}

///----RENDER SEARCH-----///
const renderSearchResults = (results) => {
    const searchContainer = document.querySelector('.search__container')
    results.forEach(result => {
        let div = document.createElement('div')
        let divClasses = ["col-6","col-md-4","col-lg-3","col-xl-2","text-center"]
        div.classList.add(...divClasses)
        div.innerHTML = `       <a href="albums-fav.html?${result.id}" class="">
                            <div class="card card-spotify">
                                <img src="${result.images[1].url}"
                                    class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title mb-4">
                                        ${result.name}
                                    </h5>
                                   
                                </div>
                            </div>
                        </a>`
        
        searchContainer.appendChild(div)
    })
}

///----RENDER CATEGORIES-----///
const renderCategories = (results) => {
    results.forEach(result => {
        let div = document.createElement('div')
        let divClasses = ["col-6","col-md-4","col-lg-3","col-xl-2","text-center"]
        div.classList.add(...divClasses)
        div.innerHTML = `       <a href="category.html?${result.id}" class="">
                            <div class="card card-spotify">
                                <img src="${result.icons[0].url}"
                                    class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title mb-4">
                                        ${result.name}
                                    </h5>
                                   
                                </div>
                            </div>
                        </a>`
        
        categoriesContainer.appendChild(div)
    })
}

///----RENDER SINGLE CATEGORY PAGE-----///
const renderSingleCategory = (results, cat_id) => {
    let categoryName = ""
        let cateogryTitle = document.querySelector('.category-title')

    fetchCategoryName(cat_id).then(res => {
        console.log(res)
        categoryName = res.name
        cateogryTitle.innerHTML = categoryName
    })
    
        let categoryContainer = document.querySelector('.category__container')
    results.forEach(item => {
        let div = document.createElement('div')
        let divClasses = ["col-6","col-md-4","col-lg-3","col-xl-2","text-center"]
        div.classList.add(...divClasses)
        div.innerHTML = `      <a href="/single-album.html?${item.id}">
                            <div class="card card-spotify">
                                <img src="${item.images[0].url}"
                                    class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">
                                        ${item.name}
                                    </h5>
                                   
                                </div>
                            </div>
                            </a>
                        `
        div.addEventListener('click', () => {
            playSongAlbum(item.id)
        })
        
        categoryContainer.appendChild(div)
    })
}
////////Albums Logic////////////

const Album = {
  name: "",
  year: "",
  number_of_songs: "",
  picture: "",
  loadPicture: function () {
    //load Picture in Artist Page
    let img = document.querySelector(".single-album img");
    img.setAttribute("src", this.picture);
  },
  loadName: function () {
    let name_element = document.querySelector(".single-album h5");
    name_element.textContent = this.name;
  },
  songList: [{ code: "", title: "", duration: "" }],
  loadSongs: function () {
    let song_list = document.querySelectorAll(".song-list tr");
    for (let i = 0; i < song_list.length; i++) {
      song_list[
        i
      ].firstElementChild.nextElementSibling.textContent = this.songList[
        i
      ].title;
      song_list[i].lastElementChild.textContent = this.songList[i].duration;
    }
    console.log(song_list[0].firstElementChild.nextElementSibling.textContent);
    console.log(song_list[0].lastElementChild.textContent);
  },

  playSong_: function () {
    let icons = document.querySelectorAll(".table th");
    let songs = this.songList;
    for (let i = 0; i < icons.length; i++) {
      icons[i].addEventListener("click", function () {
        icons[i].id = i;
        playSong(songs[icons[i].id].code);
      });
    }
  },
};


//fetch featured playlist
const fetchFeatured = () => {
   return fetch(`https://api.spotify.com/v1/browse/featured-playlists`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': JSON.parse(localStorage.getItem('token'))
        
        }
    }).then(res=>res.json())
}


//render featured page

const renderFeatured = (data) => {
    console.log(data)
    let titleContainer = document.getElementById('title-featured');
    let cardsContainer = document.getElementById('container-featured');
    titleContainer.innerHTML = data.message;
    let playlists = data.playlists.items;
    playlists.forEach(playlist => {
        let div = document.createElement('div')
        let divClasses = ["col-6","col-md-4","col-lg-3","col-xl-2","text-center"]
        div.classList.add(...divClasses)
        div.innerHTML = `      <a href="/single-album.html?${playlist.id}">
                            <div class="card card-spotify">
                                <img src="${playlist.images[0].url}"
                                    class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">
                                        ${playlist.name}
                                    </h5>
                                   
                                </div>
                            </div>
                            </a>
                        `
        cardsContainer.append(div)
        
    })

}





//fetch featured releases
const Releases = () => {
    return fetch(`https://api.spotify.com/v1/browse/new-releases`, {
         method: 'GET',
         headers: {
             'Content-Type': 'application/x-www-form-urlencoded',
             'Authorization': JSON.parse(localStorage.getItem('token'))
         
         }
     }).then(res=>res.json())
       .then(releases => {

        let albums = releases.albums.items
        console.log(albums[0].artists[0].id)


        let titleContainer = document.getElementById('title-releases');
    let cardsContainer = document.getElementById('container-releases');
        titleContainer.innerText="New Releases"
        albums.forEach(album => {

            let div = document.createElement('div')
        let divClasses = ["col-6","col-md-4","col-lg-3","col-xl-2","text-center"]
        div.classList.add(...divClasses)
        div.innerHTML = `      <a href="/single-album.html?${album.artists[0].id}">
                            <div class="card card-spotify">
                                <img src="${album.images[0].url}"
                                    class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">
                                        ${album.name}
                                    </h5>
                                   
                                </div>
                            </div>
                            </a>
                        `
        cardsContainer.append(div)


        })


        

       })

    }


//fetch featured playlist
const fetchAlbumAPI = (album_id) => {
   return fetch(`https://api.spotify.com/v1/albums/${album_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': JSON.parse(localStorage.getItem('token'))
        
        }
    }).then(res=>res.json())
}

//render songs
const renderAlbumAPI = (data) => {
    let table = document.getElementById('song-list')
        let tracks= data.tracks.items
    tracks.forEach(track => {
        let tr = document.createElement('tr');
        tr.innerHTML =`<th scope="row" ><i class="fa fa-music" aria-hidden="true"></i>
        <i class="far fa-play-circle" songId="${track.id}"></i>
         </th>
        <td colspan="2">${track.name}</td>
         <td></td>`
        table.append(tr)
    })
  
}


//fetch top artists

const fetchTopArtists = () => {
     return fetch(`https://api.spotify.com/v1/me/top/artists`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': JSON.parse(localStorage.getItem('token'))
        
        }
    }).then(res=>res.json())
}

//render top artists
const renderTopArtists = (favArt) => {
    favArt = favArt.slice(0,6)
    let topArtistsContainer = document.getElementById('top-artists')
    console.log(favArt)
    console.log(topArtistsContainer)
    favArt.forEach(artist => {
        let div = document.createElement('div')
        let divClasses = ["col-6","col-md-4","col-lg-3","col-xl-2","text-center"]
        div.classList.add(...divClasses)
        div.innerHTML = `      

                        <div class="card card-spotify">
                         <a href="albums-fav.html?${artist.id}" class="">
                            <div class="img-albums">
                                <div class="imgAlbum">
                                    <img src="${artist.images[0].url}"
                                        class="card-img-top d-flex" alt="..." />
                                    <div class="play_container">
                                        <i class="far fa-play-circle playFav"
                                            code="7tFiyTwD0nx5a1eklYtX2J?si=t_70sn2rQymwzhU1wOPThg"></i>
                                    </div>
                                    <div class="hearth_container">
                                        <i class="far fa-heart hearthFav"></i>
                                    </div>
                                </div>
                            </div></a>
                            <div class="card-body">
                                <h5 class="card-title">
                                    ${artist.name}
                                </h5>
                               
                            </div>
                        
                        </a>`
        
        topArtistsContainer.append(div)
       
    })
}



// ON WINDOW LOAD

window.onload = function () {
    //activate search functions
    search()

    const queryString = window.location.hash;
    // const urlParams = new URLSearchParams(queryString);
    if (queryString.indexOf('#access_token') != -1) {
        let access_token = queryString.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
        TOKEN = TOKEN + access_token
        localStorage.setItem('token', JSON.stringify(TOKEN))
        // console.log(JSON.parse(localStorage.getItem('token')))

    } else if (queryString.indexOf('#access_token') == -1 && JSON.parse(localStorage.getItem('token')) == null && window.location.href.indexOf("login") == -1) {
        window.location.href = '/login.html'
    }

//render home page

    if (window.location.href.indexOf("index") != -1) {
       
        fetchTopArtists().then(res => {
        console.log(res)
            renderTopArtists(res.items)
           
        })
    }


    
    /////////---------RENDER CATEGORIES-----------//////////////
    
    if (window.location.href.indexOf("categories") != -1) {
        console.log('categories')
        fetchCategories().then(res => {
            console.log(res)
            renderCategories(res)
           
        })
    }
    //GET USER INFORMATION

    fetchUser().then(res => {
        currentUser = {
            name: res.display_name,
            username: res.email,
            avatar: res.images[0]?.url,
            id: res.id,
            product: res.product,
            // playlists:users[0].playlists
        }
        console.log(res)
        spinner?.classList.replace('d-flex', 'd-none')

    }
    )
        .then(res => {
            fetchPlaylists().then(res => {
                currentUser.playlists = res.items
                localStorage.setItem('playLists', JSON.stringify(currentUser.playlists))
                renderPlaylist()


            }
            )
        })
        .then(res => {
  
            renderUsername(currentUser)
            // updatePlaylist(currentUser)
            clearPlaylist()
            renderPlaylist()
            loafFavArt(currentUser)
        })

    /////////---------MOBILE NAV TOGGLE IN INDEX----------//////////////
    hamburger?.addEventListener('click', displayMobileMenu)
    
    //Instantiate Album Object
    if (window.location.href.indexOf("single-album") != -1) {

      
        //     album_id = location.search.substring(1);

        let album_id = location.search.substring(1);
        fetchAlbumAPI(album_id).then(res=>renderAlbumAPI(res))
        
        console.log(album_id)
      
        //     

        //     current_album = Discography.albums[album_id];
        //     Album_instance = Object.create(Album);
        //     Album_instance.name = current_album.name;
        //     Album_instance.year = current_album.year;
        //     Album_instance.picture = current_album.picture;
        //     Album_instance.songList = current_album.songs;
        //     Album_instance.loadPicture();
        //     Album_instance.loadSongs();
        //     Album_instance.playSong_();
        //     Album_instance.loadName();
        //   
    }
   
        /////////---------LOGIN----------//////////////
        //add login event
        loginBtn?.addEventListener('click', login)
        // const currentUser = localStorage.getItem('currentUser')
        // if (JSON.parse(localStorage.getItem('currentUser')) != null) {
        //     currentUser = JSON.parse(localStorage.getItem('currentUser'))
        // } else {
        //     currentUser =users[0]
        // }


   
    
        /////////---------LOGOUT----------//////////////
        logooutBtn?.addEventListener('click', logout)
    
        
        /////////---------PLAY SONGS----------//////////////
        if (albumSongsNodes) {
            [...albumSongsNodes].forEach((album, i) => {
                album.addEventListener('click', () => {
                    playSong(albumQueenBohemian[i])
                })
            })
        }


        /////////---------PLAY ALBUMS----------//////////////
        if (playBtns) {
            [...playBtns].forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    let code = btn.getAttribute('code')
                    playSong(code)
                })
            })
        }

        if (window.location.href.indexOf("index") != -1) {
            spinner.classList.replace('d-flex', 'd-none')

        }
    
 
        /////////---------WHEN I GO TO featured-playlist.html do this-----------//////////////

        if (window.location.href.indexOf("featured-playlist") != -1) {

            fetchFeatured().then(data => {
                renderFeatured(data)
            
            }
            
            )




        }



        /////////---------WHEN I GO TO featured-releases.html do this-----------//////////////


        if (window.location.href.indexOf("featured-releases") != -1) {

            Releases()




        }


        /////////---------RENDER FAV ARTISTS ALBUMS-----------//////////////

   
        if (window.location.href.indexOf("albums-fav") != -1) {
          
        
            let code = location.search.substring(1)
            let artistFiltered = favArt.find(artist => artist.code === code)
            fetchAlbum(code).then(res =>
                currentFavArtist = res
            ).then(res => renderFavArtistsAlbums(artistFiltered, code))
                .then(res => spinner.classList.replace('d-flex', 'd-none')).then(res => {
                    console.log(currentFavArtist)
                })
            

        }
    
        /////////---------RENDER SINGLE CATEGORY PLAYLIST-----------//////////////

   
        if (window.location.href.indexOf("category") != -1) {
          
        
            let category_id = location.search.substring(1)
            fetchSingleCategory(category_id).then(res => {
                renderSingleCategory(res, category_id)
            
            }).then(res => {
                spinner?.classList.replace('d-flex', 'd-none')
            })
        }
      

      
    
    
    
        /////////---------RENDER SEARCH-----------//////////////

   
        if (window.location.href.indexOf("search") != -1) {
            let query = location.search.substring(1)
            fetchSearch(query).then(res =>
                searchResults = res.artists.items
            ).then(res => {
                renderSearchResults(searchResults)
            })
            

        }

        /////////---------RENDER FAV ARTISTS-----------//////////////
    
        if (window.location.href.indexOf("artists") != -1) {
    
            fetchArtists().then(res => {
           
                favArt = res.items
                renderFavArtists()
            })
        }


    
        /////////---------PLAYLIST-----------//////////////
        //create a new lateral playlist
        createPlaylistBtn?.addEventListener('click', createPlaylist)
        //display playlist page
        //I'm looking for the playlist name so that I can display it in the playlist page.
        if (location.search.substring(1)) {
            let queryString = location.search.substring(1);
            let playListSelected = queryString.split("|")[0]
            console.log(playListSelected)
            //when the window load, I render the title of the playlist

            playListTitle.innerHTML = playListSelected

            // playListTitle?.innerHTML = playListSelected

            playLists.push(playListSelected)
        
        }
        /////////---------LIKED ALBUMS-----------//////////////
        [...favIcon].forEach(icon => {
            icon.addEventListener('click', () => {
                icon.classList.toggle('fas');
                const bedge = document.getElementById('bedge')
                bedge.classList.toggle('d-none')
            })

     
        })
        
       

    
    


    }
