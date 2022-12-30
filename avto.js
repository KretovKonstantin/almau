const container = document.querySelector('#container')
const GetRes = async(url) => {
    const res  = await fetch(url);
    if(!res.ok){
        throw new Error('status: ${res.status}');
    }
    return await res.json()
}
GetRes('users.json')
    .then(data=> {
        console.log(data);
        for(let key in data) {
            const phone = document.createElement("div");
            const model = data[key].title;
            const price = data[key].desk;

            phone.innerHTML = `<div class="phone">
                <p>Модель: ${model}</p>
                <h4>Цена: ${price}</h4>
                </div>`
            container.append(phone)
        
        }
    })