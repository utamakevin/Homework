import { useEffect, useState } from 'react'
import Data from './data.json'
import './Menu.css'


export default function Menu() {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(Data)

    }, [])

    return (
        <main className="main">
        {data.map(menu => (
            <section key={menu.name} className="menu-wrapper">
                <h2>{menu.name}</h2>
                <h3>{menu.base} ice cream with {menu.topping} to top</h3>
                {menu.hasChocolateChips && 
                    <div className="withChocChips">
                        <p>comes with choc chips</p>
                    </div>
                }
            </section>
        ))}
        </main>
        )
}
