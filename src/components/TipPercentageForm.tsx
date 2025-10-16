import type { Dispatch, SetStateAction } from "react"


const tipOptions = [
    { id: 'tip-0', label: '0%', value: 0 },
    { id: 'tip-1', label: '5%', value: 0.05 },
    { id: 'tip-2', label: '10%', value: 0.1 },
    { id: 'tip-3', label: '15%', value: 0.15 },
    { id: 'tip-4', label: '20%', value: 0.2 },
]

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>
    tip?: number
}

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="text-2xl text-center justify-center">Tip Percentage</h3>
            <div className="m-2">
                <ul className="grid grid-cols-5 items-center w-full">
                    {tipOptions.map(option => (
                        <li key={option.id} className="flex justify-center">
                            <label htmlFor={option.id}>
                                <input
                                    type="radio"
                                    name="tip"
                                    value={option.value}
                                    id={option.id}
                                    onChange={e => setTip(Number(e.target.value))}
                                    className="m-2"
                                    checked={tip === option.value}
                                />
                                {option.label}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
