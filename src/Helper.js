export async function obtenerDatos(user, cantidad) {   
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e92ca7e4bfmsh122e917a386b669p10b184jsna19153164a89',
            'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
        }
    };

    let array = [];

    try {
        user = user.replace('@', '');
        let url = 'https://twitter154.p.rapidapi.com/user/tweets?username=' + user +'&limit='+ cantidad
        let response = await fetch(url, options);
        let resultado = await response.json();
       // console.log(resultado);
        // Por cada tweet, guardo su ID, fecha.
        resultado.map( item => {
            array.push({texto:item.text,
                        media_url:item.media_url,
                        id:item.tweet_id,
                        fecha:item.creation_date,
                        nombre:item.user.name.toString(),
                        fotoURL:item.user.profile_pic_url.toString()
            });
        })

        return array;
    } catch(err) {
      alert('¡Usuario invalido!');
    }
  }