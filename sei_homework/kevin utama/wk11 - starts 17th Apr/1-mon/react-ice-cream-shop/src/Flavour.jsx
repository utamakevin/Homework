

export default function Flavour({ menu }) {
    return (
        <section key={menu.name} className="menu-wrapper">
                <h2>{menu.name}</h2>
                <h3>{menu.base} ice cream with {menu.topping} to top</h3>
                {menu.hasChocolateChips && 
                    <div className="withChocChips">
                        <p>comes with choc chips</p>
                    </div>
                }
            </section>
    )
}