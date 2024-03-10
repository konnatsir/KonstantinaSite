const req = new XMLHttpRequest();

req.open('GET', './json/data.json');
req.responseType = 'json';


req.addEventListener('readystatechange', () => {
    if (req.readyState === XMLHttpRequest.DONE) {
        switch (req.status) {
            case 200:
                const about_data = document.getElementById('about-import-data');

                for (let data of req.response) {
                    const h1 = document.createElement('h1');
                    const p = document.createElement('p');
                    h1.textContent = `${data.title}`;
                    p.textContent = `${data.text}`;
                    about_data.appendChild(h1);
                    about_data.appendChild(p);
                }


                break;
            case 404:

                console.error('Not Found');

                break;
        }
    }

});

req.send();