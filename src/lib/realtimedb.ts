import { database } from 'firebase-admin'

export interface DataEffect {
    label: string
    userName: string
    share: boolean
}
export class MessageRespone {
    constructor(public message: string, public status: number = 200) {}
}

export interface FileDetail {
    filename: string
    path: string
    type: string
    size: number
    public: boolean
}

export class RealTimeDataBase {
    private nameRef: string
    private childName: string
    public setNameRef = (name_ref: string) => {
        this.nameRef = name_ref
        return this
    }
    public setChildName = (child_name: string) => {
        this.childName = child_name
        return this
    }
    constructor(private db: database.Database) {}

    public addEffectToDataBase = (
        fileDetail: FileDetail
    ): Promise<MessageRespone> => {
        return new Promise((res, rej) => {
            if (this.nameRef && this.childName) {
                const ref = this.db.ref(`${this.nameRef}/`)
                const effectRef = ref.child(this.childName)
                effectRef
                    .child(fileDetail.filename.split('.')[0])
                    .set(fileDetail)
                    .then(value => {
                        const messageString = `Add New File to server success.`
                        res(new MessageRespone(messageString, 200))
                    })
                    .catch(err => {
                        const messageErr = `Something is error when save to database: ${err}`
                        rej(new MessageRespone(messageErr, 500))
                    })
            } else {
                const messageText =
                    'You have to setNameRef and setChildName of firebase before use this method.'
                const messageErr = new MessageRespone(messageText, 404)
                rej(messageErr)
            }
        })
    }
}
