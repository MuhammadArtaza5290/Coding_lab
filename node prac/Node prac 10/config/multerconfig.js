const multer = require('multer')
const path = require('path')
const crypto = require('crypto')
//diskstorage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads')
  },
  filename: function (req, file, cb) {
   crypto.randomBytes(12, function(err, name){
    const fn = name.toString('hex') + path.extname(file.originalname)
    cb(null, fn)
   })
  }
})


// export upload variable
const upload = multer({ storage: storage })

module.exports = upload;

//  randomBytes(12) 12 bytes generate  kar rha ha. Har file ka naya random naam banaya ja raha hai.

// crypto random data deta hai → hex me convert hota hai.

// File ka original extension lagaya jata hai.

// Fir multer ko ye naya naam diya jata hai via callback.