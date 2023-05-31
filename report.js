const newman = require('newman');
 
newman.run({
    //collection: require('./collection/postmanautomation.json'),
    collection:'https://api.postman.com/collections/16896439-482a54f6-2389-4229-9c7e-e502ec05141b?access_key=PMAT-01H1SA3MBXHXJGNGPMBWE3E1ZN',
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});