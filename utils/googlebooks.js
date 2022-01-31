const axios = require('axios')

module.exports = async (phrase) => {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })

    
    let myVar={
        data: response.data,  
        status: response.status,  
        statusText: response.statusText,  
        headers: response.headers, 
        requestHeader: response.config.headers 
    } 
    return JSON.stringify(results.data);
}

/*  console.log(results.data);
    console.log(results.status);
    console.log(results.statusText);
    console.log(results.headers);

        const results = await axios({
        method: 'get',
        url: 'https://www.googleapis.com/books/v1/volumes',
        params: {
            format: 'json',
            q: `${phrase}`,
        },
    })*/
