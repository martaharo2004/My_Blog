import { ProgItem } from './progItems.jsx'
import { progItems } from '../../data/progItems.js'

import './Prog.css'

export const ProgPage = () =>  {
    return (
        <section className="prog-page">
            <header className="prog-header">
                <h2 className="prog-title">Lenguajes de programación</h2>
                <p className="prog-description"></p>
            </header>

            <article className="prog-list">
                {progItems.map((item) => (
                    <ProgItem
                        id={item.id} 
                        key={item.id}                  
                        title={item.title}
                        logo={item.logo}
                        description={item.description}
                    />
                ))}
            </article>
        </section>
    )
}