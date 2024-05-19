export function Checkbox ({checked, onChange, label, id }){
    return <div className="">
     <input type='checkbox' 
     className=" "
     checked = {checked}
     onChange = {(e)=> onChange (e.target.checked)}
     />
     <label htmlFor={id}className="visible text-pink-600 text-sm">{label}</label>
    </div>
}