type InputProps = {
    value: string
    onChange: (e: string) => void
    label: string
    placeholder: string
}

export function Input({ onChange, label, value, placeholder } : InputProps){
    return <div className="flex flex-col gap-2">
        <label className="text-gray-500 text-xs">{label.toUpperCase()}</label>
        <input 
            placeholder={placeholder}
            className="border border-gray-300 p-3 rounded-lg"
            value={value} 
            type="text" 
            onChange={(e) => onChange(e.target.value)}/>
    </div>
}