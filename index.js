import 'dotenv/config'
import * as fs from 'fs'
import MinioClient from './lib/minio/MinioClient.js'

const minioClient = new MinioClient({
  endPoint: process.env.ENDPOINT,
  port: 9000,
  useSSL: false,
  accessKey: 'E3MZdxTMz4gjVgzJPv0Y',
  secretKey: 'gO7tZj5fNESZrvSSYdZQAs5sLU6ZXCOXT70hdugW'
})

/** 
 * MAKE BUCKET
 */
// minioClient.makeBucket('mysecondbucket')
//   .then(bucket => {
//     console.log('Created bucket is ' + bucket)
//   })
//   .catch(error => {
//     console.log("There is something wrong, Error: ", error)
//   })

/**
 * LIST ALL BUCKETS
 */
// minioClient.listBuckets()
//   .then(buckets => {
//     console.log("Your Buckets: ", buckets)
//   })
//   .catch(error => {
//     console.log("There is something wrong, Error: ", error)
//   })

/**
 * UPLOAD FILE
 */
// const file = './testfile.txt'
// const fileStream = fs.createReadStream(file)
// fs.stat(file, function (err, stats) {
//   if (err) {
//     return console.log(err)
//   }

//   minioClient.uploadFileStream('mybucket', 'stream-file-test.txt', fileStream, stats.size)
//     .then(objInfo => {
//       console.log("Uploaded File objInfo: ", objInfo)
//     })
//     .catch(error => {
//       console.log("There is something wrong, Error: ", error)
//     })
// })

/**
 * DOWNLOAD FILE
 */
var size = 0
minioClient.downloadFileStream('mybucket', 'testfile.txt')
  .then(dataStream => {
    dataStream.on('data', function (chunk) {
      size += chunk.length
      console.log('chunk: ', chunk)
    })
    dataStream.on('end', function () {
      console.log('End. Total size = ' + size + ' Byte')
    })
    dataStream.on('error', function (err) {
      console.log(err)
    })
  })
  .catch(error => {
    console.log("There is something wrong, Error: ", error)
  })


