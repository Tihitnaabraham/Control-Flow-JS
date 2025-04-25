//1
const deliveryTypes = (days) => {
    days.forEach((day) => {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "wednsday":
            case "Thursdat":
            case "Friday":
                console.log(`${day} Regular day`)
                break;
            case "Saturday":
                console.log(`${day} Special delivery`)
                break;
            case "Sunday":
                console.log(`${day} No delivery`)

                break;
            default:
                console.log("Day is not found")
        }
    });
}
const days = ["Monday", "Tuesday", "Saturday", "Sunday"]
deliveryTypes(days)
//2
const bookStatus=(status)=>{
        for (i = 0; i < status.length; i++) {
            if (status[i] == "available") {
                console.log(`${status[i]} Ready to lend`);
            }
            else if (status[i] == "borrowed") {
                console.log(`${status[i]} Checked out`);
    
            }
            else {
                console.log(`${status[i]} Unknown status `);
            }
    
    
        }
    };
    status = ["available", "borrowed", "not found"];
    bookStatus(status);

    //3

    function customerAges(ages) {
        for (let i = 0; i < ages.length; i++) {
            if (ages[i] >= 18) {
                console.log("Adult");
            }
            else {
                console.log("Minor");
            }
        };
    }
    const ages = [45, 3, 5, 40, 38, 56];
    customerAges(ages)

    //4

    const displayCount = () => {
        let live = 5;
        while (live > 0) {
            console.log(`You have ${live} lives left`)
            live--;
        }
    }
    displayCount(5);

    //5
    const getFeedback=(Feedbacks)=>{
       let i=0
        do{
            i++;
            console.log(`Feedback of customers:${Feedbacks[i]}`);
            
        }
        while(i<=Feedbacks.length );
        
            
       }
    
    getFeedback(["Good","I liked","Keep going","Bad"]);

    //6

    const loginStatus=(status)=>{
        for (i = 0; i < status.length; i++) {
            if (status[i] == "loggined in") {
                console.log("Wellcome back");
            }
        
            else {
                console.log("please login");
            }
    
    
        }
    };
    status = ["loggined in", "log out", "loggined in"];
    loginStatus(status);

    //7

    const ticketPriority=(priorities)=>{
        priorities.forEach((priority) => {
            switch (priority) {
                case "low":
                    console.log(`${priority} Respond with in a week`)
                    break;
                case "medium":
                    console.log(`${priority} Respond with in a day`)
                    break;
                case "high":
                    console.log(`${priority} Respond with in an hour`)
    
                    break;
                default:
                    console.log("Unknown")
            }
        });
    }
    let priority=["low","high","medium","unknown"]
    ticketPriority(priority)

    //8

    const countDown = () => {
        let second = 10;
        while (second >= 0) {
            console.log(`Time left ${second} second`)
            second--;
        }
    }
countDown()

