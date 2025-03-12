export default function Background(){
    return(
        <div className="relative w-full max-w-lg">
            <div id="first shape" className="animate-blob absolute top-0 -left-4 size-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-80"></div>
            <div id="second shape" className="animate-blob animation-delay-2000 absolute top-0  -right-4 size-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-80"></div>
            <div id="third shape" className="animate-blob animation-delay-4000 absolute top-0 -bottom-4 left-20 size-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-80"></div>
        </div>
    )
}