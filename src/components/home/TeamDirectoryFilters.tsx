export default function TeamDirectoryFilters() {
    return (
        <nav className="flex flex-row gap-8">
            <button className="color-primary text-white bg-black-400 border border-gray-500 hover:border-orange-500 font-color-black padding-30 w-fit px-4 py-2 rounded-4xl">ALL</button>
            <button className="color-primary text-white bg-black-400 border border-gray-500 hover:border-orange-500 font-color-black padding-30 w-fit px-4 py-2 rounded-4xl">EAST</button>
            <button className="color-primary text-white bg-black-400 border border-gray-500 hover:border-orange-500 font-color-black padding-30 w-fit px-4 py-2 rounded-4xl">WEST</button>
        </nav>
    )
}