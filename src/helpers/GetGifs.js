

export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=OYM8Xmam1Goi4RzJry2i7UHh6g2N1PFo`;
    const resp= await fetch(url);
    const {data}= await resp.json();

    const gifs = data.map(img => {
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })
    return gifs;
}