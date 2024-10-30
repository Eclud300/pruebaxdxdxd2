function getRandomImage() {
    $.get("https://dog.ceo/api/breeds/image/random", function (data) {
        $('#dogImage').attr('src', data.message)
    });
}

