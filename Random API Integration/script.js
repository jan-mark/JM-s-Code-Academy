async function getDog(){
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    document.getElementById('dogImage').src = data.message;
}

async function getCat(){
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    document.getElementById('catImage').src = data[0].url;
}

async function getQuotes() {
    try {
        const response = await fetch('https://inspirobot.me/api?generate=true');
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.text();
        console.log("Fetched Quote Image URL:", data);
        document.getElementById('quotesImage').src = data;
    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}
