document.addEventListener('DOMContentLoaded',()=>{

// This adds an eventlistener on click to perform the callback functions
    document.getElementById('form').addEventListener('submit',(e)=>{
        e.preventDefault();
        movienameDisplay();
    })
})
// this function runs the display on the right and left with different loop
function movienameDisplay(){
// This part fetches the data from the mock server and runs a loop to find the //specific data
    const api = 'http://localhost:3000/films'
    
    fetch(api)
    .then((resp) => resp.json()
    )
    
    .then((data) => {
        const mainContainer = document.getElementById('main')
        const inpurData = document.getElementById('input').value
        data.find(element => {

            const elementHolder = document.createElement('p')
            const runtimeHolder = document.createElement('p')
            const posterHolder = document.createElement('p')
            const a = document.createElement('a')
            const showtimeHolder = document.createElement('p')
            const availableTickets = document.createElement('p')
            if(element.title === inpurData){
                console.log(element.title)
                elementHolder.innerText = element.title
                runtimeHolder.innerText = element.runtime
                posterHolder.innerText = element.poster
                a.href = "https://www.gstatic.com/tv/thumb/v22vodart/23342/p23342_v_v8_ab.jpg"
                a.innerText = posterHolder
                showtimeHolder.innerText = element.showtime

                const capacity = element.capacity
                const ticketsSold = element.tickets_sold

                availableTickets.innerText = capacity - ticketsSold

            mainContainer.appendChild(elementHolder)
            mainContainer.appendChild(runtimeHolder)
            posterHolder.appendChild(a)
            mainContainer.appendChild(posterHolder)
            mainContainer.appendChild(showtimeHolder)
            mainContainer.appendChild(availableTickets)
            }else{
                // alert('not found')
            }
            
        });
        // This part does the loop to display content on the left
        data.forEach(element => {
            const movielist = document.getElementById('list')
            const movieTitle = document.createElement('h3')
            const runtime = document.createElement('li')
            const poster = document.createElement('li')
            const showtime = document.createElement('li')
            const availableTickets = document.createElement('li')
            const button = document.createElement('button')
            const capacity = element.capacity
                const ticketsSold = element.tickets_sold


            runtime.innerText = `Runtime: ${element.runtime}` 
            movieTitle.innerText = element.title
            poster.innerHTML = `<li><a href=${element.poster}>poster</a></li>`
            showtime.innerText = `showtime: ${element.showtime}`
            let availableTicket = capacity - ticketsSold
            availableTickets.innerText = `AvailableTickets: ${capacity - ticketsSold}`
            button.innerText = `Buy movie`
            
//This handles the vote button to do something upon user click
            button.addEventListener('click',()=>{
                // e.preventDefault()
                console.log('Mariam ni deepstate')
                const updatedTicketList = availableTicket--
            
                if (availableTicket >= 0){
                        for(let i = availableTicket ; i >= availableTicket; i--){

                    // updatedTicketList = availableTicket[i]
                    console.log(availableTicket)
                    availableTickets.innerText = `Available Tickets:${availableTicket}`
                }
                }else{
                    alert('No more tickets')
                    console.log('No more tickets')
                }


                // if(availableTicket > 0){
                //     availableTickets.innerText = `Available Tickets:${updatedTicketList}`
                // }else{
                //     `No more tickets`
                // }
            })



            movielist.appendChild(movieTitle)
            movielist.appendChild(runtime)
            movielist.appendChild(poster)
            movielist.appendChild(showtime)
            movielist.appendChild(availableTickets)
            movielist.appendChild(button)
        });
    })
}

