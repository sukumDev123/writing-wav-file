# Guitar Effect APi's

> this is for handle files when some files are writen.

```
    POST /wave/write_file
```

for handle write file and save name file for show on client.

<!-- prettier-ignore -->
| attribute | type   | description |
| --------- | ------ | ---------------------------------------------------------------------------------------------------- |
| blob      | Blob   | This is a __FormData__ from client side to server type is __FromData__ is Blob to make file sound **.wav** |
| name_user | String | The name of user inside **req.body**, but you have to put inside __Formdata__ form client side.                                                            |
