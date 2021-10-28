import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li>Featured</li>
                <li>gottaGO</li>
                <li>Adventure Companion</li>
                <li>Note Taker</li>
                <li>Password Generator</li>
            </ul>
            <div className='container'>
                <div className='item'>
                    <img className="burgerapp" src="assets/burgerapp.PNG" alt="handsome man"></img>
                </div>
            </div>
        </div>
    )
} 
