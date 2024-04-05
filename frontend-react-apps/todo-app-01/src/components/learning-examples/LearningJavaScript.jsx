const person = {
     name: 'Puneet',
     address: {
          line1: 'T4-203, Runwal Forests',
          city: 'Mumbai',
          State: 'Maharashtra',
          country: 'IN',
     },
     profiles: ['twitter','linkedin','istagram'],
     printProfile: ()=>{
          console.log(person.profiles[0])
     },
     prntProfiles: ()=>{
          person.profiles.map(
               profile => console.log(profile)
          )
     }
     
}

export default function LearningJavaScript() {
     return (
          <>
               <div>{person.name}</div>
               <div>{person.address.line1}</div>
               <div>{person.address.city}</div>
               <div>{person.address.State}</div>
               <div>{person.address.country}</div>
               <div>{person.profiles[0]}</div>
               <div>{person.printProfile()}</div>
               <div>{person.prntProfiles()}</div>
          </>
     )
}
