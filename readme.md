# Guitar Effect APi's

> this is for handle files when some files are writen.

```
    POST /wave/write_file
```

for handle write file and save name file for show on client.

<!-- prettier-ignore -->
| attribute | Type   | Description |
| --------- | ------ | ---------------------------------------------------------------------------------------------------- |
| blob      | Blob   | This is a form data from client side to server type is from data is Blob to make file sound **.wav** |
| name_user | String | The name of user inside **req.body**                                                             |
