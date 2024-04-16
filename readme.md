## Minio Docker Install

```
docker run -p 9000:9000 -d -p 9001:9001 -e "MINIO_ROOT_USER=minio99" -e "MINIO_ROOT_PASSWORD=minio123" -v ~/minio/data:/data quay.io/minio/minio server /data --console-address ":9001"
```