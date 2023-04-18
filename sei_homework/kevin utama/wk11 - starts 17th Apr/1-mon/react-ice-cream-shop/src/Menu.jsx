import { useEffect, useState } from 'react'
import Data from './data.json'
import './Menu.css'


export default function Menu() {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [isWithChocChips, setIsWithChocChips] = useState(true)
    const [selectedValue, setSelectedValue] = useState(null)

    useEffect(() => {
        // fetch('./data.json')
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        // })
            setData(Data)
            setFilteredData(Data)

    }, [])


    const handleChange = (e) => {
        setSelectedValue(e.target.value)
        let filteredData = [...data]
        // console.log(filteredData.filter(flavour => flavour.base === e.target.value))
        if(e.target.value === "All") {
            setFilteredData(data)
        } else {
            setFilteredData(filteredData.filter(flavour => flavour.base === e.target.value))
        }

    }
    
    const handleCheck = () => {
        let filteredData = [...data]
        setIsWithChocChips(!isWithChocChips)
        console.log(isWithChocChips)
        console.log("selected value is" + selectedValue)
        if(selectedValue === "All") {
            if(isWithChocChips) {
                setFilteredData(filteredData.filter(flavour => flavour.hasChocolateChips === true && flavour.base !== ''))
            } else {
                setFilteredData(filteredData.filter(flavour => flavour.base !== ''))
                console.log(filteredData)
            }
        } else {
            if(isWithChocChips) {
                setFilteredData(filteredData.filter(flavour => flavour.hasChocolateChips === true && flavour.base === selectedValue))
            } else {
                setFilteredData(filteredData.filter(flavour => flavour.base === selectedValue))
                console.log(filteredData)
            }
        }
        
    }

    return (
        <>
        <span>Base</span>
        <select onChange={handleChange} name="Base" id="">
            <option value="All">All</option>
            <option value="Vanilla Bean">Vanilla Bean</option>
            <option value="Salted Caramel">Salted Caramel</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Mint">Mint</option>
            <option value="Cinnamon">Cinnamon</option>
            <option value="Dark Chocolate">Dark Chocolate</option>
            <option value="Passion Fruit">Passion Fruit</option>
            <option value="Pistachio">Pistachio</option>
        </select>
        <input type="checkbox" onClick={handleCheck}/>
        <span>comes with choc chips</span>

        <main className="main">
            {filteredData.map(menu => (
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
        </>
        )
}
