
let url = require('url')

let parsedUrl=url.parse(`https://airindia.com/fares/calculate?from=delhi&to=detroit`, true)
console.log(parsedUrl)


// 3. console query string from parsed url
console.log(parsedUrl.query)

// 4. console pathname
console.log(parsedUrl.pathname)

// 5. console protocol
console.log(parsedUrl.protocol)

// 6. use parse method from url module to parse query string as well.
console.log(url.parse(`https://airindia.com/fares/calculate?from=delhi&to=detroit`,true).query)