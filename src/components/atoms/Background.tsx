export default function Background() {
    return (
        <div className="relative w-full max-w-lg">
            <div id="first shape" className={`animate-blob absolute top-0 -left-4 size-10 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 `}></div>
            <div id="second shape" className={`animate-blob animation-delay-2000 absolute top-0 -right-4  size-10 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 `}></div>
            <div id="third shape" className={`animate-blob animation-delay-4000 absolute -bottom-4 left-20  size-10 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 `}></div>
        </div>
    );
}
