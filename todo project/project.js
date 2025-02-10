const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin ,
    output: process.stdout
})

const todos = [];  // add task


// creatin for show menu in terminal
const showMenu = () => {
   console.log("\n1: Add a Task")
   console.log("2: View Tasks")
   console.log("3: Exit")

   // user konsa opton choose karega wo handleInput handle karega 
   rl.question("Choose an Option: " , handleInput)

}

// (option) jo user ne select kiya hoga
const handleInput = (option) => {
        if(option === "1"){
            rl.question("Enter the Task: " , (task) => {
                /// jo be yaha se task mila hai usko push kardo todos array mein
                todos.push(task);
                console.log("Task added: " , task);
                showMenu()
            })
        }

        else if(option === '2'){
            console.log("\n Your Todo Lists");
            todos.forEach( (task , idx) => {
                console.log(`${idx+1} ${task}`)
            })
            showMenu()
        }

        else if(option === '3'){
            console.log("Good Bye")
            rl.close()
        }
        else{
            console.log("Invalid Option , Please try again")
            showMenu()
        }
}

showMenu()