console.log("Let's get this party started!");
const $gifDiv = $("#gifDiv");
const $search = $("#search")

function gifRes(res) {
    let numGifs = res.data.length;
    if (numGifs) {
        let random = Math.floor(Math.random() * numGifs);
        let $newGif = $("<img>", {
            src: res.data[random].images.original.url
        });
        $gifDiv.append($newGif)
    }
    
}


$("form").on("submit", async function(evt) {
    evt.preventDefault();

    let searchEntry = $search.val();
    $search.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchEntry,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    gifRes(response.data)
})

$("#delete").on("click", function() {
    $gifDiv.empty();
});
