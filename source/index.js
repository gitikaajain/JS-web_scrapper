const PORT=5000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const call = express()
const url = 'https://timesofindia.indiatimes.com/'

axios(url)
    .then(response =>  {
        const html=response.data
        const $ =cheerio.load(html)
        const articles=[]

        $('._1Fkp2 ',html).each(function()
        {
            const title = $(this).text()
            const url=$(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch(err=> console.log(err))

call.listen(PORT,() => console.log('server running on PORT ${PORT}'))
