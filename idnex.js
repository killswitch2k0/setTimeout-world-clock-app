//model design

const clocksConfig = [
    {
        cityName: 'Jerusalem',
        gmtOffset: +2
    },

    {
        cityName: 'London',
        gmtOffset: 0
    },

    {
        cityName: 'New York',
        gmtOffset: -5
    },
];

//creat a new list every second

function createList (clocksConfig) {
    let list = document.createElement('ul');
    //think how to do for one item and then put in forEach to make it for many
    clocksConfig.forEach(item => {
        let items = document.createElement('li');
        items.textContent = `${item.cityName}: ${getTime(item).toLocaleTimeString()}`;
        list.append(items);
    });
    
    return list;
}

//calculate the time for one city

function getTime (city) {
    let time = new Date();
    time.setHours(time.getUTCHours() + city.gmtOffset);
    return time;
}

//make clock tick - repeat the timer

//what happens every tick

function tick() {
    //don't append to div because it will spam the UI, use replace during tick instead
    div = document.getElementById('clocks').replaceChildren(createList(clocksConfig));
    createList(clocksConfig);
    setTimeout(tick, 1000);
}

//make the clock tick
tick();