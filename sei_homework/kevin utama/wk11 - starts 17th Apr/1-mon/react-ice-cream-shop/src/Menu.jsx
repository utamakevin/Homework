import { useEffect, useState } from 'react'
import Data from './data.json'
import IceCream from './IceCream'


export default function Menu() {
    const [data, setData] = useState([])
    const i = 4

    useEffect(() => {
        setData(Data)

    }, [])

    // console.log(data)
    return (
        {data.map(menu => (
            <section>
                <h2>{menu.name}</h2>
                <h3>{menu.base} ice cream with {menu.topping} to top</h3>
                {menu.hasChocolateChips && 
                    <div>
                        <p>comes with choc chips</p>
                    </div>
                }
            </section>
        ))}

        )
}
