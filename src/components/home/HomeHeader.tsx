export default function HomeHeader() {
    return(
        <header className="flex flex-col gap-8">
            <h1>NBA HUB</h1>
            <p>30 teams · their stars · their numbers</p>
            <a className="transition-transform duration-300 hover:scale-105 color-primary text-black font-bold bg-orange-400 font-color-black padding-30 w-fit p-4 rounded-4xl" href="/build">BUILD YOUR DREAM FIVE</a>
        </header>
    )
}