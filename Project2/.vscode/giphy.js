


$(document).ready(()=>{
    let apiKey = 'HYVVTegN2siClzVYCBH6LKLKKkoyL8ZH&q';
    $("#submit").click(()=>{
        let userInput = $("#search").val()
        // alert(userInput)
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${userInput}&limit=2`
        })
        .done((res)=>{ 
            let giphy = res.data;
            $.each(giphy, (i, gif)=>{
                let imageUrl = gif.images.fixed_height.url;
                console.log(i, imageUrl);
                $("body").append(`<img src="${imageUrl}" alt="giphy image"/>`)
            })          
        })
    })
       
})