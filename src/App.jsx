//https://www.youtube.com/watch?v=YnnQymvBrY8&ab_channel=TylerPotts
//13:40

function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-6 flex-1 text-center">

        <h2 className="text-2xl md:text-4xl lg:text-4xl uppercase">
          Welcome to
        </h2>

        <h1 className="text-3xl md:text-5xl lg:text-5xl font-black uppercase mb-8">
          Finance Co-pilot
        </h1>

        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-black bg-opacity-30 w-fit mx-auto mb-8 rounded-full">
          420,698 members
        </div>

        <form action="https://www.getrevue.co/profile/swpr10x/add_subscriber" method="post" target="_blank">
          <div class="flex flex-col md:flex-row justify-center mb-4">

            <input 
            placeholder="Email address" 
            type="email" 
            name="member[email]" 
            className="text-lg md:text-2xl placeholder:text-white placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0 outline-none"  
            />

            <input 
            type="submit" 
            value="Sign Up" 
            name="member[subscribe]"
            className="bg-primary rounded-full md:rounded-tl-none md:rounded-bl-none text-lg md:text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 course-pointer hover:opacity-75 duration-150"
            />
          </div>

          <div className="opacity-75 italic">
            By subscribing, you agree with Finance Co-Pilot’s <a  target="_blank" href="https://www.getrevue.co/terms" className="hover:opacity-80 duration-150">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy" className="hover:opacity-80 duration-150">Privacy Policy</a>.
          </div>
        </form>






      




      </main>

      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">  
        <p>Built with 💙 by Samuel</p>
        <div className="flex -mx-6">
          <a href="#" className="mx-3 hover:opacity-80 duration-150">About</a>

          <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a>

          <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
          


        </div>
        
      </footer>
      
    </div>
  )

}

export default App
