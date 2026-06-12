import './Prog.css'

export const ProgItem = ({id, title, logo, description}) =>  {
    return (
        <article className="prog-item">
            <header id={id}  className="prog-item-header">
                <img className="prog-item-img" src={logo} alt={title}/>
                <h2 className="prog-title"> {title} </h2>
            </header>

            <div className="prog-content">
                <p className="prog-description"> {description} </p>
                <ul></ul>
            </div>
        </article>
    )
}

export default ProgItem