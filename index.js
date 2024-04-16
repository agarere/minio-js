

// const uploadFile = () => {
//   minioClient.fPutObject('mybucket',
//     'testfile.txt',
//     './testfile.txt',
//     {'Content-Type': 'application/text'},
//     function (error, objInfo) {
//       if (error) return console.log('Error: ', error)

//       console.log("Object: ", objInfo)
//     }
//   )
// }

// // makeBucket()

// uploadFile()

import MinioClient from './lib/minio/MinioClient.js'

const minioClient = new MinioClient({
  endPoint: 'localhost',
  port: 9000,
  useSSL: false,
  accessKey: 'E3MZdxTMz4gjVgzJPv0Y',
  secretKey: 'gO7tZj5fNESZrvSSYdZQAs5sLU6ZXCOXT70hdugW'
})

// minioClient.makeBucket('mysecondbucket')
//   .then(bucket => {
//     console.log('Created bucket is ' + bucket)
//   })
//   .catch(error => {
//     console.log("There is something wrong, Error: ", error)
//   })

// minioClient.listBuckets()
//   .then(buckets => {
//     console.log("Your Buckets: ", buckets)
//   })
//   .catch(error => {
//     console.log("There is something wrong, Error: ", error)
//   })


import * as fs from 'fs'
const file = './testfile.txt'
const fileStream = fs.createReadStream(file)
fs.stat(file, function (err, stats) {
  if (err) {
    return console.log(err)
  }

  minioClient.uploadFileStream('mybucket', 'stream-file-test.txt', fileStream, stats.size)
    .then(objInfo => {
      console.log("Uploaded File objInfo: ", objInfo)
    })
    .catch(error => {
      console.log("There is something wrong, Error: ", error)
    })
})


