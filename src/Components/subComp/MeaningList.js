export default function MeaningList({obj}){
    return (
        <div>
            {
                obj.map(e => e.meanings.map(e => e.definitions.map(def => (
                    <div key={def.definition}>
                        <li className="py-1">{def.definition}</li>
                    </div>
                ))))
            }
        </div>
    )
}
