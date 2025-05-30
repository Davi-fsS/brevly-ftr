import { WarningIcon } from "@phosphor-icons/react"

type InputProps = {
    value: string
    onChange: (e: string) => void
    label: string
    placeholder: string
    error: boolean
    errorMessage?: string
}

export function Input({ onChange, label, value, placeholder, error, errorMessage } : InputProps){
    return  <div className="flex flex-col-reverse gap-2">
    {
        error && errorMessage && <div className="flex flex-row items-center gap-1">
            <WarningIcon color="#B12C4D"/>
            <span className="text-gray-500 text-sm">{errorMessage}</span>
        </div>
    }
    <input
      placeholder={placeholder}
      className={`py-3 px-4 rounded-lg peer ${error ? "border-2 border-red-500 focus:border-red-500" : "border border-gray-300 focus:border-2 focus:border-blue-base"}`}
      value={value}
      type="text"
      onChange={(e) => onChange(e.target.value)}
    />
    <label className={`text-xs ${error ? "text-danger font-bold peer-focus:text-danger" : "text-gray-500 font-bold peer-focus:text-blue-base"}`}>
      {label.toUpperCase()}
    </label>
  </div>
}