export default function FilterComponent({text, titulo}) {
    return (
        <div className="flex  accent-pink-700 gap-5">
            <p className="font-bold pt-8">{titulo}</p>
            <div>
            <input className="size-5" type="checkbox"  />
            <label className="text-base ml-2">{text}</label>
            </div>
                
        </div>
    )
}