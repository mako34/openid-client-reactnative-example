

module.exports = ({username, password}, callback) => {

    var details = {
        'grant_type' : 'password',
        'username': username,
        'password': password,
        'scope': 'wisr.appbff.api IdentityServerApi offline_access wisr.payments',
        'client_id' : 'wisrappbffclient'
    }

    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");


    const URL = 'https://test-api-appbff.wisr.tech/connect/token';
    const options = {
        method: 'POST',
        headers: {
            Authorization: 'Basic d2lzcmFwcGJmZmNsaWVudDppU3FYQ3lCNDBLMHphWS1Fcld2NzNkMHRhWU5lUDVVSHd2bEpreWRi'
        },
        body: formBody

    }
    fetch(URL, options)
        .then(res => res.json())
        .then(res => callback(res))
        .catch(err => console.log(err));
}