import Pusher from "pusher"
import ClientPusher from "pusher-js"

export const serverPusher = new Pusher({
    appId: "1515769",
    key: "915c6b6626af3c3ca65a",
    secret: "23c81d6bfa48243a7333",
    cluster: "eu",
    useTLS: true
})

export const clientPusher = new ClientPusher('915c6b6626af3c3ca65a', {
    cluster: 'eu',
    forceTLS: true
})