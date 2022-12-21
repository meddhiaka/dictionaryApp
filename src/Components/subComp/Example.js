export default function Example({obj}){
    return (
        <div>
            {
                obj.map(e => e.meanings.map(e => e.definitions.map(def => (
                    <div key={def.example}>
                        <li className="py-1">{def.example}</li>
                    </div>
                ))))
            }
        </div>
    )
}
