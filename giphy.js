$(document).ready(function () {
    fetchRandomGiphys();
  });

$(document).ready(()=>{
    let apiKey = 'HYVVTegN2siClzVYCBH6LKLKKkoyL8ZH&q';
    $("#submit").click(()=>{
        $("#giphys").empty();
        let userInput = $("#search").val()
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${userInput}&limit=30`
        })
        .done((res)=>{ 
            let giphy = res.data;
            displayGiphy(giphy);
           
        })
    })
       function displayGiphy(giphy) {
        $.each(giphy, (i, gif)=>{
            let imageUrl = gif.images.fixed_height.url;
            console.log(i, imageUrl);
            $("#giphys").append(`<img src="${imageUrl}" alt="giphy image"/>`)
        })          
       }
})   

function fetchRandomGiphys() {
    const apiKey = 'HYVVTegN2siClzVYCBH6LKLKKkoyL8ZH&q'; 
    const giphyCount = 33; 
  
    for (let i = 0; i < giphyCount; i++) {
      fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&rating=g`)
        .then(response => response.json())
        .then(data => {
          const imageUrl = data.data.images.fixed_height.url;
          $("#random-gifs").append(`<img src="${imageUrl}" alt="random GIF" />`);
        })
        .catch(error => console.error('Error fetching Giphy:', error));
    }
  }
  

  
     
