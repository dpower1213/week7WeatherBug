function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    let city = document.getElementsByName('city')[0].value
    doAPICall(city)
}

let mybutton = document.getElementById('button1')
mybutton.addEventListener('click', (event)=> handleSubmit(event))


async function doAPICall(city){
    let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=910bc8638650c2c6e7c2c582ac90d7ff`)
    
    console.log(result.data)
    data=result.data
    
    tbody = document.getElementsByTagName('tbody')[0];
    tr=document.createElement('tr');
    tbody.appendChild(tr);
    
    td=document.createElement('td');
    td.innerText = data.main.temp+ "  F";
    tr.appendChild(td);
    
    tbody = document.getElementsByTagName('tbody')[1];
    tr=document.createElement('tr');
    tbody.appendChild(tr);
    
    td=document.createElement('td');
    td.innerText = data.main.temp_min+ "  F";
    tr.appendChild(td);
    
    tbody = document.getElementsByTagName('tbody')[2];
    tr=document.createElement('tr');
    tbody.appendChild(tr);
    
    td=document.createElement('td');
    td.innerText = data.main.temp_max+ "  F";
    tr.appendChild(td);
    
    tbody = document.getElementsByTagName('tbody')[3];
    tr=document.createElement('tr');
    tbody.appendChild(tr);
    
    td=document.createElement('td');
    td.innerText = data.main.humidity+ "  %";
    tr.appendChild(td);
    
    tbody = document.getElementsByTagName('tbody')[4];
    tr=document.createElement('tr');
    tbody.appendChild(tr);
    
    td=document.createElement('td');
    td.innerText = data.weather[0].description;
    tr.appendChild(td);
};