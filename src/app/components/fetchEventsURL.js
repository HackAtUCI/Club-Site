import axios from 'axios';

async function fetchEventsURL() {

    await axios
    .get('https://graph.facebook.com/v7.0/me',{
        params: {
            fields: 'events{cover}',
            access_token: 'EAAEX51fvdSUBAFP3sHPuK0fEG1S93RqxnfAZB9Yp6aM74VZC2KE5JYfLnE9v73dLbBIzaZCN9KOgBeGVEBpEsxFZAC9zQRdk9IE9NGCCZBsWZC2ZADvP8OMWV4OSrJBXvmpdNtn5ZBfXs6GRlMLtrtbszPK4KBRA2OzjQ7DYbjG1ZC1WfJwFd9JCZAYH2IrWn6HlQZD'
        }
        
    })
    .then( response => {
        console.log(response.data.events.data);
        return response.data.events.data;
    })
}

fetchEventsURL();

export default fetchEventsURL;
